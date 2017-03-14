package controllers;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import entities.Planting;

public interface PlantingController {
  public Collection<Planting> index(HttpServletRequest req, HttpServletResponse res);

  public Planting show(HttpServletRequest req, HttpServletResponse res, int id);

  public Planting update(HttpServletRequest req, HttpServletResponse res, int id, String plantingJson);

//  public Planting create(HttpServletRequest req, HttpServletResponse res, String plantingJson);

  public Planting destroy(HttpServletRequest req, HttpServletResponse res, int id);

  public Planting create(HttpServletRequest req, HttpServletResponse res, String plantingJson, int pid);
}
