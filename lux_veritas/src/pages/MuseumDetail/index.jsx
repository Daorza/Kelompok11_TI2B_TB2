import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import data from '../../data/museums.json';
import collectionData from '../../data/collections.json';
import CollectionCard from '../../components/museum/CollectionCard';

export default function MuseumDetail() {
  const { museumId } = useParams();
  const museum = data.find((m) => m.id === museumId);

  if (!museum) {
    return (
      <Layout>
        <p style={{ padding: '2rem', fontSize: '1.2rem' }}>Museum tidak ditemukan!</p>
      </Layout>
    );
  }

  const museumCollections = collectionData.filter((item) => item.museumId === museum.id);

  return (
    <Layout>
      <section style={{ padding: '2rem', marginTop: '6rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{museum.name}</h1>

        <img
          src={museum.image}
          alt={museum.name}
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '12px',
            marginBottom: '1.5rem'
          }}
        />

        <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
          <strong>Lokasi:</strong> {museum.location}
        </p>
        <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>{museum.description}</p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Koleksi Dalam Museum Ini</h2>

        {museumCollections.length === 0 ? (
          <p>Belum ada koleksi untuk museum ini.</p>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}
          >
            {museumCollections.map((item) => (
              <CollectionCard key={item.id} item={item} />
            ))}
          </div>
        )}

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            to={`/museums/${museum.id}/collections`}
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              textDecoration: 'none'
            }}
          >
            Lihat Koleksi dari Semua Museum →
          </Link>

          <Link
            to="/museums"
            style={{
              backgroundColor: '#6c757d',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              textDecoration: 'none'
            }}
          >
            Kembali ke Daftar Museum
          </Link>
        </div>
      </section>
    </Layout>
  );
}
