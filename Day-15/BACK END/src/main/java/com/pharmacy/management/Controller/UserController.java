package com.pharmacy.management.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pharmacy.management.Model.User;
import com.pharmacy.management.Repository.UserRepository;
import com.pharmacy.management.Service.UserService;


@CrossOrigin(origins= "http://localhost:3000",allowedHeaders ="*")
@RestController
public class UserController {
	@Autowired  
	  UserRepository serviceRepository; 

		UserService service;

	@GetMapping("/get")
	 List<User> getList(){
		return serviceRepository.findAll();
	}
	@PostMapping("/post")
	public User create(@RequestBody User stu) {
		  return serviceRepository.save(stu);
	}
	@GetMapping("/get/{email}")
	public Optional<User> getbyid(@PathVariable String email){
		return service.getDetails(email);
	}
}
