import '../index.css';
import { Link } from 'react-router-dom';
import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed';
import SocialLinkPreview from './SocialLinkPreview';


export default function ProjectGrid({items}) {
    
    return (
        <div className="project-grid">
            {items.map((item, idx) => 
                {
                    const hasSlug = !!item.slug;
            
                    const ProjectCard = (
                        <>
                            
                            {item.social_url && (
                                <SocialLinkPreview url={item.social_url} />
                            )}
                            {!item.social_url && (
                                <div className="project-item"  id='project-img' style={{ backgroundImage: `url(${item.img})` }}></div>
                            )}
                            
                            <div className="project-item-info">
                                <h3>{item.title}</h3>
                                {item.details &&
                                    Object.entries(item.details).map(([key, value]) => (
                                    <p key={key}>{String(value)}</p>
                                ))}
                            </div>
                        </>
                    );
            
                    return hasSlug ? (
                        <Link to={`/project/${item.slug}`} key={item.slug}>
                            {ProjectCard}
                        </Link>
                    ) : 
                    (
                        <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer">
                            {ProjectCard}
                        </a>
                    );
                })
            }
        </div>
    );
}

/*
                <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer">
                    <div className="project-item" id='project-img'>
                        {item.img && <img src={item.img} alt={item.title} id='project-img'  />}
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
*/