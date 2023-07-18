import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs , title }) => {

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <Link to={`/blogs/${blog.id}`} key={blog.id}>
                    <div className="blog-preview"  >
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </div>
                </Link>
            ))}
        </div>
     );
}
 
export default BlogList;