package cogent.infotech.com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import cogent.infotech.com.entity.User;

import cogent.infotech.com.repository.UserRepository;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {
	@Autowired
	private UserRepository userRepository;
	//Get operation to return all users in database
	@GetMapping("/user")
	public List<User> getAllUsers(){
		return (List<User>)userRepository.findAll();
	}
	
	//Post operation to save single user to database
	@PostMapping("/user")
	public User saveUser(@Validated @RequestBody User user) {
		return userRepository.save(user);
	}
	
	//Delete operation to delete single user from database
	@DeleteMapping("/user/{id}")
	public void deleteUser(@PathVariable("id") String id) {
		int userId = Integer.parseInt(id);
		userRepository.deleteById(userId);
	}
	
	//Put operation to update single user from database
	@PutMapping("/user")
	public void updateUser(@Validated @RequestBody User user) {
		userRepository.save(user);
	}
}
