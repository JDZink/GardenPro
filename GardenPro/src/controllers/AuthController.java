package controllers;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import entities.User;

public interface AuthController {

	public User authenticate(User user);

	Map<String, String> login(HttpServletRequest req, HttpServletResponse res, String userJsonString);

	Map<String, String> register(String userJson);

}
