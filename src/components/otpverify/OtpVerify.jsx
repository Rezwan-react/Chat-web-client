import React from 'react';
import {  } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

function OtpVerify() {
    return (
        <>
            <section className="flex justify-center items-center h-screen m-auto w-full bg-[#212121]">
                <div className="container w-fit">
                    <form className="w-[290px] pt-[40px] pb-[80px] flex flex-col border-1 border-[#fff] rounded-[15px] bg-[#333333] shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition ease-in-out  ">
                        <p className=" text-2xl text-center text-white font-bold ">Email Verify</p>

                        <div className='m-auto'>
                        <IoCheckmarkCircleOutline  className="relative self-center text-green-500 text-5xl mt-6" />
                        </div>

                        <div className="flex justify-center mt-8">
                           
                                <input
                                    
                                    type="text"
                                    maxLength="1"
                                    className="w-10 h-10 mx-2 text-[#fff] border-1 border-[#fff] rounded bg-transparent shadow-inner outline-none text-center transition duration-300 "
                                />
                                <input
                                    
                                    type="text"
                                    maxLength="1"
                                    className="w-10 h-10 mx-2 text-[#fff] border-1 border-[#fff] rounded bg-transparent shadow-inner outline-none text-center transition duration-300 "
                                />
                                <input
                                    
                                    type="text"
                                    maxLength="1"
                                    className="w-10 h-10 mx-2 text-[#fff] border-1 border-[#fff] rounded bg-transparent shadow-inner outline-none text-center transition duration-300 "
                                />
                                <input
                                    
                                    type="text"
                                    maxLength="1"
                                    className="w-10 h-10 mx-2 text-[#fff] border-1 border-[#fff] rounded bg-transparent shadow-inner outline-none text-center transition duration-300 "
                                />
                           
                        </div>
                        <div className='flex flex-col justify-center items-center '>
                        <button
                            type="submit"
                            className="relative top-14  w-[17em] h-[3em] text-white rounded border-none outline-none transition duration-300 shadow-[1px_1px_3px_#b5b5b5,-1px_-1px_3px_#ffffff] active:scale-95"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="relative top-16  w-[17em] h-[3em] text-white rounded border-none outline-none transition duration-300 shadow-[1px_1px_3px_#b5b5b5,-1px_-1px_3px_#ffffff] active:scale-95"
                        >
                            Back
                        </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default OtpVerify;
