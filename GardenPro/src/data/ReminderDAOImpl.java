package data;

import java.time.LocalDate;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.User;
import entities.Plant;
import entities.Planting;
import entities.Reminder;

@Transactional
@Repository
public class ReminderDAOImpl implements ReminderDAO{
	@PersistenceContext
	private EntityManager em;

	@Override
	public Reminder update(int id, Plant plant) {
		Reminder r = em.find(Reminder.class,id);

		em.flush();
		return r;
	}

	@Override
	public Reminder destroy(int id) {
		Reminder r = em.find(Reminder.class, id);
		em.remove(r);
		return r;
	}

	@Override
	public void reminderToWater(Planting p){
		Reminder r = new Reminder();
		r.setDate(p.getStarted().plusWeeks(2));
		if(LocalDate.now() == r.getDate()){
			//Trigger reminder
		}
	}
	
	@Override
	public void reminderToSow(Planting p, User user){
		Plant plant = em.find(Plant.class, p.getPlant());
		Reminder r = new Reminder();

		int sowDate = plant.getLastFrost() + plant.getEndGerm();
		r.setDate(user.getFrostDate().minusWeeks(sowDate));
		
		if(LocalDate.now() == r.getDate()){
			//Trigger reminder
		}
	}

	@Override
	public void reminderToPlant(Planting p, User user){
		Plant plant = em.find(Plant.class, p.getPlant());
		Reminder r = new Reminder();

		int plantDate = plant.getLastFrost();
		r.setDate(user.getFrostDate().minusWeeks(plant.getLastFrost()));
		
		if(LocalDate.now() == r.getDate()){
			//Trigger reminder
		}
	}
	
	@Override
	public void reminderToHarvest(Planting p, User user){
		
	}
}