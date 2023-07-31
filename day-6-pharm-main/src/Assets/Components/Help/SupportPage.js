import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

class SupportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to send the support message
    // to your backend or perform any necessary actions
    console.log('Support message:', this.state);
    // Clearing the form fields
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <h1>Support Page</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SupportPage;
