import {Fragment, useEffect,useState} from 'react';
import ProjectCard1 from '../components/ProjectCard1';

export default function OngoingProjects(){
  const [projects,setProjects]=useState([]);

  useEffect(()=>{
     fetch('http://localhost:8000/api/v1/ongoing-projects')
     .then(res=>res.json())
     .then(res=>setProjects(res.ongoing_projects))
  },[])

    return <Fragment>

  <section className="project-cards">
    {projects.map(ongoing_project=><ProjectCard1 project={ongoing_project}/>)}
  </section>

    </Fragment>
}