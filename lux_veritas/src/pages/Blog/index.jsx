import Layout from "../../components/layout/Layout"; 
import blogData from "../../data/blogs.json";
import { useParams, Link } from "react-router-dom";

export default function Blog() {
    const { id } = useParams();
    const blog = blogData.find((item) => item.id.toString() === id);

    if (!blog) {
        return (
            <Layout>
                <div style={{ padding: '4rem', textAlign: 'center' }}>
                    <h1 style={{ color: '#cc0000' }}>Blog Tidak Ditemukan</h1>
                    <p>Periksa kembali daftar blog yang tersedia di beranda.</p>
                    <br />
                    <Link to="/" style={{ color: '#0077cc', textDecoration: 'underline' }}>
                        Kembali ke Beranda
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <article style={{
                maxWidth: '800px',
                margin: '4rem auto',
                padding: '2rem',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                lineHeight: '1.6',
                fontFamily: 'Arial, sans-serif',
            }}>
                <img 
                    src={blog.image} 
                    alt={blog.title} 
                    style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginBottom: '1.5rem'
                    }}
                />
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#222' }}>
                    {blog.title}
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '1rem' }}>
                    {blog.excerpt}
                </p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.9rem',
                    color: '#888',
                    marginBottom: '1rem'
                }}>
                    <span><strong>Penulis:</strong> {blog.author}</span>
                    <span><strong>Tanggal:</strong> {blog.date}</span>
                </div>
                <p style={{ fontStyle: 'italic', color: '#777', marginBottom: '1.5rem' }}>
                    Tags: {blog.tags.join(", ")}
                </p>
                <div style={{ color: '#333', fontSize: '1rem' }}>
                    {blog.excerpt}
                </div>
            </article>

            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <Link to="/" style={{
                    color: '#0077cc',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                }}>
                    ← Kembali ke Beranda
                </Link>
            </div>
        </Layout>
    );
}
