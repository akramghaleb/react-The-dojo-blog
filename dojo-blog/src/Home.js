import {useState} from 'react';
import BlogList from './BlogList';

const HomePage = () => {
    const [blogs ,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

      const deleteBlog = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id))
      }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs' deleteBlog={deleteBlog}/>
            <BlogList 
                deleteBlog={deleteBlog}
                blogs={blogs.filter((blog)=> blog.author === 'mario')} 
                title="Mario's Blogs"/>
        </div>
     );
}
 
export default HomePage;