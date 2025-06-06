import Layout from "../../components/layout/Layout"; 
import souvenirs from "../../data/souvenirs.json";

export default function Souvenirs() {
    return (
        <Layout>
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
        </Layout>
    );
}