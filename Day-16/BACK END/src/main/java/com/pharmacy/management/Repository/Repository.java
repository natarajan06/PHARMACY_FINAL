package com.pharmacy.management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.pharmacy.management.Model.Model;

public interface Repository extends JpaRepository<Model, Long> {

}