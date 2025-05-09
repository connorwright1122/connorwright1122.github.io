import '../index.css';
import ProjectGrid from '../components/ProjectGrid';
import { twodData } from '../components/extrasdata';

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
                <h2 style={{textAlign:'left', paddingLeft:'60px'}}>2D Work (Film, Photography, Graphic Design)</h2>
                <ProjectGrid items={twodData}></ProjectGrid>

            </div>
            
        </>
    );
}