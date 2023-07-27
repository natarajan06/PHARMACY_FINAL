import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import "./PatientCustomerForm.css";
import { getPatient, postPatient } from "../../api";
import { Connect,useSelector } from "react-redux";

const PatientCustomerForm = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    medicalHistory: "",
    insurance: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const id=useSelector(state=>state.insinform)

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to add the new customer to the server
    postPatient(formData)
      .then((response) => {
        // If the request is successful, add the customer to the state
        setCustomers((prevState) => [...prevState, response.data]);
        // Reset the form fields after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          medicalHistory: "",
          insurance: "",
        });
      })
      .catch((error) => {
        console.error("Error adding customer:", error);
      });
  };

  const fetchCustomers = () => {
    // Make a GET request to fetch the list of customers from the server
    getPatient()
      .then((response) => {
        // If the request is successful, set the customers state
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching customers:", error);
      });
  };

  useEffect(() => {
    // Filter customers by patient ID and name
    const results = customers.filter((customer) =>
      customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.patientId.toString().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, customers]);

  return (
    <div className="patient-customer-form-container">
      <Navbar />

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Medical History:</label>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Insurance Information:</label>
            <input
              type="text"
              name="insurance"
              placeholder={id}

              onChange={handleChange}
            />
          </div>
          <button type="submit">Add Customer</button>
        </form>

        <div className="search-container">
         
        </div>

       
          
        
      </div>
    </div>
  );
};

export default PatientCustomerForm;
