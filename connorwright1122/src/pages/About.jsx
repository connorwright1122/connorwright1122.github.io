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
                <p>Hey, I'm Connor! I'm a Software Engineer, Creative Technologist, and award-winning filmmaker. </p>
                <p>I recently graduated from Georgia Tech with a degree in Computer Science, specializing in Artificial Intelligence and Computational Media where I created interactive systems for computer graphics and machine learning applications. 
                    My work spans full-stack engineering, observability, machine learning, generative AI, and 3D/XR development, with experience across Fortune 500 teams, research labs, and game studios. 
                    I’m especially interested in building tools that enhance human creativity and productivity through AI-assisted workflows and interactive experiences. 
                    Alongside a foundation in product management and user experience design, I aim to develop software that's both usable and useful.  
                </p>
                <p>
                    I spend my free time at the intersection of art and technology, building tools for artists or working on an endless stream of passion projects. 
                    Check out some of my work on the Art tab!
                </p>
            </div>
            
            <a href="/assets/documents/ConnorWrightResume.pdf" target="_blank">
                <h2>Resume</h2>
                <div><iframe src="/assets/documents/ConnorWrightResume.pdf" id="resume"></iframe></div>
            </a>
        </>
    );
}