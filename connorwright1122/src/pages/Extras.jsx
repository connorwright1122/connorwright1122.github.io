import '../index.css';
import ProjectGrid from '../components/ProjectGrid';
import { twodData } from '../components/extrasdata';
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

            <h1>!!!!!CURRENTLY UNDER RECONSTRUCTION!!!!!</h1>
            
            <div className='siteBody'>
                <h2 style={{textAlign:'left', paddingLeft:'60px'}}>2D Work (Film, Photography, Graphic Design)</h2>
                <ProjectGrid items={twodData}></ProjectGrid>

            </div>
            
        </>
    );
}