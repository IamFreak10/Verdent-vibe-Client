import React, { use, useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import Authcontext from '../Contexts/Authcontext';

const PublicPrivateTips = () => {
  const { user } = use(Authcontext);
  const [tips, setTips] = useState([]);
  const [filteredTips, setFilteredTips] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://b11a10-server-side-iamfreak-production.up.railway.app//tips')
      .then((res) => res.json())
      .then((data) => {
        if (user) {
          const filtered = data.filter(
            (tip) =>
              tip.availability === 'Public' || tip.availability === 'Hidden'
          );
          setFilteredTips(filtered);
          setTips(filtered);
        } else {
          const filtered = data.filter((tip) => tip.availability === 'Public');
          setFilteredTips(filtered);
          setTips(filtered);
        }
      });
  }, [user]);

  // Handle filter change
  const handleDifficultyChange = (e) => {
    const value = e.target.value;
    setDifficultyFilter(value);

    if (value === '') {
      setFilteredTips(tips);
    } else {
      const filtered = tips.filter((tip) => tip.difficulty === value);
      setFilteredTips(filtered);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-bold mb-6 text-[#22461b] text-center">
        Browse Gardening Tips
      </h2>

      {/* Filter Dropdown */}
      <div className="mb-6 flex justify-end">
        <select
          value={difficultyFilter}
          onChange={handleDifficultyChange}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="">All Difficulty Levels</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-base-200 text-base font-semibold text-[#22461b]">
              <th>No.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-green-50/40 ">
            {filteredTips.length > 0 ? (
              filteredTips.map((tip, index) => (
                <tr key={tip._id} className="hover  text-[#22461b] ">
                  <td>{index + 1}</td>
                  <td>
                    <div className="w-16 h-16">
                      <img
                        src={tip.imageUrl}
                        alt={tip.title}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  </td>
                  <td>{tip.title}</td>
                  <td>{tip.category}</td>
                  <td>{tip.difficulty}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/tip/${tip._id}`)}
                      className="btn btn-sm btn-outline btn-primary dark:btn-accent flex items-center gap-1"
                    >
                      <FaEye /> See More
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-[#22461b] py-6">
                  No tips found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PublicPrivateTips;
