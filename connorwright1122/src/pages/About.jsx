import '../index.css';

export default function About() {
    return (
        <>

            <div className="backdrop" style={{ height: "400px", 
                    backgroundImage:"url('/assets/images/backdrops/about-backdrop1.jpg')", 
                    backgroundSize: "cover",
                    backgroundPosition: "center"}}>
                <div className="centered">
                    <h1>About</h1>
                </div>
            </div>
            
            <div class="site-body">
                <p>Hi, I'm Connor! I'm a fourth year Computer Science student at Georgia Tech with concentrations in
                    Artificial Intelligence and Computer Graphics / Media. </p>
                <p>I've worked for Georgia Tech's Expressive Machinery Lab developing an embodied co-cretive AI improv dance agent and GT OIT's Academic / Research Technology Division researching use cases for new VR softwares to be implemented into GT courses. 
                    For the future, I'm seeking experience in software engineering and product management. </p>
                <p>In my free time, I enjoy photography, 3D modeling, game development, and watching weird arthouse films. You can find some of my work in the Extras tab.</p>
                
            </div>
            
            <a href="/assets/documents/ConnorWrightResume.pdf" target="_blank">
                <h2>Resume</h2>
                <div><iframe src="/assets/documents/ConnorWrightResume.pdf" id="resume"></iframe></div>
            </a>
        </>
    );
}