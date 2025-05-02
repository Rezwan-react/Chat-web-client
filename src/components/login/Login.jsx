import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { authServices } from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loggedUser } from '../../store/slices/authSlice';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    //============================= handel function 
    const handelLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await authServices.loginUser(loginData)
            toast.success(res.success);
            dispatch(loggedUser(res.user));
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            toast.error(error.response.data.error);
        }

    }

    return (
        <>
            <section>
                <div className="flex justify-center items-center min-h-screen bg-gray-900">
                    <div className={`relative w-[350px] h-[500px] transition-transform duration-1000`}>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            closeOnClick={false}
                            rtl={false}
                            theme="dark"
                        />
                        {/* ========================== form part start ============================= */}
                        <form onSubmit={handelLogin}>
                            <div className="absolute w-full h-full flex flex-col justify-center items-center gap-4 px-8 py-12 rounded-xl text-white bg-[#212121]"
                                style={{
                                    boxShadow:
                                        'inset 2px 2px 10px rgba(0,0,0,1), inset -1px -1px 5px rgba(255,255,255,0.6)',
                                }}
                            >
                                <div className="text-xl font-semibold pb-2">Login</div>
                                <input type="email" placeholder="email" onChange={(e) => setLoginData((prev) => ({ ...prev, email: e.target.value }))} className="w-60 h-11 px-3 rounded-md border-2 border-[#212121] bg-[#212121] text-white shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] focus:scale-105 focus:outline-none transition-all duration-300" />
                                <div className="relative w-60">
                                    <input type={showPassword ? 'text' : 'password'} onChange={(e) => setLoginData((prev) => ({ ...prev, password: e.target.value }))} placeholder="Password" className="w-full h-11 px-3 pr-10 rounded-md border-2 border-[#212121] bg-[#212121] text-white shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] focus:scale-105 focus:outline-none transition-all duration-300" />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-white" >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                <a href="#" className="text-sm text-blue-400 hover:underline -mt-2 self-end pr-3">
                                    Forgot password?
                                </a>
                                <button type="submit" className="py-2 px-8 bg-[#212121] text-white font-bold rounded-md border-2 border-[#212121] shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] active:scale-95 hover:scale-105 transition-all duration-300">
                                    Login
                                </button>
                                <span className="text-sm">
                                    Don't have an account?
                                    <a href='/register' className="font-bold underline cursor-pointer">
                                        Sign Up
                                    </a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login