import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const [name, setName] = useState('mario');

  useEffect(() => {
    console.log('use effect ran');
    console.log(name);
  }, [name]);

  return (
    <div className="Home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
      <BlogList 
        blogs={blogs.filter((blog) => blog.author === 'mario')} 
        title="Mario's Blogs!"
        handleDelete={handleDelete}
      />
      <button onClick={() => setName('luigi')}>Change Name</button>
    </div>
  );
}
 
export default Home;