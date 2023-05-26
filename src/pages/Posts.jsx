import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./spinner.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getAllPosts = async () => {
      setLoading(true);
      const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
      const postsJson = await posts.json();
      setPosts(postsJson);
      setLoading(false);
    };
    getAllPosts();
  }, []);
  return loading ? (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  ) : (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {post.title}{" "}
          <Link to={`/posts/${post.id}`} state={{ post: post }}>
            {" "}
            <button>Voir post</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
