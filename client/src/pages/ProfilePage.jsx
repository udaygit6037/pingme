import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';

const ProfilePage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState("Martin Johnson");
  const [bio, setBio] = useState("Hi Everyone, I am using QuickChat");

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-10 flex-1">
          <h3 className='text-lg font-semibold'>Profile Details</h3>

          <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
            <input
              onChange={(e) => setSelectedImg(e.target.files[0])}
              type="file"
              id='avatar'
              accept='.png, .jpg, .jpeg'
              hidden
            />
            <img
              src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon}
              alt="Profile Preview"
              className={`w-12 h-12 object-cover ${selectedImg && 'rounded-full'}`}
            />
            Upload profile image
          </label>

          <label className="flex flex-col">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border border-gray-500 rounded px-2 py-1 mt-1 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
              placeholder='Your name'
            />
          </label>

          <label className="flex flex-col">
            Bio:
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="bg-transparent border border-gray-500 rounded px-2 py-1 mt-1 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
              placeholder='Enter bio'
              rows={4}
            />
          </label>

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save & Continue
          </button>
        </form>
        <img src={assets.logo_icon} alt="Logo" className='max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10' />
      </div>
    </div>
  );
};

export default ProfilePage;