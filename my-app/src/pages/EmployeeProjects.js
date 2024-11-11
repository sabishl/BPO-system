import { Fragment, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import EmployeeProjectCard from '../components/EmployeeProjectCard';

export default function EmployeeProjects() {
  const [projects, setProjects] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      setUserEmail(userData.email);
    }
  }, []);

  useEffect(() => {
    if (!userEmail) return; 
    fetch('http://localhost:8000/api/v1/emp-projects')
      .then((res) => res.json())
      .then((res) => {

        const filteredProjects = res.your_projects.filter((project) => {

          return project.employees.some((employee) => employee.emp_email === userEmail);
        });

        setProjects(filteredProjects);
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, [userEmail]); 

  return (
    <Fragment>
      <section className="project-cards">
        {projects.length > 0 ? (

          projects.map(project => <EmployeeProjectCard project={project} />)
        ) : (

          <p>No projects found for {userEmail}</p>
        )}
      </section>
    </Fragment>
  );
}
