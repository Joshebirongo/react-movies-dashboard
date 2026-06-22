import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">
                    React Movies Dashboard
                </span>
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                
            </div>
        </nav>
    );
}