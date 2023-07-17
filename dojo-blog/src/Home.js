import {useState , useEffect} from 'react';
import BlogList from './BlogList';

const HomePage = () => {
    const [blogs ,setBlogs] = useState(null)

      const deleteBlog = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
      }

      useEffect(()=>{

        fetch('http://localhost:8000/blogs')
            .then((res)=>{
                return res.json();
            })
            .then((data)=>{
                setBlogs(data);
            });

      } , []);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title='All Blogs' deleteBlog={deleteBlog}/>}
        </div>
     );
}
 
export default HomePage;