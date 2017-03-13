package data;

import entities.User;

public interface AuthDAO {
	public User Register(User user);
	public User authenticateUser(User user);

}
