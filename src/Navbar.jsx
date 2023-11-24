import { Link } from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar" id="main-navbar">
            <ul className="nav-links">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/aboutme">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}
