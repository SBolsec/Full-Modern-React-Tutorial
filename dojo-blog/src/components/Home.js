import React, { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(blogs => setBlogs(blogs))
            .catch(err => console.error(err));
    }, []);
  
    return (
      <div className="home">
        { !blogs && <div>Loading...</div> }
        { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
      </div>
    );
}
   
export default Home;