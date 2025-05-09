import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <header>
            <div class="nav-v2">
                <h1>Connor Wright</h1>
                <ul class="navigation">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    
                    <li>
                        <Link to="/extras">Extras</Link>
                    </li>
                    
                </ul>
            </div>
        </header>
    );
}