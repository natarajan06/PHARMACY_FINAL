package com.pharmacy.management.Service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pharmacy.management.Model.Model;
import com.pharmacy.management.Repository.Repository;

@Service
public class ApiService {

	@Autowired
	private Repository urepo;
	
	
	
	public List<Model> Getmodels() {
		return urepo.findAll();
	}
	public Model AddModel(Model model) {
		return urepo.save(model);
	}
	public Model EditModel(Long id, Model model) {
		Model userx = urepo.findById(id).orElse(null);
		if(userx != null) {
			userx.setName(model.getName());
			userx.setQuantity(model.getQuantity());
			userx.setExpiryDate(model.getExpiryDate());
			return urepo.saveAndFlush(userx);
		}
		else {
			return null;
		}
	}
	public String DeleteModel(Long id) {
		if((urepo.findById(id).orElse(null))!=null) {
		urepo.deleteById(id);
		return "user deleted "+id;
	}
		else {
			return "can't find user";
		}
	}
	}