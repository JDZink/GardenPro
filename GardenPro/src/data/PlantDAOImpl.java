package data;

import java.util.Collection;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.Plant;
import entities.User;

@Transactional
@Repository
public class PlantDAOImpl implements PlantDAO{
	@PersistenceContext
	private EntityManager em;

	@Override
	public Collection<Plant> index() {
		String q = "select t from Plant t";
		List<Plant> plants = em.createQuery(q, Plant.class).getResultList();
		return plants;
	}

	@Override
	public Collection<Plant> index(int userId) {
		User u = em.find(User.class, userId);
		return u.getPlants();
	}

	@Override
	public Plant show(int id) {
		
		return em.find(Plant.class, id);
	}

	@Override
	public Plant update(int id, Plant plant) {
		System.out.println("plant id to change = " + id);
		Plant oldPlant = em.find(Plant.class,id);
		oldPlant.setComplete(plant.isComplete());
		oldPlant.setTask(plant.getTask());
		oldPlant.setDescription(plant.getDescription());
		em.flush();
		return oldPlant;
	}

	@Override
	public Plant create(Plant plant, int userId) {
		User u = em.find(User.class, userId);
		plant.setUser(u);
		em.persist(plant);
		em.flush();
		
		return em.find(Plant.class, plant.getId());
	}

	@Override
	public Plant destroy(int id) {
		Plant plant = em.find(Plant.class, id);
		em.remove(plant);
		return plant;
	}

}
