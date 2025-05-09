import '../index.css';
import { Link, useParams } from 'react-router-dom';
import { projectData, gamedevData, experienceData } from '../components/projectdata';
import { YouTubeEmbed } from 'react-social-media-embed';


export default function ProjectDetail() {
    const { slug } = useParams();
    const allProjects = [...projectData, ...gamedevData, ...experienceData];
    const project = allProjects.find(p => p.slug === slug);

    if (!project) {
        return <h2>Project not found</h2>;
    }
    
    
    return (
        <>
            <div className="backdrop" style={{ height: "400px", 
                    backgroundImage:`url(${project.img})`, 
                    backgroundSize:'cover',
                    backgroundPosition: "center"}}>
                <div className="centered">
                    <h1>{String(project.details.origin)}</h1>
                    <h1>{project.title}</h1>
                </div>
            </div>

            <div className="site-body">
                <div className="project-detail">
                    
                    {/*<img src={project.img} alt={project.title} style={{ width: '300px' }} />
                    {project.details && Object.entries(project.details).map(([key, value]) => (
                        <p>{String(project.details.origin)}</p>
                        //<p key={key}>{String(value)}</p>
                    ))}
                    <h1>{String(project.details.origin)}</h1>
                    <h2>{project.title}</h2>*/}
                    <p>Tools: {project.details.tools}</p>
                    {project.desc && Object.entries(project.desc).map(([key, value]) => (
                        <p align='left' key={key} style={{align:'left'}}>{String(value)}</p>
                    ))}
                    <ul align='left'>
                        {project.list1 && Object.entries(project.list1).map(([key, value]) => (
                            <li key={key}>{String(value)}</li>
                        ))}
                    </ul>
                    {project.links && Object.entries(project.links).map(([key, value]) => {
                        
                        if (String(value[2]) === 'yt') {
                            return <YouTubeEmbed url={value[1]} height='505'/> 

                        } else if (value[2] === 'a') {
                            return <a href={value[1]}><img src={value[3]} height='505'></img></a>
                        }
                        return <p align='left' key={key} style={{align:'left'}}>{String(value[0])}</p>
                        //<p align='left' key={key} style={{align:'left'}}>{String(value)}</p>
                        
                    })}
                        

                </div>
            </div>

        </>
    );
}