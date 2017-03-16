package data;

import java.util.Collection;
import java.util.Set;

import entities.Planting;
import entities.User;

public interface PlantingDAO {
  public Collection<Planting> index();

  public Planting show(int id);

  public Planting update(int id, Planting planting);

  public Planting create(Planting planting, int id, int pid);

  public Planting destroy(int id);

  public Collection<Planting> index(int userId);

  public Set<Planting> updatePlantingsStatus(User user);
}