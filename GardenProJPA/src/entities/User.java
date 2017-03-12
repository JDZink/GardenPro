package entities;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	private String username;
	private String email;
	private String password;
	@JsonIgnore
	private boolean reset;
	@JsonIgnore
	@OneToMany(mappedBy="user", fetch=FetchType.EAGER)	
	private Set<Reminder> reminders;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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


	
	
	
	

}
