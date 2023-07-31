package com.pharmacy.management.Service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.pharmacy.management.Model.Purchasing;
import com.pharmacy.management.Repository.PurchasingRepository;


@Service
public class PurchasingService {

	@Autowired
	private PurchasingRepository urepo;
	
	
	
	public List<Purchasing> Getpurchasings() {
		return urepo.findAll();
	}
	public Purchasing AddPurchasing(Purchasing purchasing) {
		return urepo.save(purchasing);
	}
	public Purchasing EditPurchasing(Long id, Purchasing purchasing) {
		Purchasing userx = urepo.findById(id).orElse(null);
		if(userx != null) {
			userx.setProductName(purchasing.getProductName());
			userx.setPrice(purchasing.getPrice());
			userx.setQuantity(purchasing.getQuantity());
			return urepo.saveAndFlush(userx);
		}
		else {
			return null;
		}
	}
	public String DeletePurchasing(Long id) {
		if((urepo.findById(id).orElse(null))!=null) {
		urepo.deleteById(id);
		return "user deleted "+id;
	}
		else {
			return "can't find user";
		}
	}
	}