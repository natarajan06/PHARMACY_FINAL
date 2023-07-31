package com.pharmacy.management.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pharmacy.management.Model.Model;
import com.pharmacy.management.Service.ApiService;
@CrossOrigin(origins= "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class Controller {
	@Autowired
	private ApiService uservice;
	
	
	@GetMapping("/getuser")
	public List<Model> GetModels() {
		return uservice.Getmodels();
	}
	@PostMapping("/adduser")
	public Model AddModel(@RequestBody Model model) {
		return uservice.AddModel(model);
	}
	@PutMapping("/edituser/{id}")
	public Model EditModel(@PathVariable Long id, @RequestBody Model model) {
		return uservice.EditModel(id, model);
	}
	@DeleteMapping("/deleteuser/{id}")
	public String DeleteModel(@PathVariable Long id) {
		return uservice.DeleteModel(id);
	}
}