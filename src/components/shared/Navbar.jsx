import { Link } from "react-router-dom";
import logo from "../../assets/images/tou heaven_Mesa de trabajo 1.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then((result) => {
        toast.warning(`${user.displayName},logout Successfully`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-indigo-900 p-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              
              </li>
              <li>
                <Link to="./">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="./all-toys">All toys</Link>
              </li>
              {
                user && 
                <>
                <li>
                 <Link to="./my-toys">My Toys</Link>
              </li>
              <li>
                 <Link to="./add-toys">Add A Toys</Link>
              </li></>
              }
              <li>
                <Link to="./blogs">Blogs</Link>
              </li>
              <li>
              <div className="">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="tooltip" data-tip={user.displayName}>
                <img
                  className="w-12 h-12 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <button onClick={handleLogout} className="btn btn-secondary">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-secondary">Login</button>
            </Link>
          )}
        </div>
              </li>
            </ul>
            
          </div>
        <Link className="btn btn-ghost normal-case text-xl ">
            <img className="w-48" src={logo} alt="" />
        </Link>
        </div>
        
        
        
        <div className="navbar-center hidden lg:flex  text-white">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/all-toys">All toys</Link>
            </li>
            {
                user && 
                <>
                <li>
                 <Link to="/my-toys">My Toys</Link>
              </li>
              <li>
                 <Link to="/add-toys">Add A Toys</Link>
              </li></>
              }
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex navbar-end">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="tooltip" data-tip={user.displayName}>
                <img
                  className="w-12 h-12 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <button onClick={handleLogout} className="btn btn-secondary">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-secondary">Login</button>
            </Link>
          )}
        </div>
        </div>
      </div>
    
  );
};

export default Navbar;
