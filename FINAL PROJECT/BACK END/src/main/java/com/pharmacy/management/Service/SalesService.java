package com.pharmacy.management.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pharmacy.management.Model.Sales;
import com.pharmacy.management.Repository.SalesRepository;

@Service
public class SalesService {

	@Autowired
	private SalesRepository urepo;
	
	
	
	public List<Sales> Getsales() {
		return urepo.findAll();
	}
	public Sales AddSales(Sales sales) {
		return urepo.save(sales);
	}
	public Sales EditSales(Long id, Sales sales) {
		Sales userx = urepo.findById(id).orElse(null);
		if(userx != null) {
			userx.setName(sales.getName());
			userx.setQuantity(sales.getQuantity());
			userx.setPrice(sales.getPrice());
			return urepo.saveAndFlush(userx);
		}
		else {
			return null;
		}
	}
	public String DeleteSales(Long id) {
		if((urepo.findById(id).orElse(null))!=null) {
		urepo.deleteById(id);
		return "user deleted "+id;
	}
		else {
			return "can't find user";
		}
	}
	}