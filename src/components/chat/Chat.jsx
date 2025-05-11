import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa'
import { useSelector } from 'react-redux';

function Chat() {
  const userData = useSelector((state) => state.authSlice.user);

  return (
    <>
      <section className='w-full h-screen'>
        <div className="container ">
          <div className='chat_text  '>
            <div className="userDataBar p-5 bg-[#FDFAF6]">
              <div className="singel_users flex justify-between mb-5 items-center ">
                <div className='flex items-center gap-5'>
                  <div className=" bg-green-100 user_image w-[50px] h-[50px] rounded-full border-2 border-[#FFC1DA] overflow-hidden flex items-center justify-center text-black text-2xl font-bold uppercase">
                    {userData?.avatar ? (
                      <img src={userData?.avatar} className='w-full h-full object-cover ' alt="user photo" />
                    ) : (
                      userData?.fullName.charAt(0).toUpperCase()
                    )}
                  </div>
                  <h2 className='text-lg font-semibold text-[#222222]'>{userData?.fullName}</h2>
                </div>
              </div>
            </div>
            <div className="msg_box w-full h-[500px]  p-5 overflow-y-scroll">
              <div className='mb-5 '>
                <p className="recive_msg w-fit py-1 px-3 bg-[#3A6D8C] rounded-xl font-Poppins text-white">message</p>
                <p className="sender_msg w-fit py-1 px-3    rounded-xl text-sm font-Poppins text-black">messageTime</p>
              </div>
              <div className='mb-5 '>
                <p className="sender_msg w-fit py-1 px-3  ml-auto bg-[#6A9AB0] rounded-xl font-Poppins text-white">message</p>
                <p className="sender_msg w-fit py-1 px-3  ml-auto  rounded-xl text-sm  font-Poppins text-black">messageTime</p>
              </div>

            </div>
            <div className="msg_input flex px-10  border-t-2 border-t-[#640D5F]  ">
              <input
                type="text" className='w-full bg-transparent text-xl font-bold font-Poppins text-[#522258] mt-4 outline-none ' placeholder='Enter your message' />
              <button
                className='text-xl text-[#2E236C] active:scale-[1.1] '><FaRegPaperPlane /></button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Chat