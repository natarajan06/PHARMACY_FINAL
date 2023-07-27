package com.pharmacy.management.Service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.pharmacy.management.Model.Prescription;
import com.pharmacy.management.Repository.PrescriptionRepository;


@Service
public class PrescriptionService {

	@Autowired
	private PrescriptionRepository urepo;
	
	
	
	public List<Prescription> Getprescriptions() {
		return urepo.findAll();
	}
	public Prescription AddPrescription(Prescription prescription) {
		return urepo.save(prescription);
	}
	public Prescription EditPrescription(Long id, Prescription prescription) {
		Prescription userx = urepo.findById(id).orElse(null);
		if(userx != null) {
			userx.setPatientName(prescription.getPatientName());
			userx.setMedicationName(prescription.getMedicationName());
			userx.setDosage(prescription.getDosage());
			userx.setRefillInformation(prescription.getRefillInformation());
			userx.setInstructions(prescription.getInstructions());
			userx.setNotes(prescription.getNotes());
			return urepo.saveAndFlush(userx);
		}
		else {
			return null;
		}
	}
	public String DeletePrescription(Long id) {
		if((urepo.findById(id).orElse(null))!=null) {
		urepo.deleteById(id);
		return "user deleted "+id;
	}
		else {
			return "can't find user";
		}
	}
	}