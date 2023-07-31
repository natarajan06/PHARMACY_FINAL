package com.pharmacy.management.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pharmacy.management.Model.User;




public interface UserRepository extends JpaRepository<User, String> {

}