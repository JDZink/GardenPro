package data;

import java.util.Collection;

import entities.Plant;
import entities.Planting;

public interface PlantingDAO {
  public Collection<Planting> index();

  public Planting show(int id);

  public Planting update(int id, Planting planting);

  public Planting create(Planting planting, int id);

  public Planting destroy(int id);

Collection<Planting> index(int userId);
}