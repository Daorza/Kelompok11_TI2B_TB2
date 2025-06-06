import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import { useState } from "react";

import Layout from "../../components/layout/Layout";
import MuseumCard from "../../components/museum/MuseumCard";

import data from "../../data/museums.json";
import museumData from "../../data/museums.json";
import collectionData from "../../data/collections.json";
import souvenirs from "../../data/souvenirs.json";
import blogData from "../../data/blogs.json";


export default function Home() {
    // Map rekomendasi museum
    const dataMuseum = museumData.slice(0, 3);

    // filter search museum
    const [search, setSearch] = useState("");

    const filteredMuseums = data.filter((museum) => (
        museum.name.toLowerCase().includes(search.toLowerCase()) 
        ||
        museum.location.toLowerCase().includes(search.toLowerCase())
    ));

    // Set map untuk collection
    const collections = collectionData;

    // use state dan handle tiket
    const [name, setName] = useState("");
    const [museumId, setMuseumId] = useState("");
    const [date, setDate] = useState("");
    const [quantity, setQuantity] = useState(1);
    const harga = 35000;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Tiket berhasil dipesan untuk ${name} di museum ${museumId} pada tanggal ${date}. Jumlah: ${quantity}. Total harga: Rp${harga * quantity}`);
    }


    return (
        <Layout>
            <section>
                <h1>Selamat Datang di Lux Veritas</h1>
                <p>Jelajahi lalu temukan koleksi, karya, sejarah, dan budaya di sekitar Anda.</p>
                <Link to="/museums">
                    <button>Lihat Daftar Semua Museum</button>
                </Link>
            </section>

            <section>
                <h2>Rekomendasi Museum</h2>
                <div>
                    {dataMuseum.map((museum) => (
                        <div key={museum.id}>
                            <img src={museum.image} alt={museum.name} />
                            <h4>{museum.name}</h4>
                            <p>{museum.location}</p>
                            <Link to={`/museums/${museum.id}`}>
                                Detail
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* museum */}
            <Element name="museum">
                <section>
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

                <section>
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
                </section>
            </Element>

            {/* Tiket */}
            <Element name="ticket">
                <section id="ticket">
                    <h1>Pesan Ticket Museum</h1>
                    <form onSubmit={handleSubmit} action="">
                        <label>
                            Nama Lengkap:
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                        </label>

                        <label>
                            Pilih Museum:
                            <select value={museumId} onChange={(e) => setMuseumId(e.target.value)} required>
                                <option value="">--- Pilih ---</option>
                                {museumData.map((museum) => (
                                    <option key={museum.id} value={museum.id}>{museum.name}</option>
                                ))}
                            </select>
                        </label>

                        <label>
                            Tanggal Kunjungan:
                            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                        </label>

                        <label>
                            Jumlah Tiket
                            <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} required />
                        </label>

                        <p><strong>Total Harga: </strong> Rp {(harga * quantity).toLocaleString("id-ID")}</p>

                        <button type="submit">Pesan Sekarang</button>
                    </form>
                </section>
            </Element>

            {/* suvenir */}
            <Element name="souvenir">
                <section id="souvenir">
                    <h1>Souvenir Untukmu</h1>
                    <div>
                        {souvenirs.map((souvenir) => (
                            <div key={souvenir.id}>
                                <img src={souvenir.image} alt={souvenir.name} />
                                <h2>{souvenir.name}</h2>
                                <p>{souvenir.description}</p>
                                <p><strong>Harga: </strong> Rp {souvenir.price.toLocaleString("id-ID")}</p>

                                <button onClick={() => alert(`Ditambahkan ke keranjang: ${souvenir.item}`)}>Tambah ke Keranjang</button>
                            </div>
                        ))}
                    </div>
                </section>
            </Element>

            {/* Blog */}
            <Element name="blog">
                <section id="blog">
                    <h1>Halaman Blog</h1>
                    <div>
                        {blogData.map((blog) => (
                            <div key={blog.id}>
                                <img src={blog.image} alt={blog.title} />
                                <h2>{blog.title}</h2>
                                <p>{blog.excerpt}</p>
                                <Link to={`/blog/${blog.id}`}>
                                    Selengkapnya
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </Element>
        </Layout>
    );
}