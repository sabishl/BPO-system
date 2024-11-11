import React, { Fragment, useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userType: '',
    password: '',
    confirmPassword: ''
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.userType || !formData.password || !formData.confirmPassword) {
      toast.error('All fields are required');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/create-account', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        toast('User created successfully');
        console.log(response.data);
        // Clear form after successful user creation
        setFormData({
          name: '',
          email: '',
          userType: '',
          password: '',
          confirmPassword: ''
        });
      } else {
        toast.error('Failed to create user');
        console.log(response.data);
      }
    } catch (error) {
      console.error('Error creating user:', error);
      toast.error('Internal server error');
    }
  };


  return (
    <Fragment>
      <div className="login-container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Enter your name" 
              className='inp' 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email"
              className='inp' 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="userType">User Type:</label>
            <select 
              id="userType" 
              name="userType" 
              value={formData.userType} 
              onChange={handleChange} 
              className='inp' 
              required
            >
              <option value="">Select user type</option>
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
              <option value="Client">Client</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="Enter your password" 
              className='inp' 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input 
              type="password" 
              id="confirmPassword" 
              name="confirmPassword" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              placeholder="Confirm your password" 
              className='inp' 
              required 
            />
          </div>
          <button type="submit" className="create-account-btn">Create Account</button>
        </form>
      </div>
      <ToastContainer />
    </Fragment>
  );
}


