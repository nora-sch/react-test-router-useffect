import { useLocation, useParams } from "react-router-dom";

const Post = () => {
  let { state } = useLocation();
  console.log(state);
  const { id } = useParams();
  return (
    <div>
      <h2>{state.post.title.toUpperCase()}</h2>
      <p>{state.post.body}</p>
    </div>
  );
};

export default Post;
