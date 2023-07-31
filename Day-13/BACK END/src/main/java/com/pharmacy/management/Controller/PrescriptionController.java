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
import com.pharmacy.management.Model.Prescription;
import com.pharmacy.management.Service.PrescriptionService;
@CrossOrigin(origins= "http://localhost:3000/")
@RestController
@RequestMapping("/api9")
public class PrescriptionController {
	@Autowired
	private PrescriptionService uservice;
	
	
	@GetMapping("/getuser")
	public List<Prescription> GetPrescriptions() {
		return uservice.Getprescriptions();
	}
	@PostMapping("/adduser")
	public Prescription AddPrescription(@RequestBody Prescription prescription) {
		return uservice.AddPrescription(prescription);
	}
	@PutMapping("/edituser/{id}")
	public Prescription EditPrescription(@PathVariable Long id, @RequestBody Prescription prescription) {
		return uservice.EditPrescription(id, prescription);
	}
	@DeleteMapping("/deleteuser/{id}")
	public String DeletePrescription(@PathVariable Long id) {
		return uservice.DeletePrescription(id);
	}
}