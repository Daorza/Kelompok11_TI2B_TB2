import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <Link to="/">Lux Veritas</Link>
            <nav>
                <Link to="/museums">Museum</Link>
                <Link to="/collections">Collections</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/tickets">Tickets</Link>
                <Link to="/souvenirs">Souvenirs</Link>
            </nav>
        </header>
    );
}