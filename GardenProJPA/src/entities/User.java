package entities;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String username;
	private String password;
	private String zone;
	
//	@Convert(converter = LocalDateAttributeConverter.class)
//	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
	@Column(name="frost_date")
	private LocalDate frostDate;
	
	@OneToMany(mappedBy="user", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JsonManagedReference
	private Set<Planting> plantings;
	
	@OneToMany(fetch=FetchType.EAGER)
	@JoinTable(name = "user_plant", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "plant_id"))
	private Set<Plant> plants;
	
	@JsonIgnore
	@OneToMany(mappedBy="user", fetch=FetchType.EAGER)	
	private Set<Reminder> reminders;
	
	
//	private boolean reset;
	
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
	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", password=" + password + ", zone=" + zone
				+ ", frostDate=" + frostDate + "]";
	}
}
