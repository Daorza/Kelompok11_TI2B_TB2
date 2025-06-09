import Layout from "../../components/layout/Layout";
import collectionData from "../../data/collections.json";
import CollectionCard from "../../components/museum/CollectionCard";

export default function Collections() {
    const collections = collectionData;

    return (
        <Layout>
            <div>
                <h1>Daftar Koleksi Museum</h1>

                {collections.length === 0 ? (
                    <p>Belum ada koleksi untuk museum ini.</p>
                ) : (
                    <div>
                        {collections.map((item) => (
                            <CollectionCard key={item.id} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    );
}