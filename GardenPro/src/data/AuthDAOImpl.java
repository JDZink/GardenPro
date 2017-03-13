package data;

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
	public User Register(User user) {
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
	public User authenticateUser(User user) {
		// find the User by username
		User u;
		  try {
			u = (User) em.createQuery("SELECT u FROM User u WHERE username = '" +
			    user.getUsername() + "'").getSingleResult();
			  System.out.println(u);
			 return u;
		} catch (Exception e) {
			u = (User) em.createQuery("SELECT u FROM User u WHERE email = '" +
				    user.getEmail() + "'").getSingleResult();
		}
		  if (passwordEncoder.matches(user.getPassword(), u.getPassword())) {
		    return u;
		  }
		  return null;
	}

}
