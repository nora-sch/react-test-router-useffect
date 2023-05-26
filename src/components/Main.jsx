import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Post from "../pages/Post";

const Main = () => {
    return (
      <main>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/posts/:id" element={<Post />}/>
       </Routes>
      </main>
    );
  };
  
  export default Main;