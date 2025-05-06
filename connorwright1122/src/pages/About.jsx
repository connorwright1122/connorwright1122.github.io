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
                <p>I will be graduating in Spring 2026 and am seeking software engineering or technical artist roles. You can find my past experience and projects on the Portfolio tab.</p>
                <p>I am fascinated by the intersection of art and technology and how we can use emerging technologies such as XR and AI tools to enhance human creativity. 
                    In my spare time you can find me building tools for artists or working on my own endless stream of passion projects. 
                    I also love everything to do with film and VFX - keep an eye out for my short film Tachyon Deliverance coming soon to a galaxy near you (email me to get the screening link).
                    Additionally, I dabble in photography, 3D modeling, hiking, and game development. 
                    You can find some of my work on the Extras page.</p>
            </div>
            
            <a href="/assets/documents/ConnorWrightResume.pdf" target="_blank">
                <h2>Resume</h2>
                <div><iframe src="/assets/documents/ConnorWrightResume.pdf" id="resume"></iframe></div>
            </a>
        </>
    );
}