import React from 'react'

function People() {
  return (
    <>
      <section className='bg-[#e8e8e8] w-full'>
        <div className="container mt-12">
          <div className='main w-[343px] flex items-center gap-5 px-4 py-4  bg-[#009087] mt-1.5 border-1 border-[#e8e8e8] rounded-xl shadow-neumorphic'>
            <div className=" bg-green-100 user_image w-[50px] h-[50px] rounded-full overflow-hidden">
              <img src="/img/rezwan.jpg" alt="user photo" />
            </div>
            <div className='flex items-center gap-16'>
              <div>
                <h2 className='text-lg font-semibold text-[#fff]'>friendName</h2>
                <p className='text-sm font-semibold text-[#fff]'>Love You.....</p>
              </div>
              <div>
                <p className="sender_msg w-fit py-1 px-3  ml-auto  rounded-xl text-sm  font-Poppins text-[#fff]">3:12 pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default People