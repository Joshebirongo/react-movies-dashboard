import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">
                    React Movies Dashboard
                </span>
                <nav className="navbar">
                    <Link to="/" className="nav-link"> Home</Link>
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                </nav>
            </div>
        </nav>
    );
}