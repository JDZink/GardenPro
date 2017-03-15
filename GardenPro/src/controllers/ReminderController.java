package controllers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.RestController;

import entities.Reminder;

@RestController
public interface ReminderController {

//	Collection<Reminder> index(HttpServletRequest req, HttpServletResponse res);
//
//	Reminder show(HttpServletRequest req, HttpServletResponse res, int id);

	Reminder update(HttpServletRequest req, HttpServletResponse res, int id, String ReminderJson);

//	Reminder create(HttpServletRequest req, HttpServletResponse res, String ReminderJson);

	Reminder destroy(HttpServletRequest req, HttpServletResponse res, int id);

	Reminder mapReminder(String ReminderJson);

}