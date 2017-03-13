package entities;

import javax.persistence.*;

@Entity
public class Planting {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	@Column(name="user_id")
	private int userId;
	
	@Column(name="plant_id")
	private int plantId;
	
	private int qty;
	private int stage;
	private int started;
	private int planted;
	private int harvest;
	
	
	
}
