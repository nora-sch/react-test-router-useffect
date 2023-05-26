import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getAllPosts = async () => {
      const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
      const postsJson = await posts.json();
      setPosts(postsJson);
    };
    getAllPosts();
  }, []);
  return <div>

    {posts.map(post=>(<div key={post.id}>{post.title} <Link to={`/posts/${post.id}`} state={{post:post}}> <button>Voir post</button></Link></div>))}
  </div>;
};

export default Posts;
