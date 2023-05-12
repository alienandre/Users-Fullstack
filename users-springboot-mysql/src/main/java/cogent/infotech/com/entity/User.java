package cogent.infotech.com.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.web.bind.annotation.CrossOrigin;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String name;
	int age;
	String imgUrl;
	
	public User() {
		
	}
	
	public User(int id, String name, int age, String imgUrl) {
		this.id=id;
		this.name=name;
		this.age=age;
		this.imgUrl=imgUrl;
	}
	
	public User(String name, int age, String imgUrl) {
		this.name=name;
		this.age=age;
		this.imgUrl=imgUrl;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
	
	public String getImgUrl() {
		return imgUrl;
	}
	
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	
}
