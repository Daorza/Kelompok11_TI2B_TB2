import { Link } from "react-router-dom";

export default function MuseumCard({ museum }) {
    return (
        <div
            style={{
                border: '1px solid #ddd',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#fff',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <img
                src={museum.image}
                alt={museum.name}
                loading="lazy"
                style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover'
                }}
            />
            <div style={{ padding: '1rem' }}>
                <h3 style={{ margin: '0 0 0.5rem' }}>{museum.name}</h3>
                <p style={{ margin: '0 0 1rem', color: '#666' }}>{museum.location}</p>
                <Link
                    to={`/museums/${museum.id}`}
                    style={{
                        padding: '0.5rem 1rem',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '6px',
                        fontSize: '0.9rem'
                    }}
                >
                    Lihat Detail
                </Link>
            </div>
        </div>
    );
}
