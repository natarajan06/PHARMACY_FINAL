package com.pharmacy.management.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Prescription {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String patientName;
    private String medicationName;
    private String dosage;
    private String refillInformation;
    private String instructions;
    private String notes;

    // Constructors
    public Prescription() {
    }

    public Prescription(String patientName, String medicationName, String dosage,
                        String refillInformation, String instructions, String notes) {
        this.patientName = patientName;
        this.medicationName = medicationName;
        this.dosage = dosage;
        this.refillInformation = refillInformation;
        this.instructions = instructions;
        this.notes = notes;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getMedicationName() {
        return medicationName;
    }

    public void setMedicationName(String medicationName) {
        this.medicationName = medicationName;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public String getRefillInformation() {
        return refillInformation;
    }

    public void setRefillInformation(String refillInformation) {
        this.refillInformation = refillInformation;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    // toString method (optional but useful for debugging)
    @Override
    public String toString() {
        return "Prescription{" +
                "id=" + id +
                ", patientName='" + patientName + '\'' +
                ", medicationName='" + medicationName + '\'' +
                ", dosage='" + dosage + '\'' +
                ", refillInformation='" + refillInformation + '\'' +
                ", instructions='" + instructions + '\'' +
                ", notes='" + notes + '\'' +
                '}';
    }
}
