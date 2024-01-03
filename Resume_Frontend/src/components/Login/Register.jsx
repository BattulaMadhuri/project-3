// Register.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DrawerAppBar from '../navbar/navbar';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const navigate = useNavigate();

  const centeredDivStyle = {
    backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/006/469/229/small/abstract-white-and-gray-light-gradient-lines-background-free-vector.jpg)',
    backgroundSize: 'cover',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== reenterPassword) {
      alert('Passwords do not match');
      return;
    }

    // Make API request for registration
    try {
      const response = await fetch('http://localhost:8080/api/v1/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.text();

      if (result === 'success') {
        alert('Registration successful. Please log in.');
        navigate('/');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle error as needed
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ ...centeredDivStyle, height: '100vh' }}>
      <DrawerAppBar />
      <form className='border border-success p-5' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Re-enter Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Re-enter password"
            value={reenterPassword}
            onChange={(e) => setReenterPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      {/* Link to the login page */}
      <div className="mt-3">
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
      </form>

    </div>
  );
}

export default Register;
