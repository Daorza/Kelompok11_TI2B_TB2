import museumData from '../../data/museums.json';

export default function CollectionCard({ item }) {
    const museum = museumData.find((m) => m.id === item.museumId);

    return (
        <div style={{
            backgroundColor: '#f9f9f9',
            border: '1px solid #ddd',
            borderRadius: '8px',
            margin: '1rem',
            padding: '1rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Museum: {museum ? museum.name : "Tidak diketahui"}</p>
            <p>{item.description}</p>
        </div>
    )
}