package data;

import java.util.List;
import java.util.Set;

import entities.Planting;
import entities.Reminder;
import entities.User;

public interface ReminderDAO {
	  public Reminder update(int id, Reminder reminder);

	  public Reminder destroy(int id);
	  
	  public void reminderToWater(Planting p);

	  public Reminder create(Reminder reminder, int userId);
	  
	  public Reminder create(Planting p, String cat);

	  public Set<Reminder> cleanupReminders(User user);

	  public List<Reminder> index(int userId);
}