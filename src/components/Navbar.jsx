import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
         <Link to="/" style={{marginRight:'10px'}}>Home</Link>
        <Link to="/posts">Posts</Link>
      </nav>
    </div>
  );
};

export default Navbar;
