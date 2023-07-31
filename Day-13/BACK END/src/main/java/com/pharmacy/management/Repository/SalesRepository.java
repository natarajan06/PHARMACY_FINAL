package com.pharmacy.management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;



import com.pharmacy.management.Model.Sales;

public interface SalesRepository extends JpaRepository<Sales, Long> {

}