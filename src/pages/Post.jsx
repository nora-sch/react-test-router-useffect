import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const getOnePost = async () => {
      const post = await fetch(
        `https://jsonplaceholder.typicode.com/post/${id}`
      );
      if (post.status === 200) {
        const postJson = await post.json();
        setPost(postJson);
      } else {
       navigate('/error-404');
      }
    };
    getOnePost();
  }, []);

  return (
    <div>
      <h2 style={{ textTransform: "uppercase" }}>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
  //   let { state } = useLocation();
  //   return (
  //     <div>
  //       <h2>{state.post.title.toUpperCase()}</h2>
  //       <p>{state.post.body}</p>
  //     </div>
  //   );
};

export default Post;
