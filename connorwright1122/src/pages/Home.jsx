import '../index.css';
import BackdropLink from '../components/BackdropLink';
import { experienceData, gamedevData, projectData, classData } from '../components/projectdata';
import ProjectGrid from '../components/ProjectGrid';

export default function Home() {
    return (
        <>
            <div className="backdrop" style={{ height: "815px", 
                    backgroundImage:"url('/assets/images/backdrops/AI-Backdrop-4.gif')", 
                    backgroundSize: "cover",
                    backgroundPosition: "center"}}>
                <div className="centered">
                    <h1>Connor Wright</h1>
                    <p>Developer | Designer | Part-Time Visionary</p>
                </div>
            </div>

            <BackdropLink to="/about" title="About" background='/assets/images/backdrops/about-backdrop1.jpg'></BackdropLink>
            <BackdropLink to="/portfolio" title="Work" background='/assets/images/backdrops/portfolio-backdrop-3.png'></BackdropLink>
            <BackdropLink to="/extras" title="Art" background='/assets/images/backdrops/connor-self-portrait.jpg'></BackdropLink>
            
            {/* Hidden Details for Bot Crawlers */}
            <div style={{display:'none'}}>
                <p>Hi, I'm Connor! I'm a fourth year Computer Science student at Georgia Tech with concentrations in
                    Artificial Intelligence and Computer Graphics / Media. </p>
                <p>I will be graduating in Spring 2026 and am seeking Software Engineering, Technical Artist, or Creative Technologist roles. 
                    I have experience in full-stack programming, generative AI tools, machine learning research, and 3D / VR development.
                    You can find my past experience and projects on the Work tab.</p>
                <p>I am fascinated by the intersection of art and technology and how we can use emerging technologies such as XR and AI tools to enhance human creativity. 
                    In my spare time you can find me building tools for artists or working on my own endless stream of passion projects. 
                    I also love everything to do with film and VFX - keep an eye out for my short film Tachyon Deliverance coming soon to a galaxy near you (email me to get the screening link).
                    Additionally, I dabble in photography, 3D modeling, hiking, and game development. 
                    You can find some of my creative work on the Art page.</p>
                
                <h2 >Experience</h2>
                <ProjectGrid items={experienceData}></ProjectGrid>

                <h2>Projects</h2>
                <ProjectGrid items={projectData}></ProjectGrid>

                <h2>Game Dev</h2>
                <ProjectGrid items={gamedevData}></ProjectGrid>

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