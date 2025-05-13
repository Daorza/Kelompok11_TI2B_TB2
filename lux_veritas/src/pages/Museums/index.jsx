import Layout from "../../components/layout/Layout";
import MuseumCard from "../../components/museum/MuseumCard";
import data from "../../data/museums.json";

export default function Museums() {
    return (
        <Layout>
            <h1>Daftar Museum</h1>
            <div>
                {data.map((museum) => (
                    <MuseumCard key={museum.id} museum={museum} />
                ))}
            </div>
        </Layout>
    );
}