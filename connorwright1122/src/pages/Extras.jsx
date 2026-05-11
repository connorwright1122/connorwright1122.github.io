import '../index.css';
import ProjectGrid from '../components/ProjectGrid';
import { vfxData, btsData, threedData, designData } from '../components/extrasdata';
import { gamedevData } from '../components/projectdata';
import ImageSlider from '../components/ImageSlider';

export default function Portfolio() {
    return (
        <>
            <div className="backdrop" style={{ height: "400px", 
                    backgroundImage:"url('/assets/images/backdrops/connor-self-portrait.jpg')", 
                    backgroundSize: "cover",
                    backgroundPosition: "center"}}>
                <div className="centered">
                    <h1>Art</h1>
                </div>
            </div>
            
            <div className='siteBody'>
                <h2>Films</h2>
                <ProjectGrid items={vfxData}></ProjectGrid>

                <h2>BTS / VFX Tests</h2>
                <ProjectGrid items={btsData}></ProjectGrid>

                <h2>3D Art</h2>
                <ProjectGrid items={threedData}></ProjectGrid>

                <h2>2D Art / Graphic Design</h2>
                <ProjectGrid items={designData}></ProjectGrid>

                <h2>Game Dev</h2>
                <ProjectGrid items={gamedevData}></ProjectGrid>

            </div>
            
        </>
    );
}