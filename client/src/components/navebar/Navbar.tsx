import { Link } from "react-router-dom"
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h2>
                <Link to={"/"}>X-Box Live</Link>
            </h2>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/New"} className="new-btn">
                        Novo Post
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar