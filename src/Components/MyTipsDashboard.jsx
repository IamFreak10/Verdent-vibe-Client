import React, { useEffect, useState, useContext } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import Authcontext from '../Contexts/Authcontext';
import Swal from 'sweetalert2';

const MyTipsDashboard = () => {
  const { user } = useContext(Authcontext);
  const [myTips, setMyTips] = useState([]);
  const navigate = useNavigate();

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

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b11a10-server-side-iam-freak10.vercel.app/tips/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const updatedTips = myTips.filter((tip) => tip._id !== id);
              setMyTips(updatedTips);
            }
          });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
    // TODO: Implement deletion logic here
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-bold mb-6 text-[#326e26] text-center">
        My Gardening Tips
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="bg-base-200 text-base font-semibold text-[#326e26]">
              <th>No.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="bg-green-100/40">
            {myTips.length > 0 ? (
              myTips.map((tip, index) => (
                <tr key={tip._id} className="hover text-[#22461b]">
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
                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        tip.availability === 'Public'
                          ? 'bg-green-200 text-green-800'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {tip.availability}
                    </span>
                  </td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => navigate(`/update-tip/${tip._id}`)}
                      className="btn btn-sm btn-outline btn-warning flex items-center gap-1"
                    >
                      <span className="text-[#22461b] flex items-center">
                        {' '}
                        <FaEdit />
                        Update
                      </span>
                    </button>
                    <button
                      onClick={() => handleDelete(tip._id)}
                      className="btn btn-sm btn-outline btn-error flex items-center gap-1"
                    >
                      <FaTrashAlt /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-primary py-6">
                  You haven't shared any tips yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTipsDashboard;
