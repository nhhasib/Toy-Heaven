import { Link } from 'react-router-dom';
import logo from '../../assets/images/tou heaven_Mesa de trabajo 1.png'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
  const {user}=useContext(AuthContext)
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
              <Link to='./'>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to='./all-toys'>
                All toys
              </Link>
            </li>
            <li>
              <Link to='./my-toys'>My Toys</Link>
            </li>
            <li>
              <Link to='./add-toys'>Add A Toys</Link>
                      </li>
                      <li>
              <Link to='./blogs'>Blogs</Link>
            </li>
            </ul>
          </div>
                  <Link className="btn btn-ghost normal-case text-xl">
                      <img className='w-48' src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex  text-white">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to='./'>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to='./all-toys'>
                All toys
              </Link>
            </li>
            <li>
              <Link to='./my-toys'>My Toys</Link>
            </li>
            <li>
              <Link to='./add-toys'>Add A Toys</Link>
                      </li>
                      <li>
              <Link to='./blogs'>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <h1 className='text-white'>{user.email}</h1>
          {user?<button className="btn btn-secondary">Logout</button>:<Link to='/login'><button className="btn btn-secondary">Login</button></Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
