import BlogList from './BlogList';
import useFetch from './useFetch';

const HomePage = () => {
    const {data : blogs ,isPending , error } = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs' />}
        </div>
     );
}
 
export default HomePage;