import { Navigate, Outlet, useNavigate } from 'react-router'
import Navbar from '../navbar/Navbar'
import { useSelector } from 'react-redux'

function Layout() {
    const user = useSelector((state) => state.authSlice.user);

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <div className='flex'>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout