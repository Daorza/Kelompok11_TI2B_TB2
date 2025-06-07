import { Link as MainLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function Navbar() {
    return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#f8f9fa', width: '100%', position:'fixed', top:'0' }}>
        <MainLink style={{padding:'1rem'}} to="/">Lux Veritas</MainLink>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin:'1rem' }}>
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
