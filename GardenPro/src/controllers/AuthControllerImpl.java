package controllers;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import data.AuthDAO;
import data.PlantingDAO;
import data.ReminderDAO;
import entities.User;
import security.JsonWebTokenGenerator;

@RestController
public class AuthControllerImpl implements AuthController {
	@Autowired
	 JsonWebTokenGenerator jwtGen;

	@Autowired
	AuthDAO dao;
	
	@Autowired
	PlantingDAO pdao;
	
	@Autowired
	ReminderDAO rdao;
	
	@GetMapping(path="ping")
	public String ping(){
		return "pong";
	}
	
	@Override
	@PostMapping(path = "/register")
	public Map<String,String> register(@RequestBody String userJson) {
		
		ObjectMapper mapper = new ObjectMapper();
	    User user = null;
	    try {
	      mapper.registerModule(new JavaTimeModule());
	      user = mapper.readValue(userJson, User.class);
	      String rawPassword = user.getPassword();
	      
//	      user.setZone("5a");
	      user = dao.resetUserFrostDate(user);
	      dao.register(user);
	      user = dao.authenticateUser(user, rawPassword);
	      String jws = jwtGen.generateUserJwt(user);
	      Map<String,String> responseJson = new HashMap<>();
	      responseJson.put("jwt", jws);
	      return responseJson;
	    } catch (IOException ie) {
	      ie.printStackTrace();
	    }
	    return null;
	}
	
	@Override
	@PostMapping(path = "/auth")
	public User authenticate(@RequestBody User user) {
		User u = null;
		if(user!= null){
			u = dao.authenticateUser(user);
		}
		return u;
	}
	
	@Override
	  @PostMapping(path = "/login")
	  public Map<String,String> login(HttpServletRequest req, HttpServletResponse res, @RequestBody String userJsonString) {
	    ObjectMapper mapper = new ObjectMapper();
	    User user = null;
	    // Parse User from JSON
	    try {
	      user = mapper.readValue(userJsonString, User.class);
	    } catch (Exception e) {
	      e.printStackTrace();
	    }
	    // Find managed User, return it if password is correct
	    try {
	      user = dao.authenticateUser(user);
	      user.setReminders(rdao.cleanupReminders(user));
	      user.setPlantings(pdao.updatePlantingsStatus(user));
	    } catch (Exception e) {
	      // User not authenticated
	      e.printStackTrace();
	      res.setStatus(401);
	      return null;
	    }

	    // Create encoded JWT for User
	    String jws = jwtGen.generateUserJwt(user);
	    Map<String, String> responseJson = new HashMap<>();
//	    req.setAttribute("userId", user.getId());
//	    System.out.println("setting user attr " + user.getId());
	    responseJson.put("jwt", jws);
	    return responseJson;
	  }
	  // Will produce 500 server errors for ALL issues, including:
	  // User not found
	  // Passwords not matching
	  // ... 500 is an inappropriate error for both of these as they are
	  // user caused issues (thus in the 400 range)

//	  @Override
//	  @RequestMapping(value = "/signup", method = RequestMethod.POST)
//	  public Map<String,String> signup(HttpServletRequest req, HttpServletResponse res, @RequestBody String userJson) {
//	    ObjectMapper mapper = new ObjectMapper();
//	    User user = null;
//	    try {
//	      user = mapper.readValue(userJson, User.class);
//	    } catch (IOException ie) {
//	      ie.printStackTrace();
//	    }
//	    user = userDao.create(user);
//	    String jws = jwtGen.generateUserJwt(user);
//	    Map<String,String> responseJson = new HashMap<>();
//	    responseJson.put("jwt", jws);
//	    return responseJson;
//	  }
//	}

}
