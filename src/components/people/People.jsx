import React from 'react'
import { FiSearch, FiPlus } from 'react-icons/fi'

function People() {
  return (
    <section className='bg-[#e8e8e8] w-full min-h-screen py-6'>
      <div className=" pl-4 pr-4 max-w-md">


        {/* Search Bar & Add Button */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center bg-white rounded-xl px-3 py-2 w-full shadow">
            <FiSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent w-full outline-none text-sm"
            />
          </div>
          <button className="ml-3 bg-[#009087] hover:bg-[#007b74] text-white p-2 rounded-xl shadow transition">
            <FiPlus className="text-xl" />
          </button>
        </div>

        {/* People Card */}
        <div className='main flex items-center gap-5 p-4 bg-[#009087] border border-[#e8e8e8] rounded-xl shadow-neumorphic'>
          <div className="bg-green-100 user_image w-[60px] h-[50px] rounded-full overflow-hidden">
            <img src="/img/rezwan.jpg" alt="user photo" />
          </div>
          <div className='flex items-center justify-between w-full'>
            <div>
              <h2 className='text-lg font-semibold text-white'>friendName</h2>
              <p className='text-sm font-semibold text-white'>Love You.....</p>
            </div>
            <div>
              <p className="sender_msg w-fit py-1 px-3 rounded-xl text-sm font-Poppins text-white">3:12 pm</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default People
