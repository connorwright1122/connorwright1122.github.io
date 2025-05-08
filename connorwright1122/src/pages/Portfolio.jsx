import '../index.css';
import ProjectGrid from '../components/ProjectGrid';
import { experienceData, gamedevData, projectData } from '../components/projectdata';

export default function Portfolio() {
    return (
        <>

            <div className="backdrop" style={{ height: "400px", 
                    backgroundImage:"url('/assets/images/backdrops/portfolio-backdrop-3.png')", 
                    backgroundSize: "cover",
                    backgroundPosition: "center"}}>
                <div className="centered">
                    <h1>Portfolio</h1>
                </div>
            </div>
            
            <div className='siteBody'>
                <h2 style={{textAlign:'left', paddingLeft:'60px'}}>Experience</h2>
                <ProjectGrid items={experienceData}></ProjectGrid>

                <h2 style={{textAlign:'left', paddingLeft:'60px'}}>Projects</h2>
                <ProjectGrid items={projectData}></ProjectGrid>

                <h2 style={{textAlign:'left', paddingLeft:'60px'}}>Game Dev</h2>
                <ProjectGrid items={gamedevData}></ProjectGrid>
            </div>
            
        </>
    );
}