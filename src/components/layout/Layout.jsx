import { Navigate, Outlet } from 'react-router'
import Navbar from '../navbar/Navbar'
import { useSelector } from 'react-redux'

function Layout() {
    const user = useSelector((state) => state.authSlice.user);

    if (!user) {
        return <Navigate to="/login" replace />;
    }

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