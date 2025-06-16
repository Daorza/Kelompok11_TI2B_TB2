import { Link as MainLink } from "react-router-dom";

export default function Navbar() {
    return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#f8f9fa', width: '100%', position:'fixed', top:'0', zIndex: '1000',alignItems:'center' }}>
        <MainLink style={{padding:'1rem', fontSize:'33px'}} to="/">Lux Veritas</MainLink>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin:'1rem' }}>
            <li>
                <MainLink to="/#museum">Museum</MainLink>
            </li>
            <li>
                <MainLink to="/#ticket">Ticket</MainLink>
            </li>
            <li>
                <MainLink to="/#souvenir">Souvenir</MainLink>
            </li>
            <li>
                <MainLink to="/#blog">Blog</MainLink>
            </li>
        </ul>
    </nav>
    );
}
