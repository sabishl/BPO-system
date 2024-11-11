import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function CompletedSingleProject() {
  const [project, setProject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/completed-projects/' + id)
      .then(res => res.json())
      .then(res => setProject(res.project));
  }, [id]);
 

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
          </div>
        </div>
      </section>
    </Fragment>
  );
}

