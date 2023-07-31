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

import com.pharmacy.management.Model.Purchasing;
import com.pharmacy.management.Service.PurchasingService;


@CrossOrigin(origins= "http://localhost:3000/")
@RestController
@RequestMapping("/api1")
public class PurchasingController {
	@Autowired
	private PurchasingService uservice;
	
	
	@GetMapping("/getuser")
	public List<Purchasing> GetPurchasings() {
		return uservice.Getpurchasings();
	}
	@PostMapping("/adduser")
	public Purchasing AddPurchasing(@RequestBody Purchasing purchasing) {
		return uservice.AddPurchasing(purchasing);
	}
	@PutMapping("/edituser/{id}")
	public Purchasing EditPurchasing(@PathVariable Long id, @RequestBody Purchasing purchasing) {
		return uservice.EditPurchasing(id, purchasing);
	}
	@DeleteMapping("/deleteuser/{id}")
	public String DeletePurchasing(@PathVariable Long id) {
		return uservice.DeletePurchasing(id);
	}
}