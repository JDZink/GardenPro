package entities;

import java.time.LocalDate;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Planting {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	
	@OneToOne
	@JoinColumn(name="plant_id")
	private Plant plant;
	
	@OneToMany(mappedBy="planting", fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	private Set<Reminder> reminders;
	
	private int qty;
	private int stage;
	private LocalDate started;
	private LocalDate planted;
	private LocalDate harvest;

	//Getters & Setters
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Plant getPlant() {
		return plant;
	}
	public void setPlant(Plant plant) {
		this.plant = plant;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public int getStage() {
		return stage;
	}
	public void setStage(int stage) {
		this.stage = stage;
	}
	public LocalDate getStarted() {
		return started;
	}
	public void setStarted(LocalDate started) {
		this.started = started;
	}
	public LocalDate getPlanted() {
		return planted;
	}
	public void setPlanted(LocalDate planted) {
		this.planted = planted;
	}
	public LocalDate getHarvest() {
		return harvest;
	}
	public void setHarvest(LocalDate harvest) {
		this.harvest = harvest;
	}
	public int getId() {
		return id;
	}
	public Set<Reminder> getReminders() {
		return reminders;
	}
	public void setReminders(Set<Reminder> reminders) {
		this.reminders = reminders;
	}	
}
