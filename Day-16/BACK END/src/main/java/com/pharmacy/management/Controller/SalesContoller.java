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


import com.pharmacy.management.Model.Sales;

import com.pharmacy.management.Service.SalesService;
@CrossOrigin(origins= "http://localhost:3000/")
@RestController
@RequestMapping("/api3")
public class SalesContoller {
	@Autowired
	private SalesService uservice;
	
	
	@GetMapping("/getuser")
	public List<Sales> GetSales() {
		return uservice.Getsales();
	}
	@PostMapping("/adduser")
	public Sales AddSales(@RequestBody Sales sales) {
		return uservice.AddSales(sales);
	}
	@PutMapping("/edituser/{id}")
	public Sales EditSales(@PathVariable Long id, @RequestBody Sales sales) {
		return uservice.EditSales(id, sales);
	}
	@DeleteMapping("/deleteuser/{id}")
	public String DeleteSales(@PathVariable Long id) {
		return uservice.DeleteSales(id);
	}
}