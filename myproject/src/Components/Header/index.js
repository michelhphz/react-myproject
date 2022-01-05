
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return(
        <header className="header">
            <div>
                <strong>Michel Pech - Developer</strong>
            </div>
            <div>
                
            </div>
            <div className="navLinks">
                <Link to="/"><button>Home</button></Link>
                <Link to="/portfolio"><button>Portfolio</button></Link>
            </div>
        </header>
    )
}