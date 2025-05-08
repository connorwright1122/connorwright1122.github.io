import '../index.css';
import { useParams } from 'react-router-dom';
import { projectData, gamedevData, experienceData } from '../components/projectdata';


export default function ProjectDetail() {
    const { slug } = useParams();
    const allProjects = [...projectData, ...gamedevData, ...experienceData];
    const project = experienceData.find(p => p.slug === slug);

    if (!project) {
        return <h2>Project not found</h2>;
    }
    
    
    return (
        <>
            <div className="backdrop" style={{ height: "400px", 
                    backgroundImage:'url(${project.img})', 
                    backgroundSize: "cover",
                    backgroundPosition: "center"}}>
                <div className="centered">
                    <h1>{project.title}</h1>
                </div>
            </div>

            <div class="site-body">
                <div className="project-detail">
                <h1>{project.title}</h1>
                <img src={project.img} alt={project.title} style={{ width: '300px' }} />
                {project.details && Object.entries(project.details).map(([key, value]) => (
                    <p key={key}><strong>{key}:</strong> {String(value)}</p>
                ))}
                </div>
            </div>

        </>
    );
}