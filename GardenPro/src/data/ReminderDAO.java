package data;

import entities.Plant;
import entities.Planting;
import entities.Reminder;
import entities.User;

public interface ReminderDAO {
	  public Reminder update(int id, Plant plant);

	  public Reminder destroy(int id);
	  
	  public void reminderToWater(Planting p);
	  
	  public void reminderToSow(Planting p, User user);
	  
	  public void reminderToPlant(Planting p, User user);
	  
	  public void reminderToHarvest(Planting p, User user);
}