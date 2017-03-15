package data;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

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
	public Reminder create(Reminder reminder) {
		em.persist(reminder);
		return reminder;
	}
	
	@Override
	public Set<Reminder> cleanupReminders(User user) {
		Set<Reminder> tempReminders = new HashSet<>();
		Set<Reminder> reminders = user.getReminders();
		
		for (Reminder r : reminders) {
			if(r.getDate().isAfter(LocalDate.now().minusMonths(11))){
				tempReminders.add(r);
			}
		}
		return tempReminders;
	}
	
	@Override
	public Reminder update(int id, Reminder reminder) {
		Reminder r = em.find(Reminder.class,id);
		r.setCategory(reminder.getCategory());
		r.setComplete(reminder.isComplete());
		r.setDescription(reminder.getDescription());
		r.setTitle(reminder.getTitle());
		r.setDate(reminder.getDate());
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
		r.setDate(p.getStarted().plusWeeks(1));
		if(LocalDate.now() == r.getDate()){
			//Trigger reminder
		}
		create(r);

	}
	
	@Override
	public void reminderToStart(Planting p, User user){
		Plant plant = em.find(Plant.class, p.getPlant());
		Reminder r = new Reminder();

		r.setDate(user.getFrostDate().minusWeeks(plant.getWeeksBeforeLastFrost()));
		
		if(LocalDate.now() == r.getDate()){
			//Trigger reminder
		}
		create(r);
	}
	
	@Override
	public void reminderOfSprouted(Planting p, User user){
		Plant plant = em.find(Plant.class, p.getPlant());
		Reminder r = new Reminder();

		int sproutDate = plant.getWeeksBeforeLastFrost() - (Math.round((plant.getStartGerm() + plant.getEndGerm())/2));
		r.setDate(user.getFrostDate().minusWeeks(sproutDate));
		
		if(LocalDate.now() == r.getDate()){
			//Trigger reminder
		}
		create(r);

	}

	@Override
	public void reminderToPlantIndoors(Planting p, User user){
		Plant plant = em.find(Plant.class, p.getPlant());
		Reminder r = new Reminder();

		r.setDate(user.getFrostDate().minusWeeks(plant.getWeeksBeforeLastFrost() - plant.getEndGerm()));
		
		if(LocalDate.now() == r.getDate()){
			//Trigger reminder
		}
		create(r);
	}
	
	@Override
	public void reminderToPlantOutdoors(Planting p, User user){
		Plant plant = em.find(Plant.class, p.getPlant());
		Reminder r = new Reminder();
		
		r.setDate(user.getFrostDate());
		if(LocalDate.now() == r.getDate()){
			//Trigger reminder
		}
		create(r);
	}
	
	@Override
	public void reminderToHarvest(Planting p, User user){
		
	}

}