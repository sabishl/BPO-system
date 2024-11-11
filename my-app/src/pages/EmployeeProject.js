import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EmployeeProject() {
  const [project, setProject] = useState(null);
  const [newProjectStatus, setNewProjectStatus] = useState('');
  const { id } = useParams();
  useEffect(() => {
    fetch('http://localhost:8000/api/v1/emp-projects/' + id)
      .then(res => res.json())
      .then(res => setProject(res.project));
  }, [id]);





  const updateProjectStatus = async (status) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/emp-projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ new_project_status: newProjectStatus })
      });
      const data = await response.json();
      if (response.ok) {
        setProject(data.updatedProject);
        toast(`updated successfully.`);
        window.location.reload();
      } else {
        toast.error(`Failed to update project status: ${data.message}`);
      }
    } catch (error) {
      toast.error('Network error occurred.');
      console.error('Error updating project status:', error);
    }
    
  };



  return (
    <Fragment>
      <section className="project-cards">
        <div className="container">
          <div className="project-card">
            <h2>{project ? project.name : 'Loading...'}</h2><br/>
            <p>Description: {project ? project.description : 'Loading...'}</p><br/>
            <p>Status: {project ? project.status : 'Loading...'}</p><br/>
            <p>Project Status: {project ? project.project_status : 'Loading...'}</p><br/>
            <p>Client Name: {project ? project.client_name : 'Loading...'}</p><br/>
            <p>Client Email: {project ? project.client_email : 'Loading...'}</p><br/>
            <p>Employees: {project ? project.employees.map(emp => emp.emp_email).join(', ') : 'Loading...'}</p><br/>
            <label>Project Status : </label>
            <input 
              type="text" 
              className="add-employee" 
              name="employee" 
              placeholder="Enter the project status"
              value={newProjectStatus}
              onChange={(e) => setNewProjectStatus(e.target.value)}
            />
            <div className="buttons">
              <button className="new-employee" onClick={updateProjectStatus}>Update Project</button>
              
            </div>
          </div>
        </div>
      </section>
     <ToastContainer/>
    </Fragment>
  );
}