import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My New Website', body: 'lorem ipsum...', author: 'Mario', id: 1 },
    { title: 'Welcome Party', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3 },
  ]);
  const handleDelete=(id)=>{
const newBlogs=blogs.filter(blog=>blog.id!==id)
setBlogs(newBlogs);
  }
  useEffect(()=>{
    console.log('useeffect ran')
  }, [])

  return (
    <div className="home">
      {/* Display all blogs */}
      <BlogList blogs={blogs} title='All Blogs!' handleDeleete={handleDelete} />

      {/* Display only Mario's blogs */}
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title='Mario Blogs!' />
    </div>
  );
}

export default Home;
