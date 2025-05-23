import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { FaGlobe } from 'react-icons/fa';
import { GiCircularSawblade } from 'react-icons/gi';
import { NavLink } from 'react-router';
import logo from '../assets/abstract-removebg-preview.png';

const Footer = () => {
  const activeStyle = 'font-semibold underline text-secondary';

  return (
    <footer className="bg-green-100/60 py-8 p-10 rounded-t-2xl shadow-inner  bg-image text-[#22461b]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Company Info */}
        <div>
          <div className="flex text-xl font-bold mb-2 items-center">
            <a className="   relative flex justify-start">
              {/* Image behind text */}
              <img src={logo} alt="" className="absolute w-12  z-0" />

              {/* Text in front */}
              <span className="mt-3 ml-8 relative z-10 text-xl  md:text-3xl text-primary">
                ERDENT VIBE
              </span>
            </a>
          </div>
          <p className="text-sm text-[#22461b] leading-relaxed">
            Your community for gardening tips, plant care, local gardeners, and
            green living inspiration. Grow together with Verdent Vibe.
          </p>
        </div>

        {/* Nav Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <NavLink
                to="/TermsPrivacySupport/terms"
                className={({ isActive }) =>
                  `link link-hover ${isActive ? activeStyle : ''}`
                }
              >
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/TermsPrivacySupport/privacy"
                className={({ isActive }) =>
                  `link link-hover ${isActive ? activeStyle : ''}`
                }
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/TermsPrivacySupport/support"
                className={({ isActive }) =>
                  `link link-hover ${isActive ? activeStyle : ''}`
                }
              >
                Customer Support
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-circle bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-circle bg-pink-500 hover:bg-pink-600 text-white"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-circle bg-sky-400 hover:bg-sky-500 text-white"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-circle bg-blue-800 hover:bg-blue-900 text-white"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Verdent Vibe. All rights reserved.</p>
        <div className="flex justify-center items-center gap-1 mt-1">
          <FaGlobe className="text-xs" />
          <span>www.verdentvibe.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
