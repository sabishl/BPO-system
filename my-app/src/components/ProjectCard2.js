import {Link} from 'react-router-dom';
export default function ProjectCard2({project}){
    return     <div className="container">
    <div className="project-card">
      <h2>{project.name}</h2>
      <p>Client name: {project.client_name}</p><br></br>
      <Link to={"/completed-projects/"+project._id} className="view">View</Link>
    </div>

</div>
   
}