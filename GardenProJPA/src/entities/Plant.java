package entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Plant {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
//	@OneToOne(mappedBy="plant")
//	private Planting planting;
//	
//	@OneToOne(mappedBy="plant")
//	private Reminder reminder;
	
	@Column(name = "common_name")
	private String commonName;
	
	@Column(name = "botanical_name")
	private String botanicalName;
	private String variety;
	private String type;

	@Column(name = "method_num")
	private int methodNum;

	@Column(name = "sowing_method")
	private String sowingMethod;
	
	@Column(name = "last_frost")
	private int lastFrost;
	private String depth;
	private String space;
	private String life;
	private String transplant;
	private String img;
	private String comment;
	
	//Getters & Setters
//	public Planting getPlanting() {
//		return planting;
//	}
//	public void setPlanting(Planting planting) {
//		this.planting = planting;
//	}
	public String getCommonName() {
		return commonName;
	}
	public void setCommonName(String commonName) {
		this.commonName = commonName;
	}
	public String getBotanicalName() {
		return botanicalName;
	}
	public void setBotanicalName(String botanicalName) {
		this.botanicalName = botanicalName;
	}
	public String getVariety() {
		return variety;
	}
	public void setVariety(String variety) {
		this.variety = variety;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getMethodNum() {
		return methodNum;
	}
	public void setMethodNum(int methodNum) {
		this.methodNum = methodNum;
	}
	public String getSowingMethod() {
		return sowingMethod;
	}
	public void setSowingMethod(String sowingMethod) {
		this.sowingMethod = sowingMethod;
	}
	public int getLastFrost() {
		return lastFrost;
	}
	public void setLastFrost(int lastFrost) {
		this.lastFrost = lastFrost;
	}
	public String getDepth() {
		return depth;
	}
	public void setDepth(String depth) {
		this.depth = depth;
	}
	public String getSpace() {
		return space;
	}
	public void setSpace(String space) {
		this.space = space;
	}
	public String getLife() {
		return life;
	}
	public void setLife(String life) {
		this.life = life;
	}
	public String getTransplant() {
		return transplant;
	}
	public void setTransplant(String transplant) {
		this.transplant = transplant;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public int getId() {
		return id;
	}
//	public Reminder getReminder() {
//		return reminder;
//	}
//	public void setReminder(Reminder reminder) {
//		this.reminder = reminder;
//	}
}
