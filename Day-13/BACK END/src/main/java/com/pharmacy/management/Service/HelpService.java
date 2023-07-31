package com.pharmacy.management.Service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pharmacy.management.Model.Help;
import com.pharmacy.management.Repository.HelpRepository;




@Service
public class HelpService {

	@Autowired
	private HelpRepository repository;
	
	public Optional<Help> getDetails(String email)
	{
		return repository.findById(email);
	}
	public String updateDetails(Help stu)
	{
		repository.save(stu);
		return "Updated";
	}

}