import { FaUserCircle, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';
import { GiCircularSawblade } from 'react-icons/gi';
import { Link, NavLink } from 'react-router';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/abstract-removebg-preview.png';
import { use } from 'react';
import Authcontext from '../Contexts/Authcontext';
const Navbar = () => {
  const { user, logOut } = use(Authcontext);
    console.log(user);
  const handleLogout=()=>{
    logOut()
    .then()
    .catch()
  }
  const user1 = {
    displayName: 'John Doe',
    photoURL: 'https://i.pravatar.cc/150?img=3',
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100  shadow-md px-4">
      {/* Start */}

      <div className="flex-1 ">
        <a className="   relative flex justify-start">
          {/* Image behind text */}
          <img src={logo} alt="" className="absolute w-12 opacity-70 z-0" />

          {/* Text in front */}
          <span className="mt-3 ml-8 relative z-10 text-xl  md:text-3xl text-primary">
            ERDENT VIBE
          </span>
        </a>
      </div>

      <ThemeToggle></ThemeToggle>

      {/* Center Nav Links */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal">
          <NavLink
            className="font-semibold hover:text-primary mr-2.5 p-3 rounded-xl"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="font-semibold hover:text-primary mr-2.5 p-3 rounded-xl"
            to="/MyProfile"
          >
            My Profile
          </NavLink>
          <NavLink
            className="font-semibold hover:text-primary mr-2.5 p-3 rounded-xl"
            to="/PaidHelp"
          >
            Paid Help
          </NavLink>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/MyProfile">My Profile</NavLink>
            <NavLink to="/PaidHelp">Paid Help</NavLink>

            <li className="flex items-center">
              <div className="avatar mr-2">
                <div className="w-6 rounded-full">
                  <img src={user1.photoURL} alt="User" />
                </div>
              </div>
              {user1.displayName}
            </li>
            <Link  className="btn btn-primary px-10">
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          </ul>
        </div>
      </div>

      {/* Desktop Right Side */}
      <div className="hidden lg:flex items-center gap-4 ml-4">
      
        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} alt="User" />
                </div>
              </div>
            </div>
            <Link onClick={handleLogout} className="btn btn-primary px-10">
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          </>
        ) : (
          <>
            <FaUserCircle className="text-4xl" />

            <Link className="btn btn-primary px-10" to={'/authentication/login'}>
              <FaSignInAlt className="mr-2" /> Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
