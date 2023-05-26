import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const getOnePost = async () => {
      const post = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const postJson = await post.json();
      console.log(postJson)
      setPost(postJson);
    };
    getOnePost();
  }, []);

  return (
    <div>
      <h2 style={{textTransform:"uppercase"}}>{post.title}</h2>
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
