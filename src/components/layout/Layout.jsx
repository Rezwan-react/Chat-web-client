import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import Navbar from '../navbar/Navbar'
import { useSelector } from 'react-redux'

function Layout() {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            return navigate("/login");
        }
    }, [])

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