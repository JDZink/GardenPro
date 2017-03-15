package data;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.Plant;
import entities.Planting;
import entities.User;

@Transactional
@Repository
public class PlantingDAOImpl implements PlantingDAO{
	@PersistenceContext
	private EntityManager em;

	@Override
	public Collection<Planting> index() {
		String q = "select t from Planting t";
		List<Planting> plantings = em.createQuery(q, Planting.class).getResultList();
		return plantings;
	}

	@Override
	public Collection<Planting> index(int userId) {
		System.out.println("User id in index: " + userId);
		User u = em.find(User.class, userId);
		System.out.println(u);
		return u.getPlantings();
	}

	@Override
	public Planting show(int id) {
		
		return em.find(Planting.class, id);
	}

	@Override
	public Planting update(int id, Planting planting) {
		System.out.println("planting id to change = " + id);
		
		Planting oldPlanting = em.find(Planting.class,id);
		
		oldPlanting.setQty(planting.getQty());
		
		int startStage = oldPlanting.getStage();
		int newStage = planting.getStage();
		oldPlanting.setStage(newStage);
		
		Plant p = oldPlanting.getPlant();
		int weeksBefore = p.getWeeksBeforeLastFrost();
		
//		if (startStage != newStage){
			switch(oldPlanting.getStage()){
			case 1: oldPlanting.setStarted(LocalDate.now());
			break;
			
			case 2: oldPlanting.setStarted(LocalDate.now().minusWeeks(-p.getEndGerm()/2));
			break;
			
			case 3: oldPlanting.setStarted(LocalDate.now().minusWeeks(-p.getEndGerm()));
			break;

			case 4: oldPlanting.setPlanted(LocalDate.now());
			//planting.setHarvest(LocalDate.now().plusWeeks(tillHarvest)
			break;
			
			case 5: oldPlanting.setPlanted(LocalDate.now());
			break;
			
//		}
			
		}
		oldPlanting.setStarted(planting.getStarted());
		oldPlanting.setPlanted(planting.getPlanted());
		em.flush();
		return oldPlanting;
	}

	@Override
	public Planting create(Planting planting, int userId, int plantId) {
		User u = em.find(User.class, userId);
		planting.setUser(u);
		Plant p = em.find(Plant.class, plantId);
		planting.setPlant(p);
		int weeksBefore = p.getWeeksBeforeLastFrost();
//		int tillHarvest = p.getHarvest()
		
		em.persist(planting);
		em.flush();
		
		return em.find(Planting.class, planting.getId());
	}

	@Override
	public Planting destroy(int id) {
		Planting planting = em.find(Planting.class, id);
		em.remove(planting);
		return planting;
	}

	@Override
	public Set<Planting> updatePlantingsStatus(User user) {
		LocalDate now = LocalDate.now();
		
		for (Planting p : user.getPlantings()) {
			int s = p.getStage();
			int sproutDate = p.getPlant().getWeeksBeforeLastFrost() - p.getPlant().getEndGerm();
			
			if(s > 0){
				if(p.getStarted().minusWeeks(Math.round(sproutDate/2)).isBefore(now) && now.isBefore(p.getStarted().minusWeeks(sproutDate))){
					p.setStage(2);
				}
				else if(p.getStarted().minusWeeks(sproutDate).isBefore(now) && now.isBefore(p.getUser().getFrostDate())){
					p.setStage(3);
				}
				else if(s == 4 && p.getPlanted().plusWeeks(6).isBefore(now)){
					p.setStage(5);
				}
			}
			update(p.getId(), p);
		}
		return null;
	}
}