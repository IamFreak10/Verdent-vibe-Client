import { useContext } from 'react';
import { FaUserCircle, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/abstract-removebg-preview.png';
import Authcontext from '../Contexts/Authcontext';
import Swal from 'sweetalert2';
import DashboardContext from '../Contexts/DashbordContext';

const Navbar = () => {
  const { user, logOut } = useContext(Authcontext);
  const { on, setOn } = useContext(DashboardContext);
  console.log(on);
  const handleLogout = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure to logout?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, logout!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          logOut();
          swalWithBootstrapButtons.fire({
            title: '',
            text: 'You have logged out successfully',
            icon: 'success',
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'You have not logged out :)',
            icon: 'error',
          });
        }
      });
  };

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-md px-4 md:px-8">
      {/* Start */}
      <div className="flex-1">
        <Link className="relative flex justify-start" to="/">
          <img src={logo} alt="" className="absolute w-12 opacity-70 z-0" />
          <span className="mt-3 ml-8 relative z-10 text-xl md:text-3xl text-[#22461b]  ">
            ERDENT VIBE
          </span>
        </Link>
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Center Nav Links */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal">
          <NavLink
            className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
            to="/Browse-Garden-tip"
          >
            All Tips
          </NavLink>
          <button
            onClick={() => {
              const footer = document.getElementById('site-footer');
              footer?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
          >
            About Us
          </button>
          {
            user?.email?( <button
                onClick={() => setOn(!on)}
                className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
              >
                Dashbord
              </button>):(<></>)
          }
          {/* {user?.email ? (
            <>
              <NavLink
                className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
                to="/Share-Garden-tip"
              >
                Share a Garden Tip
              </NavLink>
              <NavLink
                className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
                to="/My-Tips-page"
              >
                My Tips page
              </NavLink>
              <NavLink
                className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
                to="/Explore-Gardeners"
              >
                Explore Gardeners
              </NavLink>
              <button
                onClick={() => setOn(!on)}
                className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
              >
                Dashbord
              </button>
            </>
          ) : (
            <></>
          )} */}
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
            <div className='flex flex-col text-c' >
              <NavLink
                className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
                to="/Browse-Garden-tip"
              >
                All Tips
              </NavLink>
              <button
                onClick={() => {
                  const footer = document.getElementById('site-footer');
                  footer?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
              >
                About Us
              </button>
              {/* {user?.email ? (
                <>
                  <NavLink
                    className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
                    to="/Share-Garden-tip"
                  >
                    Share a Garden Tip
                  </NavLink>
                  <NavLink
                    className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
                    to="/My-Tips-page"
                  >
                    My Tips page
                  </NavLink>
                  <NavLink
                    className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
                    to="/Explore-Gardeners"
                  >
                    Explore Gardeners
                  </NavLink>
                  <button
                    onClick={() => setOn(!on)}
                    className="font-semibold  hover:text-[#22461b] mr-2.5 p-3 rounded-xl"
                  >
                    Dashbord
                  </button>
                </>
              ) : (
                <></>
              )} */}
            </div>
            <li className="flex items-center">
              <div className="avatar mr-2">
                <div className="w-6 rounded-full">
                  <img src={user?.photoURL} alt="User" />
                </div>
              </div>
              {user?.displayName}
            </li>
            {user ? (
              <Link onClick={handleLogout} className="btn btn-primary px-10">
                <FaSignOutAlt className="mr-2" /> Logout
              </Link>
            ) : (
              <Link
                className="btn btn-primary px-10"
                to={'/authentication/login'}
              >
                <FaSignInAlt className="mr-2" /> Login
              </Link>
            )}
          </ul>
        </div>
      </div>

      {/* Desktop Right Side */}
      <div className="hidden lg:flex items-center gap-4 ml-4">
        {user ? (
          <div className="relative flex items-center gap-2 group">
            <div className="avatar cursor-pointer">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} alt="User" />
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="absolute top-10 left-1 -translate-x-1/2 btn btn-primary px-5 text-white transition duration-200 z-10 opacity-0 group-hover:opacity-100"
            >
              <FaSignOutAlt className="inline mr-1" /> Logout
            </button>
          </div>
        ) : (
          <>
            <Link
              className="btn btn-primary px-10"
              to="/authentication/registration"
            >
              <FaSignInAlt className="mr-2" /> Register
            </Link>
            <Link className="btn btn-primary px-10" to="/authentication/login">
              <FaSignInAlt className="mr-2" /> Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
