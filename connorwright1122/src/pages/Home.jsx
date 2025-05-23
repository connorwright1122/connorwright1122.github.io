import '../index.css';
import BackdropLink from '../components/BackdropLink';

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
            <BackdropLink to="/portfolio" title="Portfolio" background='/assets/images/backdrops/portfolio-backdrop-3.png'></BackdropLink>
            <BackdropLink to="/extras" title="Extras" background='/assets/images/backdrops/connor-self-portrait.jpg'></BackdropLink>

        </>
    );
}