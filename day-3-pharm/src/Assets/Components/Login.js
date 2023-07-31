import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  const [username, setname] = useState('');
  const [Password, setPassword] = useState('');
  

  const handleNameChange = (e) => {
    setname(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here, such as making an API call to create a new user
    console.log('Username:', username);
    console.log('Password:', Password);
   
    // Reset form fields
    setname('');
    setPassword('');
    
    
  };

  return (
    <div style={{width:'100vw',height:'120vh',justifyContent:'center',alignItems:'center',display:'flex',marginTop:50}}>
    <div style={{justifyContent:'center',alignItems:'center',backgroundColor:"ButtonShadow",padding:40}}>
      <h1 className='f'>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label >USERNAME:</label>
        <input
        type="text"
        onChange={handleNameChange}
        // placeholder='enter your username'
        // required
        />
       
        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          id="password"
        //   placeholder='enter your Password'
          value={Password}
          onChange={handlePasswordChange}
        //   required
        />
        
        

        
        <br></br>
        <Link to='/nav'>

       
        <button type="submit">LOGIN</button>
        </Link>
    
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
