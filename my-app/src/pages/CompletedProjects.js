import {Fragment, useEffect,useState} from 'react';
import ProjectCard2 from '../components/ProjectCard2';

export default function CompletedProjects(){
  const [projects,setProjects]=useState([]);

  useEffect(()=>{
     fetch('http://localhost:8000/api/v1/completed-projects')
     .then(res=>res.json())
     .then(res=>setProjects(res.completed_projects))
  },[])

    return <Fragment>

  <section className="project-cards">
    {projects.map(completed_project=><ProjectCard2 project={completed_project}/>)}
  </section>

    </Fragment>
}