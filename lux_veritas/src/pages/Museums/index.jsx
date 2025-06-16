import { useState } from "react";
import Layout from "../../components/layout/Layout";
import MuseumCard from "../../components/museum/MuseumCard";
import data from "../../data/museums.json";

export default function Museums() {
    const [search, setSearch] = useState("");

    const filteredMuseums = data.filter((museum) =>
        museum.name.toLowerCase().includes(search.toLowerCase()) ||
        museum.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Layout>
            <section style={{ marginTop: '8rem', padding: '2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ marginBottom: '1rem' }}>Daftar Museum</h1>
                    <input
                        type="text"
                        placeholder="Cari Museum"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            padding: '0.5rem 1rem',
                            width: '100%',
                            maxWidth: '400px',
                            border: '1px solid #ccc',
                            borderRadius: '8px'
                        }}
                    />
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '1.5rem'
                    }}
                >
                    {filteredMuseums.map((museum) => (
                        <MuseumCard key={museum.id} museum={museum} />
                    ))}
                </div>

                {filteredMuseums.length === 0 && (
                    <p style={{ marginTop: '2rem' }}>Museum tidak ditemukan!</p>
                )}
            </section>
        </Layout>
    );
}
