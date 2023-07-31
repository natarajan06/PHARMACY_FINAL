package com.pharmacy.management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;



import com.pharmacy.management.Model.Prescription;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {

}