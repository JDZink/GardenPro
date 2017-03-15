package controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;

import data.ReminderDAO;
import entities.Reminder;

@RestController
@RequestMapping(path="reminders")
public class ReminderControllerImpl implements ReminderController {
	@Autowired
	private ReminderDAO dao;
	
	@GetMapping(path="ping")
	public String ping(){
		return "pong";
	}

//	@Override
//	@GetMapping
//	public Collection<Reminder> index(HttpServletRequest req, HttpServletResponse res) {
//		return dao.index();
//	}
//
//	@Override
//	@GetMapping(path="{id}")
//	public Reminder show(HttpServletRequest req, HttpServletResponse res, @PathVariable int id) {
//		return dao.show(id);
//	}

	@Override
	@PutMapping(path="{id}")
	public Reminder update(HttpServletRequest req, HttpServletResponse res,@PathVariable int id, @RequestBody String ReminderJson) {
		Reminder Reminder = mapReminder(ReminderJson);
		return dao.update(id, Reminder);
	}

//	@PostMapping
//	@Override
//	public Reminder create(HttpServletRequest req, HttpServletResponse res,@RequestBody String ReminderJson) {
//		Reminder Reminder = mapReminder(ReminderJson);
//		return dao.create(Reminder);
//	}

	@Override
	@DeleteMapping(path="{id}")
	public Reminder destroy(HttpServletRequest req, HttpServletResponse res,@PathVariable int id) {
		
		return dao.destroy(id);
	}
	
	@Override
	public Reminder mapReminder(String ReminderJson){
		ObjectMapper om = new ObjectMapper();
		Reminder newReminder = null;
		try {
			newReminder = om.readValue(ReminderJson, Reminder.class);
			return newReminder;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}