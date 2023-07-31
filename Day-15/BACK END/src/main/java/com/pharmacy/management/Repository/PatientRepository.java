package com.pharmacy.management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.pharmacy.management.Model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {

}