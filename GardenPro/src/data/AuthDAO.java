package data;

import entities.User;

public interface AuthDAO {
	public User register(User user);
	public User authenticateUser(User user, String rawPassword);
	public User authenticateUser(User user);
	public User resetUserFrostDate(User user);
}
