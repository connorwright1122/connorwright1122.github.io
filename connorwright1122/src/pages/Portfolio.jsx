import '../index.css';
import ProjectGrid from '../components/ProjectGrid';
import { experienceData, gamedevData, projectData, classData } from '../components/projectdata';

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
                <h2 >Experience</h2>
                <ProjectGrid items={experienceData}></ProjectGrid>

                <h2>Projects</h2>
                <ProjectGrid items={projectData}></ProjectGrid>

                <h2>Game Dev</h2>
                <ProjectGrid items={gamedevData}></ProjectGrid>

                {/*
                <h2>Classes</h2>
                <>
                    <ul style={{textAlign:'left'}}>
                        {classData.map((c, idx) => (
                            <>
                                <li key={idx}>{c.number} - {c.name}</li>
                                <ul>
                                    <li>{c.skills}</li>
                                </ul>
                            </>
                        ))}
                    </ul>
                </>
                */}
                <h2>Classes</h2>
                <div style={{display: "flex", justifyContent: "center"}}>
                <table style={{ width: "80%", textAlign: "left", borderCollapse: "collapse"}}>
                <thead>
                    <tr>
                    <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Class Number</th>
                    <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Class Name</th>
                    <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {classData.map((c, idx) => (
                    <tr key={idx}>
                        <td style={{ padding: "8px", verticalAlign: "top" }}>{c.number}</td>
                        <td style={{ padding: "8px", verticalAlign: "top" }}>{c.name}</td>
                        <td style={{ padding: "8px", verticalAlign: "top" }}>{c.skills}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
                </div>

            </div>
            
        </>
    );
}