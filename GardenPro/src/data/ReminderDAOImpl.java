package data;

import java.time.LocalDate;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.Plant;
import entities.Planting;
import entities.Reminder;
import entities.User;

@Transactional
@Repository
public class ReminderDAOImpl implements ReminderDAO{
	@PersistenceContext
	private EntityManager em;

	@Override
	public Reminder update(int id, Reminder reminder) {
		Reminder r = em.find(Reminder.class,id);
		r.setCategory(reminder.getCategory());
		r.setComplete(reminder.isComplete());
		r.setDescription(reminder.getDescription());
		r.setTitle(reminder.getTitle());
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

		int sowDate = plant.getLastFrost();
		r.setDate(user.getFrostDate().minusWeeks(sowDate));
		
		if(LocalDate.now() == r.getDate()){
			//Trigger reminder
		}
	}
	
	@Override
	public void reminderOfSprouted(Planting p, User user){
		Plant plant = em.find(Plant.class, p.getPlant());
		Reminder r = new Reminder();

		int sproutDate = plant.getLastFrost();
		r.setDate(user.getFrostDate().minusWeeks(sowDate));
		
		if(LocalDate.now() == r.getDate()){
			//Trigger reminder
		}

	}

	@Override
	public void reminderToPlantIndoors(Planting p, User user){
		Plant plant = em.find(Plant.class, p.getPlant());
		Reminder r = new Reminder();

		int plantDate = plant.getLastFrost();
		r.setDate(user.getFrostDate().minusWeeks(plant.getLastFrost()));
		
		if(LocalDate.now() == r.getDate()){
			//Trigger reminder
		}
	}
	
	@Override
	public void reminderToPlantOutdoors(Planting p, User user){
		Plant plant = em.find(Plant.class, p.getPlant());
		Reminder r = new Reminder();
		
		r.setDate(user.getFrostDate().minusWeeks(plant.getLastFrost()));
		
		if(LocalDate.now() == r.getDate()){
			//Trigger reminder
		}
	}
	
	@Override
	public void reminderToHarvest(Planting p, User user){
		
	}
}