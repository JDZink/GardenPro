package data;

import java.time.LocalDate;
import java.util.Collection;
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

	private String nl = System.lineSeparator();

	@Override
	public Reminder create(Reminder reminder, int userId) {
		em.persist(reminder);
		return reminder;
	}

	@Override
	public Reminder create(Planting p, String cat) {

		Plant plant = em.find(Plant.class, p.getPlant().getId());
		Reminder r = new Reminder();

		r.setUser(p.getUser());
		r.setPlanting(p);
		r.setPlant(p.getPlant());
		r.setComplete(false);
		switch(cat){
			case "start":
				r.setCategory(1);
				r.setTitle("Start " + p.getPlant().getCommonName());
				r.setDate(p.getUser().getFrostDate().plusWeeks(plant.getWeeksBeforeLastFrost()));
				r.setDescription("It's time to start your " + p.getPlant().getCommonName() + "!" + nl
						+ "Sowing Method: " + plant.getSowingMethod() + nl +  "Comments: " + plant.getComment() );
				break;

			case "germinate":
				r.setCategory(2);
				r.setDate(p.getStarted().plusWeeks(-plant.getStartGerm()));
				r.setTitle( p.getPlant().getCommonName() + " Seeds Germinating.");
				r.setDescription("Getting Close! Keep the seeds moist. ");
				break;

			case "indoors":
				r.setCategory(3);
				r.setDate(p.getStarted().plusWeeks(- plant.getEndGerm()));
				r.setTitle( p.getPlant().getCommonName() + " has Sprouted!");
				r.setDescription("It's time to Pot your " + p.getPlant().getCommonName() + "!"+ nl
					 +  "Comments: " + plant.getComment() );
				break;

			case "outdoors":
				r.setCategory(4);
				r.setDate(p.getUser().getFrostDate());
				r.setTitle("Transplant " + p.getPlant().getCommonName() + " Outdoors " );
				r.setDescription("It's time to plant your " + p.getPlant().getCommonName() + " outdoors! " +
				nl + "Check the weather to see if you have a frost coming up. The last one should have "
						+ "passed and you can begin moving your plants outside. " + nl +  "Comments: " + plant.getComment()  );
				break;

			case "water":
				r.setCategory(5);
				r.setDate(LocalDate.now().plusWeeks(1));
				r.setTitle("Water " + p.getPlant().getCommonName());
				r.setDescription("It's time to water your " + p.getPlant().getCommonName() + "!");
				break;

			case "harvest":
				r.setCategory(6);

				r.setDate(p.getUser().getFrostDate().plusMonths(4));
				r.setTitle("Harvest " + p.getPlant().getCommonName());
				r.setDescription("It's time to harvest your " + p.getPlant().getCommonName() + "!");
				break;
		}
		em.persist(r);
		return r;
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
		create(r, p.getUser().getId());
	}

	@Override
	public Collection<Reminder> index(int userId) {
		System.out.println("User id in index: " + userId);
		User u = em.find(User.class, userId);
		System.out.println(u);
		return u.getReminders();
	}
}