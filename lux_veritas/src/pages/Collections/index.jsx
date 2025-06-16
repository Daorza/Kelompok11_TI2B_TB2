import Layout from "../../components/layout/Layout";
import collectionData from "../../data/collections.json";
import CollectionCard from "../../components/museum/CollectionCard";

export default function Collections() {
    const collections = collectionData;

    return (
        <Layout>
            <div style={{ padding: '2rem', marginTop: '6rem' }}>
                <h1 style={{
                    fontSize: '2rem',
                    marginBottom: '2rem',
                    textAlign: 'center',
                    color: '#333'
                }}>
                    Daftar Koleksi Museum
                </h1>

                {collections.length === 0 ? (
                    <p style={{ textAlign: 'center', fontSize: '1rem' }}>
                        Belum ada koleksi untuk museum ini.
                    </p>
                ) : (
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '1.5rem',
                        }}
                    >
                        {collections.map((item) => (
                            <CollectionCard key={item.id} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
}
