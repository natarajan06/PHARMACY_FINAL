import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { Checkbox } from '@material-ui/core';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [staff, setStaff] = useState(false);
  const [manager, setManager] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleNameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError('');
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(value.length < 8 ? 'Password should be at least 8 characters long' : '');
  };

  const handleStaffChange = () => {
    setStaff(!staff);
  };

  const handleManagerChange = () => {
    setManager(!manager);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate username
    if (username.trim() === '') {
      setUsernameError('Username is required');
      return;
    }

    // Validate password
    if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long');
      return;
    }

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Staff:', staff);
    console.log('Manager:', manager);

    // Reset form fields and errors
    setUsername('');
    setPassword('');
    setStaff(false);
    setManager(false);
    setUsernameError('');
    setPasswordError('');
  };

  const isFormValid = username.trim() !== '' && password.length >= 8;

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-heading">LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username"></label>
          <input
            placeholder="Username"
            type="text"
            id="username"
            value={username}
            onChange={handleNameChange}
            required
          />
          {usernameError && <p className="error-message">{usernameError}</p>}

          <label></label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && <p className="error-message">{passwordError}</p>}

          <div className="manager-checkbox">
            <Checkbox
              checked={manager}
              onChange={handleManagerChange}
              color="primary"
            />
            <label>Manager</label>
          </div>

          <div className="staff-checkbox">
            <Checkbox
              checked={staff}
              onChange={handleStaffChange}
              color="primary"
            />
            <label>Staff</label>
          </div>

          <Link to="/nav">
            <button type="submit" disabled={!isFormValid}>
              LOGIN
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
