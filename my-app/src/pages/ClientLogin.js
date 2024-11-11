import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header1 from '../components/Header1';


export default function ClientLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  const [showPassword, setShowPassword] = useState(false); 

  useEffect(() => {

    fetch('http://localhost:8000/api/v1/login')
      .then((res) => res.json())
      .then((res) => setUsers(res.users))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      toast.error('Please enter both email and password.');
      return;
    }

    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setUserDetails(user);
      if (user.userType === 'Client') {

        sessionStorage.setItem('user', JSON.stringify(user)); 
        toast('loging in ....');
        window.history.replaceState(null, '', '/client-home'); 
        window.location.href = '/client-home';
      } else {

        toast.error('Only clients are allowed to access this page.');
      }
    } else {

      toast.error('Invalid email or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Fragment>
      <Header1 />
      <div className="login-container">
        <h2>Client Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="inp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter your password"
              className="inp"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="toggle-password-btn" onClick={togglePasswordVisibility}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <br />
        <button onClick={handleLogin} className="create-account-btn">Login</button>
      </div>
      <ToastContainer />
    </Fragment>
  );
}
