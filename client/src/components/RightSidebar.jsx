import React from 'react'
import assets, { imagesDummyData } from '../assets/assets'

const RightSidebar = ({ selectedUser }) => {
  if (!selectedUser) return null

  return (
    <div className="bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll max-md:hidden">
      {/* User Info */}
      <div className="pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto">
        <img
          src={selectedUser.profilePic || assets.avatar_icon}
          alt="User profile"
          className="w-20 aspect-square rounded-full"
        />
        <h1 className="px-10 text-xl font-medium mx-auto flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          {selectedUser.fullName}
        </h1>
        <p className="px-10 mx-auto text-center">{selectedUser.bio}</p>
      </div>

      {/* Divider */}
      <hr className="border-[#ffffff50] my-4" />

      {/* Media Section */}
      <div className="px-4">
        <p className="text-sm font-medium mb-2">Media</p>
        <div className="max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-2 opacity-80">
          {imagesDummyData.map((url, index) => (
            <div
              key={index}
              onClick={() => window.open(url, '_blank')}
              className="cursor-pointer rounded"
            >
              <img src={url} alt={`Media ${index + 1}`} className="w-full h-auto rounded-md" />
            </div>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-sm font-light py-2 px-20 rounded-full cursor-pointer">
        Logout
      </button>
    </div>
  )
}

export default RightSidebar