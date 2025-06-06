import Layout from "../../components/layout/Layout";
import { useState } from "react";
import museumData from "../../data/museums.json";

export default function Tickets() {
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
                            <option key={museum.id} value="{museum.id}">{museum.name}</option>
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

                <p><strong>Total Harga: </strong> Rp {total.toLocaleString("id-ID")}</p>

                <button type="submit">Pesan Sekarang</button>
            </form>
        </Layout>
    );
}