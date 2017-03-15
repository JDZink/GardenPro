package data;

import java.util.Set;

import entities.Planting;
import entities.Reminder;
import entities.User;

public interface ReminderDAO {
	  public Reminder update(int id, Reminder reminder);

	  public Reminder destroy(int id);
	  
	  public void reminderToWater(Planting p);
	  
	  
	  public void reminderToHarvest(Planting p, User user);

	  public void reminderToPlantOutdoors(Planting p, User user);

	  public void reminderToPlantIndoors(Planting p, User user);

	  public void reminderOfSprouted(Planting p, User user);

	  public Reminder create(Reminder reminder);

	void reminderToStart(Planting p, User user);

	public Set<Reminder> cleanupReminders(User user);
}