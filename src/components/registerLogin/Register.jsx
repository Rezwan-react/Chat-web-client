import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authServices } from "../../services/api";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  //============================= handel function 
  const handelRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await authServices.registration(registerData)
      toast.success(res.success);
      setTimeout(() => {
        navigate(`/otpVerifyPage/${registerData.email}`);
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.error);
    }

  }

  return (
    <section>
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={false}
          rtl={false}
          theme="dark"
        />
        <div
          className={`relative w-[350px] h-[500px] transition-transform duration-1000`}
        >
          {/* ========================== form part start ============================= */}
          <form onSubmit={handelRegister}>
            <div
              className="absolute w-full h-full flex flex-col justify-center items-center gap-4 px-8 py-12 rounded-xl text-white bg-[#212121]"
              style={{
                boxShadow:
                  "inset 2px 2px 10px rgba(0,0,0,1), inset -1px -1px 5px rgba(255,255,255,0.6)",
              }}
            >
              <div className="text-xl font-semibold pb-2">
                <h2>SignUp</h2>
              </div>
              <input
                type="text"
                onChange={(e) => setRegisterData((prev) => ({ ...prev, fullName: e.target.value }))}
                placeholder="Enter your fullName"
                className="w-60 h-11 px-3 rounded-md border-2 border-[#212121] bg-[#212121] text-white shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] focus:scale-105 focus:outline-none transition-all duration-300"
              />
              <input
                type="email"
                onChange={(e) => setRegisterData((prev) => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your email"
                className="w-60 h-11 px-3 rounded-md border-2 border-[#212121] bg-[#212121] text-white shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] focus:scale-105 focus:outline-none transition-all duration-300"
              />
              <div className="relative w-60">
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setRegisterData((prev) => ({ ...prev, password: e.target.value }))}
                  placeholder="Enter your password"
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
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your confirm password"
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
              <button type="submit" className="py-2 px-8 bg-[#212121] text-white font-bold rounded-md border-2 border-[#212121] shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)] active:scale-95 hover:scale-105 transition-all duration-300">
                Sign up
              </button>
              <span className="text-sm">
                Already have an account?
                <a href="/login" className="font-bold underline cursor-pointer">
                  Login
                </a>
              </span>
            </div>
          </form>
          {/* ------------------------------ form part end -------------------------- */}
        </div>
      </div>
    </section>
  );
}

export default Register;
