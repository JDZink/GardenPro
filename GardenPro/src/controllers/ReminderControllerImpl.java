package controllers;

import java.util.Collection;

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

import data.PlantDAO;
import entities.Plant;

@RestController
@RequestMapping(path="reminders")
public class ReminderControllerImpl implements PlantController {
	@Autowired
	private PlantDAO dao;
	
	@GetMapping(path="ping")
	public String ping(){
		return "pong";
	}

	@Override
	@GetMapping
	public Collection<Plant> index(HttpServletRequest req, HttpServletResponse res) {
		return dao.index();
	}

	@Override
	@GetMapping(path="{id}")
	public Plant show(HttpServletRequest req, HttpServletResponse res, @PathVariable int id) {
		return dao.show(id);
	}

	@Override
	@PutMapping(path="{id}")
	public Plant update(HttpServletRequest req, HttpServletResponse res,@PathVariable int id, @RequestBody String plantJson) {
		Plant plant = mapPlant(plantJson);
		return dao.update(id, plant);
	}

	@PostMapping
	@Override
	public Plant create(HttpServletRequest req, HttpServletResponse res,@RequestBody String plantJson) {
		Plant plant = mapPlant(plantJson);
		return dao.create(plant);
	}

	@Override
	@DeleteMapping(path="{id}")
	public Plant destroy(HttpServletRequest req, HttpServletResponse res,@PathVariable int id) {
		
		return dao.destroy(id);
	}
	
	private Plant mapPlant(String plantJson){
		ObjectMapper om = new ObjectMapper();
		Plant newPlant = null;
		try {
			newPlant = om.readValue(plantJson, Plant.class);
			return newPlant;
		} catch (Exception e) {
			e.printStackTrace();
			
		}
		return null;
		
	}
}
