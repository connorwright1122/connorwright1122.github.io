import '../index.css';

export default function ImageSlider ({images}) {
    return (
    <div className="slider">
        <div className="slides">
            {images.map((src, index) => (
                <div key={index} id={`slide-${index + 1}`}>
                    <img src={src} />
                </div>
            ))}
        </div>
    </div>
    );
}