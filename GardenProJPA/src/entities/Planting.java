package entities;

import java.util.*;
import javax.persistence.*;

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
	private Date started;
	private Date planted;
	private Date harvest;

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
	public Date getStarted() {
		return started;
	}
	public void setStarted(Date started) {
		this.started = started;
	}
	public Date getPlanted() {
		return planted;
	}
	public void setPlanted(Date planted) {
		this.planted = planted;
	}
	public Date getHarvest() {
		return harvest;
	}
	public void setHarvest(Date harvest) {
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
