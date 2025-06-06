import Layout from "../../components/layout/Layout";
import museumData from "../../data/museums.json";
import collectionData from "../../data/collections.json";

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
                        {collections.map((item) => {
                            const museum = museumData.find((m) => m.id === item.museumId);
                            return (
                                <div key={item.id}>
                                    <img src={item.image} alt={item.name} />
                                    <div>
                                        <h2>{item.name}</h2>
                                        <p>
                                            Museum: {museum ? museum.name : "Tidak diketahui"}
                                        </p>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </Layout>
    );
}