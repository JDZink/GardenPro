package entities;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

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
	private LocalDate frostDate;
	
	@OneToMany(mappedBy="user", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	private Set<Planting> plantings;
	
	@OneToMany(fetch=FetchType.EAGER)
	@JoinTable(name = "user_plant", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "plant_id"))
	private Set<Plant> plants;
//	
//	@ManyToMany(fetch = FetchType.EAGER, cascade = { CascadeType.PERSIST, CascadeType.REMOVE })
//	@JoinTable(name = "user_tv_show", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "tv_show_id"))
//	Set<TVShow> tvShows;
	
	@JsonIgnore
	@OneToMany(mappedBy="user", fetch=FetchType.EAGER)	
	private Set<Reminder> reminders;
	
	@JsonIgnore
	private boolean reset;
	
	
	
	
	
	
	//Getters & Setters
	public Set<Planting> getPlantings() {
		return plantings;
	}
	public Set<Plant> getPlants() {
		return plants;
	}
	public void setPlants(Set<Plant> plants) {
		this.plants = plants;
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
	public LocalDate getFrostDate() {
		return frostDate;
	}
	public void setFrostDate(LocalDate frostDate) {
		this.frostDate = frostDate;
	}
}
