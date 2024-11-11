import React, { Fragment, useState,useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateProject() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Get user email from session storage
    const user = sessionStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setUserEmail(userData.email);
      console.log(userEmail);
    }
  }, [userEmail]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'pending',
    project_status: 'None',
    client_name: '',
    client_email: '',
    employees: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.description || !formData.client_name || !formData.client_email) {
      toast.error('All fields are required');
      return;
    }
    if(userEmail!==formData.client_email)
    {
      toast.error('Enter your mail');
      return;      
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/project_requests', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        toast('Project created successfully');
        console.log(response.data);
        // Clear form after successful project creation
        setFormData({
          name: '',
          description: '',
          status: 'pending',
          project_status: 'None',
          client_name: '',
          client_email: '',
          employees: []
        });
      } else {
        toast.error('Failed to create project');
        console.log(response.data);
      }
    } catch (error) {
      console.error('Error creating project:', error);
      toast.error('Internal server error');
    }
  };

  return (
    <Fragment>
      <div className="login-container">
        <h2>Create Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Enter project name" 
              className='inp' 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea 
              id="description" 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              placeholder="Enter project description"
              className='inp' 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientName">Client Name:</label>
            <input 
              type="text" 
              id="client_name" 
              name="client_name" 
              value={formData.client_name} 
              onChange={handleChange} 
              placeholder="Enter client name" 
              className='inp' 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="clientEmail">Client Email:</label>
            <input 
              type="email" 
              id="client_email" 
              name="client_email" 
              value={formData.client_email} 
              onChange={handleChange} 
              placeholder="Enter client email" 
              className='inp' 
              required 
            />
          </div>
          <button type="submit" className="create-account-btn">Create Project</button>
        </form>
      </div>
      <ToastContainer />
    </Fragment>
  );
}
