package data;

import java.util.Set;

import entities.Planting;
import entities.Reminder;
import entities.User;

public interface ReminderDAO {
	  public Reminder update(int id, Reminder reminder);

	  public Reminder destroy(int id);
	  
	  public void reminderToWater(Planting p);
	  
	  public void reminderToHarvest(Planting p);

	  public void reminderToPlantOutdoors(Planting p);

	  public void reminderToPlantIndoors(Planting p);

	  public Reminder reminderOfSprouted(Planting p);

	  public Reminder create(Reminder reminder);
	  
	  public Reminder create(Planting p, String cat);

	  public void reminderToStart(Planting p);

	  public Set<Reminder> cleanupReminders(User user);
}