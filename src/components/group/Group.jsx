import React from 'react'
import { FaRegPaperPlane } from 'react-icons/fa'

function Group() {
  return (
    <>
      <section className='w-full'>
        <div className="container">
          <div className="h-screen flex font-sans">
            {/* ============================== Chat Window ============================ */}
            <div className="w-full flex flex-col">
              {/*============================== Header============================== */}
              <div className="bg-white border-b p-4 text-lg font-semibold">
                Group Name
              </div>

              {/*============================== Chat messages ==============================*/}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                {/*============================== Message from other ==============================*/}
                <div className="max-w-xs mr-auto p-3 bg-gray-200 rounded-lg text-gray-800">
                  <p>Hello everyone!</p>
                  <span className="block text-xs text-gray-500 mt-1">Alice</span>
                </div>

                {/*============================== Message from me ==============================*/}
                <div className="max-w-xs ml-auto p-3 bg-blue-500 text-white rounded-lg">
                  <p>Hi Alice!</p>
                  <span className="block text-xs text-white/80 mt-1 text-right">You</span>
                </div>

                {/* ============================== Another message ==============================*/}
                <div className="max-w-xs mr-auto p-3 bg-gray-200 rounded-lg text-gray-800">
                  <p>Let’s meet at 5 PM.</p>
                  <span className="block text-xs text-gray-500 mt-1">Bob</span>
                </div>
              </div>

              {/* ============================== Message input ============================== */}
              <div className="msg_input flex px-10 pb-[30px] border-t-2 border-t-[#640D5F]  ">
                <input
                  type="text" className='w-full bg-transparent text-xl font-bold font-Poppins text-[#522258] mt-4 outline-none ' placeholder='Enter your message' />
                <button
                  className='text-xl text-[#2E236C] active:scale-[1.1] '><FaRegPaperPlane /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Group