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
        <p>Museum tidak ditemukan!</p>
      </Layout>
    );
  }

  const museumCollections = collectionData.filter((item) => item.museumId === museum.id);
  return (
    <Layout>
      <h1>{museum.name}</h1>
      <img src={museum.image} alt={museum.name} />
      <p><strong>Lokasi:</strong> {museum.location}</p>
      <p>{museum.description}</p>

      <h2>Koleksi Dalam Museum Ini</h2>
      {museumCollections.length === 0 ? (
        <p>Belum ada koleksi untuk museum ini.</p>
      ) : (
        <div>
          {museumCollections.map((item) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </div>
      )}

      <Link to={`/museums/${museum.id}/collections`}>
        Lihat Koleksi dari Semua Museum →
      </Link>

      <Link to="/museums">Kembali ke Daftar Museum</Link>
    </Layout>
  );
}
