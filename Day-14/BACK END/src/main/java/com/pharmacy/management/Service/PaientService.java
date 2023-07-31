package com.pharmacy.management.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pharmacy.management.Model.Patient;
import com.pharmacy.management.Repository.PatientRepository;


@Service
public class PaientService {

	@Autowired
	private PatientRepository urepo;
	
	
	
	public List<Patient> Getpatients() {
		return urepo.findAll();
	}
	public Patient AddPatient(Patient patient) {
		return urepo.save(patient);
	}
	public Patient EditPatient(Long id, Patient patient) {
		Patient userx = urepo.findById(id).orElse(null);
		if(userx != null) {
			userx.setFirstName(patient.getFirstName());
			userx.setLastName(patient.getLastName());
			userx.setEmail(patient.getEmail());
			userx.setPhone(patient.getPhone());
			userx.setMedicalHistory(patient.getMedicalHistory());
			userx.setInsurance(patient.getInsurance());
			return urepo.saveAndFlush(userx);
		}
		else {
			return null;
		}
	}
	public String DeletePatient(Long id) {
		if((urepo.findById(id).orElse(null))!=null) {
		urepo.deleteById(id);
		return "user deleted "+id;
	}
		else {
			return "can't find user";
		}
	}
	}