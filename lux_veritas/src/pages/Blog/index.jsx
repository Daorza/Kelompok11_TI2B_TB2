import Layout from "../../components/layout/Layout"; 
import blogData from "../../data/blogs.json";
import { useParams, Link } from "react-router-dom";

export default function Blog() {
    const { id } = useParams();
    const blog = blogData.find((item) => item.id.toString() === id);

    if (!blog) {
        return (
            <Layout>
                <h1>Blog Tidak Ditemukan</h1>
                <p>Periksa kembali daftar blog yang tersedia di beranda.</p>
                <br />
                <Link to="/">Kembali ke Beranda</Link>
            </Layout>
        );
    }
    return (
        <Layout>
            <article>
                <img src={blog.image} alt={blog.title} />
                <h1>{blog.title}</h1>
                <p>{blog.excerpt}</p>
                <div>
                    <span>Penulis: {blog.author}</span>
                    <span>Tanggal: {blog.date}</span>
                </div>
                <p>{blog.tags.join(", ")}</p>
                <div>{blog.content}</div>
            </article>
            <Link to="/">Kembali ke Beranda</Link>
        </Layout>
    );
}