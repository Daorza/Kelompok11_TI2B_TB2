import { useState } from "react";
import Layout from "../../components/layout/Layout";
import MuseumCard from "../../components/museum/MuseumCard";
import data from "../../data/museums.json";

export default function Museums() {
    const [search, setSearch] = useState("");

    const filteredMuseums = data.filter((museum) => (
        museum.name.toLowerCase().includes(search.toLowerCase()) 
        ||
        museum.location.toLowerCase().includes(search.toLowerCase())
    ));


    return (
        <Layout>
            <section style={{marginTop:'8rem'}}>
                <div>
                    <h1>Daftar Museum</h1>
                    <input
                        type="text"
                        placeholder="Cari Museum"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div>
                    {filteredMuseums.map((museum) => (
                        <MuseumCard key={museum.id} museum={museum} />
                    ))}
                </div>

                {filteredMuseums.length === 0 && (
                    <p>Museum tidak ditemukan!</p>
                )}
            </section>
        </Layout>
    );
}