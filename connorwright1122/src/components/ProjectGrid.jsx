import '../index.css';

export default function ProjectGrid({items}) {
    return (
        <div className="project-grid">
            {items.map((item, idx) => (
                <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="project-item">
                    {item.img && <img src={item.img} alt={item.title} width="355" height="225" />}
                </div>
                <div className="project-item-info">
                    <h3>{item.title}</h3>
                    {item.details && (
                        <div>
                            {Object.entries(item.details).map(([key, value]) => (
                                <p key={key}>{String(value)}</p>
                            ))}
                        </div>
                    )}
                </div>
              </a>
            ))}  
        </div>
    );
}