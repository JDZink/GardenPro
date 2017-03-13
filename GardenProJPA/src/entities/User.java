package entities;

import java.util.*;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String username;
	private String password;
	private String zone;
	
	@Column(name="frost_date")
	private Date frostDate;
	
	@OneToMany(mappedBy="user", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	private Set<Planting> plantings;
	
	@JsonIgnore
	@OneToMany(mappedBy="user", fetch=FetchType.EAGER)	
	private Set<Reminder> reminders;
	
	@JsonIgnore
	private boolean reset;
	
	//Getters & Setters
	public Set<Planting> getPlantings() {
		return plantings;
	}
	public void setPlantings(Set<Planting> plantings) {
		this.plantings = plantings;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean isReset() {
		return reset;
	}
	public void setReset(boolean reset) {
		this.reset = reset;
	}
	public Set<Reminder> getReminders() {
		return reminders;
	}
	public void setReminders(Set<Reminder> reminders) {
		this.reminders = reminders;
	}
	public int getId() {
		return id;
	}
	public String getZone() {
		return zone;
	}
	public void setZone(String zone) {
		this.zone = zone;
	}
	public Date getFrostDate() {
		return frostDate;
	}
	public void setFrostDate(Date frostDate) {
		this.frostDate = frostDate;
	}
}
