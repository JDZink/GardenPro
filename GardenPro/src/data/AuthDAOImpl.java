package data;

import java.time.LocalDate;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import entities.User;


@Transactional
@Repository
public class AuthDAOImpl implements AuthDAO {
	@PersistenceContext
	private EntityManager em;

	  @Autowired
	  BCryptPasswordEncoder passwordEncoder;

	@Override
	public User register(User user) {
		 // extract raw password
	    String rawPassword = user.getPassword();
	    System.out.println("Password Raw = " + rawPassword);
	    // encode raw password
	    String encodedPassword = passwordEncoder.encode(rawPassword);
	    // reset the user's password to the encoded one
	    user.setPassword(encodedPassword);
	    // persist the user
	    em.persist(user);
	    // force EntityManager to persist immediately
	    em.flush();
	    // return the persisted user
	    return user;
	}

	@Override
	public User authenticateUser(User user, String rawPassword) {
		// find the User by username
		User us = null;
		  try {
			  System.out.println("IN AUTHENTICATEUSER");
			  System.out.println(user);
			  String q = "SELECT u FROM User u WHERE username = :un";
					  
			us = em.createQuery(q, User.class).setParameter("un", user.getUsername()).getSingleResult();
			System.out.println("U: " + us);
			
			//resets frost date year if frost date has already passed
			while(us.getFrostDate().isBefore(LocalDate.now())){
				us.setFrostDate(us.getFrostDate().plusYears(1));
			}
		} catch (Exception e) {
			
		}
		  if (passwordEncoder.matches(rawPassword, us.getPassword())) {
		    return us;
		  }
		  return null;
	}
	
	@Override
	public User authenticateUser(User user) {
		// find the User by username
		User us = null;
		try {
			System.out.println("IN AUTHENTICATEUSER");
			System.out.println(user);
			String q = "SELECT u FROM User u WHERE username = :un";
			
			us = em.createQuery(q, User.class).setParameter("un", user.getUsername()).getSingleResult();
//			us = em.createQuery("SELECT u FROM User u WHERE username = '" +
//			  user.getUsername() + "'").getSingleResult();
			System.out.println("U: " + us);
			
//			 return u;
		} catch (Exception e) {
			
		}
		if (passwordEncoder.matches(user.getPassword(), us.getPassword())) {
			return us;
		}
		return null;
	}
	
	@Override
	public User resetUserFrostDate(User user){
		
		//removes zone specifying character
		 int tempZone = Integer.parseInt(user.getZone());
		
		if (tempZone >= 11){
			user.setFrostDate(null);
			return user;
		} else if(tempZone == 9 || tempZone == 10){
			user.setFrostDate(LocalDate.of(LocalDate.now().getYear(), 12, 15));
			return user;
		} else if(tempZone == 8){
			user.setFrostDate(LocalDate.of(LocalDate.now().getYear(), 11, 15));
			return user;
		} else if(tempZone >= 5 && tempZone <= 7){
			user.setFrostDate(LocalDate.of(LocalDate.now().getYear(), 10, 15));
			return user;
		} else if(tempZone == 3 || tempZone == 4){
			user.setFrostDate(LocalDate.of(LocalDate.now().getYear(), 9, 15));
			return user;
		} else if(tempZone == 2){
			user.setFrostDate(LocalDate.of(LocalDate.now().getYear(), 8, 15));
			return user;
		} else if(tempZone == 1){
			user.setFrostDate(LocalDate.of(LocalDate.now().getYear(), 7, 15));
			return user;
		}
		return user;
	}
}