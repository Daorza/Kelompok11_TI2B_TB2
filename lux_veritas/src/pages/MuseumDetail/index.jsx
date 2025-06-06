import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import data from '../../data/museums.json';

export default function MuseumDetail() {
  const { id } = useParams();
  const museum = data.find((m) => m.id === id); 

  if (!museum) {
    return (
      <Layout>
        <p>Museum tidak ditemukan!</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>{museum.name}</h1>
      <img src={museum.image} alt={museum.name} />
      <p><strong>Lokasi:</strong> {museum.location}</p>
      <p>{museum.description}</p>

      <Link
        to={`/museums/${museum.id}/collections`}
      >
        Lihat Koleksi Museum →
      </Link>
    </Layout>
  );
}
