import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Authcontext from '../Contexts/Authcontext';
import Swal from 'sweetalert2';

const Registration = () => {
  const { createUser, setUser, logOut, updateUser } = use(Authcontext);
  const [errors, setErrors] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const errorMessages = [
      password.length < 6 && 'Password must be at least 6 characters long.',
      !/[A-Z]/.test(password) &&
        'Password must contain at least one uppercase letter.',
      !/[a-z]/.test(password) &&
        'Password must contain at least one lowercase letter.',
    ].filter(Boolean);

    if (errorMessages.length > 0) {
      setErrors(errorMessages);
      return;
    }
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            const user = userCredential.user;

            setUser(user);
            logOut();
          })
          .catch(() => {});
        // const user = userCredential.user;
        // setErrors('');
        // // console.log(user);
        // setUser(user);
        // logOut();

        // ...
      })
      .then(() => {
        Swal.fire({
          title: 'Registration Success!',
          icon: 'success',
          draggable: true,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrors(errorMessage);
        // ..
      });
  };
  return (
    <div className="flex justify-center sm:mx-[10%] min-h-screen items-center mt-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-bold text-center py-5">
          Register Please!
        </h1>
        <form onSubmit={handlesubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="input  pr-10"
                placeholder="Password"
                required
              />
              <span
                className="absolute top-1/2 right-6 transform -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            {/* Show individual errors */}
            {errors.length > 0 && (
              <div className="mt-2">
                <p className="text-red-500 text-sm">{errors}</p>
              </div>
            )}

            <button type="submit" className="btn btn-primary mt-4 mx-[23px">
              Register
            </button>
          </fieldset>
        </form>
        <button className="btn btn-primary mb-2 mx-[23px] bg-white text-black border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Sign-Up with Google
        </button>
        <p className="text-center mb-5">
          Already have an account?
          <Link to={'/authentication/login'}>
            <span className="text-blue-400 ml-1">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
