import React from 'react';
import Navbar from '../Navbar/Navbar';

class PurchaseMedicationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      medication: '',
      quantity: 0,
      address: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to process the medication purchase
    // such as making an API call or performing any necessary actions
    console.log('Medication purchase:', this.state);
    // Clearing the form fields
    this.setState({
      medication: '',
      quantity: 0,
      address: ''
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className='purch'>
        <h1>Purchase Medication</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="medication">Medication:</label>
            <input
              type="text"
              id="medication"
              name="medication"
              value={this.state.medication}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <navbar/>
            <label htmlFor="address">Delivery Address:</label>
            <textarea
              id="address"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit">Purchase</button>
        </form>
        </div>
        
      </div>
    );
  }
}

export default PurchaseMedicationPage;
