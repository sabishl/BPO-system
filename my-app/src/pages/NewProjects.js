import {Fragment, useEffect,useState} from 'react';
import ProjectCard from '../components/ProjectCard';

export default function NewProjects(){
  const [projects,setProjects]=useState([]);

  useEffect(()=>{
     fetch('http://localhost:8000/api/v1/projects')
     .then(res=>res.json())
     .then(res=>setProjects(res.projects))
  },[])

    return <Fragment>

  <section className="project-cards">
    {projects.map(project=><ProjectCard project={project}/>)}
  </section>

    </Fragment>
}