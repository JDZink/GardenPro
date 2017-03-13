package data;

import java.util.Collection;

import entities.Plant;


public interface PlantDAO {
  public Collection<Plant> index();

  public Plant show(int id);

  public Plant update(int id, Plant plant);

  public Plant create(Plant plant);

  public Plant destroy(int id);

Collection<Plant> index(int userId);

}