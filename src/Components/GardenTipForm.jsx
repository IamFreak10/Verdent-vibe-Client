import React, { use } from 'react';
import { FaSeedling, FaPaperPlane } from 'react-icons/fa';
import Authcontext from '../Contexts/Authcontext';
import Swal from 'sweetalert2';

const GardenTipForm = () => {
  const { user } = use(Authcontext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTip = Object.fromEntries(formData.entries());
    const finalTip = { ...newTip, like: 0 };

    fetch('http://localhost:3000/tips', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(finalTip),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: 'Tip Added Successfully',
          icon: 'success',
          draggable: true,
        });
        form.reset();
      })
      .catch((err) => console.error('Error:', err));
  };

  return (
    <section className="max-w-3xl   mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 rounded-2xl shadow-xl border border-green-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1d611d] mb-6 flex items-center gap-2">
          <FaSeedling /> Share a Gardening Tip
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Title */}
          <div className="form-control">
            <label className="label font-semibold">Title</label>
            <input
              name="title"
              type="text"
              placeholder="How I Grow Tomatoes Indoors"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Plant Type */}
          <div className="form-control">
            <label className="label font-semibold">Plant Type / Topic</label>
            <input
              name="plantType"
              type="text"
              placeholder="Tomatoes, Herbs, etc."
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Difficulty */}
          <div className="form-control">
            <label className="label font-semibold">Difficulty Level</label>
            <select
              name="difficulty"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label font-semibold">Category</label>
            <select
              name="category"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select</option>
              <option>Composting</option>
              <option>Plant Care</option>
              <option>Vertical Gardening</option>
              <option>Container Gardening</option>
              <option>Indoor Plants</option>
            </select>
          </div>

          {/* Image URL */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Image URL</label>
            <input
              name="imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
              className="input input-bordered w-full"
            />
          </div>

          {/* Description */}
          <div className="form-control md:col-span-2">
            <label className="label font-semibold">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered"
              placeholder="Write your gardening experience..."
              rows="4"
              required
            ></textarea>
          </div>

          {/* Availability */}
          <div className="form-control">
            <label className="label font-semibold">Availability</label>
            <select
              name="availability"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select</option>
              <option>Public</option>
              <option>Hidden</option>
            </select>
          </div>

          {/* Static User Info */}
          <div className="form-control">
            <label className="label font-semibold">User Name</label>
            <input
              name="userName"
              type="text"
              value={user?.displayName}
              readOnly
              className="input input-bordered bg-base-200"
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Email</label>
            <input
              name="email"
              type="email"
              value={user?.email}
              readOnly
              className="input input-bordered bg-base-200"
            />
          </div>

          {/* Submit */}
          <div className="form-control md:col-span-2">
            <button
              type="submit"
              className="btn btn-primary w-full text-gray-100"
            >
              <FaPaperPlane className="mr-2" /> Submit Gardening Tip
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GardenTipForm;
