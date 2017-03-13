package data;

import java.util.Collection;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

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
		User u = em.find(User.class, userId);
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
//		oldPlanting.setComplete(planting.isComplete());
//		oldPlanting.setTask(planting.getTask());
//		oldPlanting.setDescription(planting.getDescription());
		em.flush();
		return oldPlanting;
	}

	@Override
	public Planting create(Planting planting, int userId) {
		User u = em.find(User.class, userId);
		planting.setUser(u);
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

}
