import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../navbar/Navbar'

function Layout() {
    return (
        <>
            <div className='flex  gap-2.5'>
            <Navbar />
            <Outlet />
            </div>
        </>
    )
}

export default Layout