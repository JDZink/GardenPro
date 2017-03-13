package controllers;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import entities.Plant;

public interface PlantController {
  public Collection<Plant> index(HttpServletRequest req, HttpServletResponse res);

  public Plant show(HttpServletRequest req, HttpServletResponse res, int id);

  public Plant update(HttpServletRequest req, HttpServletResponse res, int id, String plantJson);

  public Plant create(HttpServletRequest req, HttpServletResponse res, String plantJson);

  public Plant destroy(HttpServletRequest req, HttpServletResponse res, int id);
}
