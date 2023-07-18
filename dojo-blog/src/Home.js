import {useState , useEffect} from 'react';
import BlogList from './BlogList';

const HomePage = () => {
    const [blogs ,setBlogs] = useState(null)
    const [isPending ,setIsPending] = useState(true)
    const [error ,setError] = useState(null)

      const deleteBlog = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
      }

      useEffect(()=>{

        fetch('http://localhost:8000/blogs')
            .then((res)=>{
                if(! res.ok){
                    throw Error('could not fetch the data');
                }
                return res.json();
            })
            .then((data)=>{
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err=>{
                setIsPending(false);
                setError(err.message);
            });

      } , []);

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs' deleteBlog={deleteBlog}/>}
        </div>
     );
}
 
export default HomePage;