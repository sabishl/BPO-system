import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SingleProject() {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/projects/' + id)
      .then(res => res.json())
      .then(res => setProject(res.project));
  }, [id]);





  const updateProjectStatus = async (status) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ new_status: status })
      });
      const data = await response.json();
      if (response.ok) {
        setProject(data.updatedProject);
        toast(`${status} successfully.`);
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
            <div className="buttons">
              <button onClick={() => updateProjectStatus('rejected')} className="reject">Reject</button>
              <button onClick={() => updateProjectStatus('accepted')} className="accept">Accept</button>
            </div>
          </div>
        </div>
      </section>
     <ToastContainer/>
    </Fragment>
  );
}

