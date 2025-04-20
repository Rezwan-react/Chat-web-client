import React from 'react'
import { CgMenuRound } from 'react-icons/cg'
import { CiChat1 } from 'react-icons/ci'
import { GrGroup } from 'react-icons/gr'
import { Link, Links, NavLink } from 'react-router'

function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="w-[192px] h-screen bg-[#3D90D7] px-6 pt-24 flex flex-col justify-between">
                    <ul className="flex flex-col gap-6 text-2xl font-medium font-poppins text-[#222222] ">
                        <NavLink to="/" className={({ isActive }) => isActive ? "flex items-center  gap-2 px-[19px] py-[16px] bg-[#32375C] text-[#fff] rounded-xl " : "flex items-center gap-2 px-[19px] py-[16px] hover:text-gray-200 transition-colors duration-200"}><CiChat1 className='text-2xl' /><span>Chat</span> </NavLink>
                        <NavLink to="/group" className={({ isActive }) => isActive ? "flex items-center  gap-2 px-[19px] py-[16px] bg-[#32375C] text-[#fff] rounded-xl " : "flex items-center gap-2 px-[19px] py-[16px] hover:text-gray-200 transition-colors duration-200"}><GrGroup className='text-2xl' /><span>Group</span> </NavLink>
                        <NavLink to="/people" className={({ isActive }) => isActive ? "flex items-center  gap-2 px-[19px] py-[16px] bg-[#32375C] text-[#fff] rounded-xl " : "flex items-center gap-2 px-[19px] py-[16px] hover:text-gray-200 transition-colors duration-200"}><CgMenuRound className='text-2xl' /><span>People</span> </NavLink>
                    </ul>
                    <div className='flex items-center gap-2'>
                        <div className='w-12 h-12 rounded-full broder-[1px] border-rose-500 overflow-hidden'>
                            <img src="/img/rezwan.jpg" alt="img" />
                        </div>
                        <div>
                            <h2 className='text-[18px] font-semibold font-poppins text-[#000]'>Rezwan</h2>
                            <Link className='text-[13px] font-normal font-poppins text-[#000]' to="#">Edit Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
