import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function RegisterLogin() {
    const [flipped, setFlipped] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div
                className={`relative w-[350px] h-[500px] transition-transform duration-1000`}
                style={{
                    transformStyle: 'preserve-3d',
                    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
            >
                {/* =================== Front - Login =================== */}
                <div
                    className="absolute w-full h-full flex flex-col justify-center items-center gap-4 px-8 py-12 rounded-xl text-white bg-[#212121]"
                    style={{
                        backfaceVisibility: 'hidden',
                        boxShadow:
                            'inset 2px 2px 10px rgba(0,0,0,1), inset -1px -1px 5px rgba(255,255,255,0.6)',
                    }}
                >
                    <div className="text-xl font-semibold pb-2">Login</div>
                    <input
                        type="email"
                        placeholder="email"
                        className="w-60 h-11 px-3 rounded-md border-2 border-[#212121] bg-[#212121] text-white shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] focus:scale-105 focus:outline-none transition-all duration-300"
                    />
                    <div className="relative w-60">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="w-full h-11 px-3 pr-10 rounded-md border-2 border-[#212121] bg-[#212121] text-white shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] focus:scale-105 focus:outline-none transition-all duration-300"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-white"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <a href="#" className="text-sm text-blue-400 hover:underline -mt-2 self-end pr-3">
                        Forgot password?
                    </a>
                    <button className="py-2 px-8 bg-[#212121] text-white font-bold rounded-md border-2 border-[#212121] shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] active:scale-95 hover:scale-105 transition-all duration-300">
                        Login
                    </button>
                    <span className="text-sm">
                        Don't have an account?{' '}
                        <button
                            onClick={() => setFlipped(true)}
                            className="font-bold underline cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </span>
                </div>

                {/* =================== Back - Sign Up =================== */}
                <div
                    className="absolute w-full h-full flex flex-col justify-center items-center gap-4 px-8 py-12 rounded-xl text-white bg-[#212121]"
                    style={{
                        transform: 'rotateY(180deg)',
                        backfaceVisibility: 'hidden',
                        boxShadow:
                            'inset 2px 2px 10px rgba(0,0,0,1), inset -1px -1px 5px rgba(255,255,255,0.6)',
                    }}
                >
                    <div className="text-xl font-semibold pb-2">SignUp</div>
                    <input
                        type="text"
                        placeholder="fullName"
                        className="w-60 h-11 px-3 rounded-md border-2 border-[#212121] bg-[#212121] text-white shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] focus:scale-105 focus:outline-none transition-all duration-300"
                    />
                    <input
                        type="email"
                        placeholder="email"
                        className="w-60 h-11 px-3 rounded-md border-2 border-[#212121] bg-[#212121] text-white shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] focus:scale-105 focus:outline-none transition-all duration-300"
                    />
                    <div className="relative w-60">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="w-full h-11 px-3 pr-10 rounded-md border-2 border-[#212121] bg-[#212121] text-white shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] focus:scale-105 focus:outline-none transition-all duration-300"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-white"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="relative w-60">
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            className="w-full h-11 px-3 pr-10 rounded-md border-2 border-[#212121] bg-[#212121] text-white shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] focus:scale-105 focus:outline-none transition-all duration-300"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-3 text-white"
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <button className="py-2 px-8 bg-[#212121] text-white font-bold rounded-md border-2 border-[#212121] shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] active:scale-95 hover:scale-105 transition-all duration-300">
                        Sign up
                    </button>
                    <span className="text-sm">
                        Already have an account?{' '}
                        <button
                            onClick={() => setFlipped(false)}
                            className="font-bold underline cursor-pointer"
                        >
                            Login
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default RegisterLogin;
