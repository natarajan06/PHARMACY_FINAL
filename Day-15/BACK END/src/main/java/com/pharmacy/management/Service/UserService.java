package com.pharmacy.management.Service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pharmacy.management.Model.User;



import com.pharmacy.management.Repository.UserRepository;



@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
	public Optional<User> getDetails(String email)
	{
		return repository.findById(email);
	}
	public String updateDetails(User stu)
	{
		repository.save(stu);
		return "Updated";
	}

}