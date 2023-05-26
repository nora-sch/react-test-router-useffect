import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import Error404 from "../pages/Error404";

const Main = () => {
    return (
      <main>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/posts/:id" element={<Post />}/>
        <Route path="/error-404" element={<Error404/>}/>
       </Routes>
      </main>
    );
  };
  
  export default Main;