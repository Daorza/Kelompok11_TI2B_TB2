import Layout from "../../components/layout/Layout"; 
import blogData from "../data/blogs.json";
import { Link } from "react-router-dom";

export default function Blog() {
    return (
        <Layout>
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
        </Layout>
    );
}