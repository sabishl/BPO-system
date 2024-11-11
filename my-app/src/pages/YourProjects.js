import { Fragment, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ClientProjectCard from '../components/ClientProjectCard';

export default function YourProjects() {
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
    fetch('http://localhost:8000/api/v1/your-projects')
      .then((res) => res.json())
      .then((res) => {
        
        const proj = res.your_projects.filter((project) => project.client_email === userEmail);
        
        
        if (Array.isArray(proj)) {
          setProjects(proj);
        } else {
        
          setProjects([proj]);
        }
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, [userEmail]);

  return (
    <Fragment>
      <section className="project-cards">
        {projects.length > 0 ? (
          projects.map(project => <ClientProjectCard project={project} />)
        ) : (

          <p>No projects found for {userEmail}</p>
        )}
      </section>
    </Fragment>
  );
}
