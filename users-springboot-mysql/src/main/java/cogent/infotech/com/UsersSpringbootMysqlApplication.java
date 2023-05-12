package cogent.infotech.com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import cogent.infotech.com.controller.UserController;

@SpringBootApplication
public class UsersSpringbootMysqlApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(UsersSpringbootMysqlApplication.class, args);
	}
	
	@Autowired
	private UserController userController;
	@Override
	public void run(String... args) throws Exception {
		
	}

}
