import { Link, useLocation } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import { useState, useEffect } from "react";

import Layout from "../../components/layout/Layout";
import MuseumCard from "../../components/museum/MuseumCard";
import CollectionCard from "../../components/museum/CollectionCard";
import CartSidebar from "../../components/museum/CartSidebar";

import data from "../../data/museums.json";
import museumData from "../../data/museums.json";
import collectionData from "../../data/collections.json";
import souvenirs from "../../data/souvenirs.json";
import blogData from "../../data/blogs.json";


export default function Home() {
    // Scrolling
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const hash = location.hash.replace("#", "");
            scroller.scrollTo(hash, {
                duration: 400,
                delay: 0,
                smooth: "easeInOutQuart",
                offset: -80,
            });
        }
    }, [location]);

    // Map rekomendasi museum & koleksi
    const dataMuseum = museumData.slice(0, 3);
    const dataCollection = collectionData.slice(0, 3);

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
        alert(`Tiket berhasil dipesan untuk ${name} pada tanggal ${date}. Jumlah: ${quantity}. Total harga: Rp${harga * quantity}`);
    }

    // Souvenir useState handle
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const addToCart = (souvenir) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === souvenir.id);
            if (existing) {
                return prev.map((item) => 
                item.id === souvenir.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
            }
            return [...prev, { ...souvenir, quantity: 1 }];
        });
    };

    const handleIncrease = (id) => {
        setCartItems((prev) => 
            prev.map((item) => 
                item.id === id ? { ...item, quantity: item.quantity + 1} 
                : item
            )
        );
    };    

    const handleDecrease = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity - 1}
                : item
            ).filter((item) => item.quantity > 0)
        );
    };

    const handleRemove = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <Layout>
            <section className="hero">
                <div>
                    <h1 style={{fontSize:'190px',marginBottom:'0px', color: 'white', textShadow: '2px 2px 12px #ffffff'}}>LUX VERITAS</h1>
                    <Link to="/museums">
                        <button style={{marginTop:'5rem', padding:'1rem 2rem', backgroundColor: '#102E50', color: '#faf9f6'}}>Lihat Daftar Semua Museum</button>
                    </Link>
                </div>
                
            </section>

            <Element name="museum">
            <section className="rekomendasiMuseum">
                <div>
                    <div style={{ padding: '4rem'}}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
                            <h2 style={{ fontSize: '33px'}}>Rekomendasi Museum</h2>
                            <Link to="/museums">
                                Lihat Semua Museum →
                            </Link>
                        </div>
                        <div style={{display:'flex'}}>
                            {dataMuseum.map((museum) => (
                                <div className="cardRekomendMusemu" key={museum.id}
                                    style={{ display: 'grid', gridTemplateRows: 'repeat(2, 1fr)', gap: '1rem', boxShadow: '4px 4px 8px rgba(37, 37, 37, 0.4)', color: '#102E50'}}>
                                    <img src={museum.image} alt={museum.name} />
                                        <h4 style={{ textAlign: 'left', marginLeft: '1.5rem'}}>{museum.name}</h4>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 2rem' }}>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" style={{width:'1rem', height:'1rem', marginRight:'0.5rem'}}>
                                                <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                                            </svg>
                                            {museum.location}</p>
                                        <Link to={`/museums/${museum.id}`}>
                                            Detail
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>               
            </section>

                <section style={{ padding: '4rem' }}>
                    <div>
                        <h1>Daftar Koleksi Museum</h1>

                        {collections.length === 0 ? (
                            <p>Belum ada koleksi museum.</p>
                        ) : (
                            <div style={{display:'flex'}}>
                                {dataCollection.map((item) => (
                                    <CollectionCard key={item.id} item={item} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </Element>

            {/* Tiket */}
            <Element name="ticket">
                <section id="ticket">
                    <div className="tiketContainer">
                        <div className="tiketItem">
                            <h1>Pesan Ticket Museum</h1>
                            <form onSubmit={handleSubmit} action="" style={{ marginTop: '4rem' }}>
                                <div className="ticketForm">
                                    <table>                            
                                        <tr>
                                            <td><label> Nama Lengkap:</label></td>
                                            <td>
                                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label>Pilih Museum:</label></td>
                                            <td>
                                                <select value={museumId} onChange={(e) => setMuseumId(e.target.value)} required>
                                                    <option value="">--- Pilih ---</option>
                                                    {museumData.map((museum) => (
                                                    <option key={museum.id} value={museum.id}>{museum.name}</option>
                                                    ))}
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label>Tanggal Kunjungan:</label></td>
                                            <td>
                                                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>Jumlah Tiket</label>
                                            </td>
                                            <td>
                                                <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>Total Harga: </label>
                                            </td>
                                            <td>
                                                <p><strong></strong> Rp {(harga * quantity).toLocaleString("id-ID")}</p>
                                            </td>
                                        </tr>
                                    </table>                                   
                                </div>
                                <button type="submit" style={{ backgroundColor: '#102E50', color: '#faf9f6', padding: '0.5rem 2rem', borderRadius: '0.5rem', margin: '2rem 0'}}>Pesan Sekarang</button>
                            </form>
                        </div>
                    </div>
                </section>
            </Element>

            {/* suvenir */}
            <Element name="souvenir">
                <section className="rekomendasiMuseum">
                    <div>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:'center' }}>
                                <h2 style={{ fontSize: '2rem'}}>Souvenir Untukmu</h2>
                            </div>
                            <div style={{display:'flex'}}>
                                {souvenirs.map((souvenir) => (
                                    <div  key={souvenir.id} style={{ backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '8px', margin: '0.5rem', padding: '0.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                        <img src={souvenir.image} alt={souvenir.name} style={{ height: '50%', width: '75%', marginTop: '1rem', borderRadius: '0.5rem'}} />
                                        <div style={{ padding: '1rem', color: '#102E55'}}>
                                            <h2>{souvenir.name}</h2>
                                            <p>{souvenir.description}</p>
                                            <p><strong>Harga: </strong> Rp{souvenir.price.toLocaleString("id-ID")}</p>

                                            <button onClick={() => addToCart(souvenir)}
                                                style={{ backgroundColor: '#102E50', color: '#faf9f6', padding: '0.5rem 1rem', borderRadius: '0.5rem', marginTop: '0.5rem' }}>
                                                Tambah ke Keranjang</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button onClick={() => setShowCart(true)}
                                style={{ backgroundColor: '#102E50', color: '#faf9f6', padding: '0.5rem 4rem', borderRadius: '0.5rem', margin: '1rem' }}>
                                Keranjang ({cartItems.length})</button>
                        </div>
                    </div>               
                </section>
            </Element>

            {/* Sidebar */}
            {showCart && (
                <CartSidebar
                    cartItems={cartItems}
                    onClose={() => setShowCart(false)} 
                    onIncrease={handleIncrease}
                    onDrecrease={handleDecrease}
                    onRemove={handleRemove}
                />
            )}

            {/* Blog */}
            <Element name="blog">
                <section id="blog">
                    <h1>Halaman Blog</h1>
                    <div className="blog">
                        {blogData.map((blog) => (
                            <div className="blogCard" key={blog.id} style={{ backgroundColor: '#faf9f6'}}>
                                <img className="blogCardImg" src={blog.image} alt={blog.title} />
                                <div style={{display:"flex", alignItems:'center', marginLeft:'1rem', borderRadius:'0.5rem', color:'#102E50'}}>
                                    <div className="itemBlog">
                                    <h2 className="blogCardTitle">{blog.title}</h2>
                                    <p className="blogCardP">{blog.excerpt}</p>
                                    <Link to={`/blog/${blog.id}`}>
                                        Selengkapnya
                                    </Link>
                                </div>
                                </div>
                                
                                
                            </div>
                        ))}
                    </div>
                </section>
            </Element>
        </Layout>
    );
}