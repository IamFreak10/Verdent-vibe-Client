import React, { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Authcontext from '../Contexts/Authcontext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { Link, NavLink } from 'react-router';

// ...imports remain same...

const Dashboard = ({ isOpen, onClose }) => {
  const [myTips, setMyTips] = useState([]);
  const { user } = useContext(Authcontext);

  useEffect(() => {
    if (user) {
      fetch('https://b11a10-server-side-iam-freak10.vercel.app/tips')
        .then((res) => res.json())
        .then((data) => {
          const userTips = data.filter((tip) => tip.email === user.email);
          setMyTips(userTips);
        });
    }
  }, [user]);

  const totalTips = myTips.length;
  const mostLikedTip = myTips.reduce(
    (prev, curr) => (curr.like > (prev?.like || 0) ? curr : prev),
    null
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 backdrop-blur-md bg-black/30"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed top-0 right-0 w-[80%] sm:w-3/4 md:w-2/5 lg:w-1/3 xl:w-1/4 h-full bg-base-100 z-50 shadow-2xl p-4 overflow-y-auto rounded-l-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-boldbg-base-100">📊 Dashboard</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-red-500 text-2xl"
              >
                &times;
              </button>
            </div>
            {/* Dashboard Navigation Links */}
            <div className="grid gap-3 p-2 mb-4 border-b-2 border-green-500">
              <NavLink
                to="/Browse-Garden-tip"
                className={({ isActive }) =>
                  `block p-3 rounded-xl shadow transition font-semibold ${
                    isActive
                      ? 'bg-green-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                🌿 All Garden Tips
              </NavLink>

              <NavLink
                to="/Share-Garden-tip"
                className={({ isActive }) =>
                  `block p-3 rounded-xl shadow transition font-semibold ${
                    isActive
                      ? 'bg-green-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                ✍️ Share a Garden Tip
              </NavLink>

              <NavLink
                to="/My-Tips-page"
                className={({ isActive }) =>
                  `block p-3 rounded-xl shadow transition font-semibold ${
                    isActive
                      ? 'bg-green-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                📁 My Tips Page
              </NavLink>

              <NavLink
                to="/Explore-Gardeners"
                className={({ isActive }) =>
                  `block p-3 rounded-xl shadow transition font-semibold ${
                    isActive
                      ? 'bg-green-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                🌱 Explore Gardeners
              </NavLink>
            </div>
            <h1 className="text-center text-xl font-boldbg-base-100 mb-2">
              My Profile Stats
            </h1>
            {user && (
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow flex items-center gap-4 p-4 mb-4 border border-gray-200 dark:border-gray-700">
                <img
                  src={
                    user.photoURL ||
                    'https://i.ibb.co/yVZ0FkB/default-avatar.png'
                  }
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover border-2 border-green-400 shadow"
                />
                <div>
                  <p className="text-base font-semiboldbg-base-100">
                    {user.displayName || 'Anonymous User'}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {user.email}
                  </p>
                </div>
              </div>
            )}

            <div className="grid gap-4">
              {/* Total Tips */}
              <div className="rounded-xl bg-gradient-to-tr from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-4 shadow hover:shadow-md transition">
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                  Total Shared Tips Shared By Me
                </p>
                <p className="text-lg font-bold text-blue-500">{totalTips}</p>
              </div>

              {/* Most Popular Tip */}
              {mostLikedTip && (
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-[1.01] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <h1 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-200">
                    My Most Liked Tip
                  </h1>
                  <img
                    src={
                      mostLikedTip.imageUrl ||
                      'https://via.placeholder.com/400x200?text=Tip+Image'
                    }
                    alt={mostLikedTip.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">
                      Most Popular Tip
                    </p>
                    <h3 className="text-lg font-bold text-purple-600 dark:text-purple-300 mt-1 line-clamp-1">
                      {mostLikedTip.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                      {mostLikedTip.description?.slice(0, 100) ||
                        'No description provided...'}
                    </p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-2 py-1 rounded-full">
                        {mostLikedTip.category || 'General'}
                      </span>
                      <span className="text-sm font-semibold text-purple-500 dark:text-purple-300">
                        👍 {mostLikedTip.like}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bar Chart */}
              {myTips.length > 0 && (
                <div className="bg-white/80 dark:bg-gray-800/80 mt-2 p-4 rounded-xl shadow border border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                    My Tips & Likes
                  </h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                      data={myTips.slice(0, 5)}
                      margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="title"
                        tick={{ fontSize: 10 }}
                        interval={0}
                        angle={-15}
                        textAnchor="end"
                      />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="like" fill="#22c55e" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Dashboard;
// <div className="rounded-xl bg-gradient-to-tr from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-4 shadow hover:shadow-md transition">
//             <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
//               Explore Gardeners
//             </p>
//             <Link
//               to="/Explore-Gardeners"
//               className="text-lg font-bold text-green-500"
//             >
//               {' '}
//               <p className="link text-base font-semibold text-green-700 dark:text-green-300 mt-1">
//                 Visit community
//               </p>
//             </Link>
//           </div>
