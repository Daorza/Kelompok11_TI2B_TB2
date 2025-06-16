import museumData from '../../data/museums.json';

export default function CollectionCard({ item }) {
  const museum = museumData.find((m) => m.id === item.museumId);

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        transition: 'transform 0.2s',
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '1rem',
        }}
      />
      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.name}</h3>
      <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '0.25rem' }}>
        <strong>Museum:</strong> {museum ? museum.name : 'Tidak diketahui'}
      </p>
      <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: '1.4' }}>{item.description}</p>
    </div>
  );
}
