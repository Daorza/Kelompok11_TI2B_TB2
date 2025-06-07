import { Link as MainLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function Navbar() {
    return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8f9fa', width: '100%', verticalAlign: 'middle',  }}>
        <MainLink to="/" style={{ padding: '1rem'}}>Lux Veritas</MainLink>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
            <li>
                <Link to="museum" smooth={true} duration={500}>Museum</Link>
            </li>
            <li>
                <Link to="ticket" smooth={true} duration={500}>Ticket</Link>
            </li>
            <li>
                <Link to="souvenir" smooth={true} duration={500}>Souvenir</Link>
            </li>
            <li>
                <Link to="blog" smooth={true} duration={500}>Blog</Link>
            </li>
        </ul>
    </nav>
    );
}
