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

import data.PlantingDAO;
import entities.Planting;

@RestController
@RequestMapping(path="plantings")
public class PlantingControllerImpl implements PlantingController{
	@Autowired
	private PlantingDAO dao;

	@GetMapping(path="ping")
	public String ping(){
		return "pong";
	}

	@Override
	@GetMapping
	public Collection<Planting> index(HttpServletRequest req, HttpServletResponse res) {
		int id = 4;
		System.out.println(req.getAttributeNames());
		return dao.index(id);
	}

	@Override
	@GetMapping(path="{id}")
	public Planting show(HttpServletRequest req, HttpServletResponse res, @PathVariable int id) {
		System.out.println("In Planting show");
		return dao.show(id);
	}

	@Override
	@PutMapping(path="{id}")
	public Planting update(HttpServletRequest req, HttpServletResponse res,@PathVariable int id, @RequestBody String plantingJson) {
		Planting planting = mapPlanting(plantingJson);
		return dao.update(id, planting);
	}

	@PostMapping(path="{pid}")
	@Override
	public Planting create(HttpServletRequest req, HttpServletResponse res,@RequestBody String plantingJson, @PathVariable int pid) {
		Planting planting = mapPlanting(plantingJson);
		int uid = ((int)req.getAttribute("userId"));
		return dao.create(planting, uid, pid);
	}

	@Override
	@DeleteMapping(path="{id}")
	public Planting destroy(HttpServletRequest req, HttpServletResponse res,@PathVariable int id) {

		return dao.destroy(id);
	}

	private Planting mapPlanting(String plantingJson){
		ObjectMapper om = new ObjectMapper();
		Planting newPlanting = null;
		try {
			newPlanting = om.readValue(plantingJson, Planting.class);
			return newPlanting;
		} catch (Exception e) {
			e.printStackTrace();

		}
		return null;

	}
}
