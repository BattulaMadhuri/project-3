// Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DrawerAppBar from '../navbar/navbar';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const centeredDivStyle = {
    backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/006/469/229/small/abstract-white-and-gray-light-gradient-lines-background-free-vector.jpg)',
    backgroundSize: 'cover',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make API request
    try {
      const response = await fetch('http://localhost:8080/api/v1/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password }),
      });

      const result = await response.text(); 
    //   console.log(result);

      if (result === 'success') {
        // Navigate to home page on successful login
        navigate('/Home');
      } else {
        // Alert for failed login
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error as needed
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ ...centeredDivStyle, height: '100vh' }}>
      <DrawerAppBar />
      <form className='border border-success p-5' onSubmit={handleSubmit}>
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
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      <div className="mt-3">
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
      </form>

      {/* Add Register button with Link to registration page */}
    </div>
  );
}

export default Login;
