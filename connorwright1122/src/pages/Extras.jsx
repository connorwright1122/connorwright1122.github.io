import '../index.css';
import ProjectGrid from '../components/ProjectGrid';
import { vfxData, threedData, designData } from '../components/extrasdata';
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
                    <h1>Extras</h1>
                </div>
            </div>

            <h1>NOTE: This page is CURRENTLY UNDER RECONSTRUCTION into react.js!</h1>
            
            <div className='siteBody'>
                <h2 style={{textAlign:'left', paddingLeft:'60px'}}>VFX Tests / Animations</h2>
                <ProjectGrid items={vfxData}></ProjectGrid>

                <h2 style={{textAlign:'left', paddingLeft:'60px'}}>3D Art</h2>
                <ProjectGrid items={threedData}></ProjectGrid>

                <h2 style={{textAlign:'left', paddingLeft:'60px'}}>Graphic Design</h2>
                <ProjectGrid items={designData}></ProjectGrid>

                <h2 style={{textAlign:'left', paddingLeft:'60px'}}>Game Dev</h2>
                <ProjectGrid items={gamedevData}></ProjectGrid>

            </div>
            
        </>
    );
}