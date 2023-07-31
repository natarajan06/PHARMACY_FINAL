package com.pharmacy.management.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Help {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String message;

    // Constructors, getters, setters, and other methods

    // Default constructor
    public Help() {}

    // Parameterized constructor
    public Help(String message) {
        this.message = message;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    // toString method
    @Override
    public String toString() {
        return "HelpMessage [id=" + id + ", message=" + message + "]";
    }
}
