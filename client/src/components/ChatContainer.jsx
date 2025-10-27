import React, { useEffect, useRef } from 'react'
import assets, { messagesDummyData } from '../assets/assets'
import { fromatMessageTime } from '../lib/utils'

// Correct way to define the component and receive props:
const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  // Note the curly braces around the arguments ^
 const scrollEnd = useRef()
 useEffect(()=>{
  if(scrollEnd.current)
      {
        scrollEnd.current.scrollIntoview({behaviour:"smooth"})
      }
 },[])
  return selectedUser ? (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      {/* ------------- header-------------*/}
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-b border-stone-500'>
        <img src={assets.profile_martin} alt="" className='w-8 rounded-full' />
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          Martin Johnson
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        {/* The onClick handler for the arrow icon is correct */}
        <img onClick={() => { setSelectedUser(null) }}
          src={assets.arrow_icon} alt="" className='md:hidden max-w-7' />
        {/* FIX: Corrected class name from 'max-md: hidden' to 'max-md:hidden' for Tailwind utility */}
        <img src={assets.help_icon} alt=""
          className='max-md:hidden max-w-5' />
      </div>
      {/* ------------- header ends-------------*/}
      {/* Chat area for the chat */}
      <div className='flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6'>
        {/* FIX 1: Removed outer parentheses around messagesDummyData.map */}
        {messagesDummyData.map((msg, index) => (
          // FIX 2 & 3: Corrected 'itmes-ed' to 'items-end' and ensured correct string concatenation with template literals
          <div key={index} className={`flex items-end gap-2 ${msg.senderId !== '680f50e4f10f3cd28382ecf9' ? 'justify-start' : 'justify-end'}`}>
            {msg.image ? (
              // FIX 4: Image tag is self-closing, removed redundant closing tag.
              <img src={msg.image} alt='' className='max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8' />
            ) : (
              // FIX 5, 6, 7: Corrected 'bg-voilet-500/30' (assuming typo, used 'violet-500/30') and fixed logic/typo in rounded class: 'rounded-br-npn' -> 'rounded-br-none' and 'rounded-bl-none'
              <p className={` p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${msg.senderId === '680f50e4f10f3cd28382ecf9' ? 'rounded-br-none' : 'rounded-bl-none'}`}>{msg.text}</p>
            )}
            <div className='text-center text-xs'>
              <img src={msg.senderId === '680f50e4f10f3cd28382ecf9' ? assets.avatar_icon : assets.profile_martin} alt=""
                className='w-7 rounded-full' />
              <p className='text-gray-500'>{fromatMessageTime(msg.createdAt)}</p>
            </div>
          </div>
        ))}
        <div ref={scrollEnd}></div>
      
      </div>
         {/*----------bottom are -----------*/}
        <div className='absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3'>
           <div className='flex-1 flex items-center bg-gray-100/12 px-3 rounded-full'>
            <input type="text" placeholder='Sent a message' className='flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placehoder-gray-400'/>
            <input type="file" id='image' accept='image/png, image/jpeg' hidden />
            <label htmlFor="image">
              <img src={assets.gallery_icon} alt=""  className='w-5 mr-2 cursor-pointer'/>
            </label>
            <div>
              <img src={assets.send_button} alt=""  className='w-7 cursor-pointer'/>
            </div>
           </div>
        </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
      <img src={assets.logo_icon} className='max-w-16' alt="" />
      <p className='text-lg font-medium text-white'> Chat anytime, anywhere</p>
    </div>
  )
}

export default ChatContainer