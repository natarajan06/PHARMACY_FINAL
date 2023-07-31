package com.pharmacy.management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pharmacy.management.Model.Help;
import com.pharmacy.management.Model.Patient;

public interface HelpRepository extends JpaRepository<Help, String> {

}