import { useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import data from '../../data/museums.json';

export default function MuseumDetail() {
    const { id } = useParams();
    const museum = data.find((m) => m.id === id); //Just in case error ubah pakai ParseInt(id)

    // === Bentuk tenary condition ===
    {museum ? (
        <Layout>
            <h1>{museum.name}</h1>
            <img src={museum.image} alt={museum.name} />
            <p>{museum.description}</p>
        </Layout>
    ) : (
        <Layout>
            <p>Museum tidak ditemukan!</p>
        </Layout>
    )}

    // === Bentuk asli ===
    // if (!museum) {
    //     return (
    //         <Layout>
    //             <p>Museum tidak ditemukan!</p>
    //         </Layout>
    //     );
    // }

    // return (
    //     <Layout>
    //         <h1>{museum.name}</h1>
    //         <img src={museum.image} alt={museum.name} />
    //         <p>{museum.description}</p>
    //     </Layout>
    // );
}