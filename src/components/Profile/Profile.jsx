import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);

    return (
        <section className="w-full min-h-screen bg-[#212121] flex items-center justify-center">
            <div className="w-[450px] h-[400px]  text-white font-sans">
                <div className="w-full h-full rounded-2xl relative transition-transform duration-[1500ms] [transform-style:preserve-3d]">
                    {/* Card Top Header */}
                    <div className="absolute w-1/2 h-[10%] top-0 left-1/4 flex items-center justify-center bg-transparent border-x border-b border-black rounded-b-xl shadow-[3px_3px_15px_rgb(0,0,0),-3px_-3px_15px_rgb(58,58,58)]">
                        <p className="text-sm font-bold text-white">Profile</p>
                    </div>

                    {/* Card Front */}
                    <div className="absolute  w-full h-full rounded-2xl flex flex-col items-center justify-center gap-5  shadow-[5px_5px_30px_rgb(4,4,4),-5px_-5px_30px_rgb(57,57,57)] backface-hidden">
                        <FaUserCircle className="w-[100px] h-[100px] mt-8" />

                        <div className="flex flex-col items-center gap-3 w-full px-4">
                            {/* Name Input */}
                            <div className="w-full flex justify-center items-center">
                                <input
                                    type="text"
                                    className="bg-[#2b2b2b] rounded px-3 py-1 w-full outline-none"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    readOnly={!isEditingName}
                                />
                                <div className="flex gap-2 mt-1">
                                    <button
                                        className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
                                        onClick={() => setIsEditingName(true)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="text-xs bg-blue-600 px-2 py-1 rounded hover:bg-blue-500"
                                        onClick={() => setIsEditingName(false)}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="w-full">
                                <input
                                    type="email"
                                    className="bg-[#2b2b2b] rounded px-3 py-1 w-full outline-none"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {/* Password Input */}
                            <div className="w-full flex justify-center items-center">
                                <input
                                    type="password"
                                    className="bg-[#2b2b2b] rounded px-3 py-1 w-full outline-none"
                                    placeholder="New Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    readOnly={!isEditingPassword}
                                />
                                <div className="flex gap-2 mt-1">
                                    <button
                                        className="text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
                                        onClick={() => setIsEditingPassword(true)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="text-xs bg-blue-600 px-2 py-1 rounded hover:bg-blue-500"
                                        onClick={() => setIsEditingPassword(false)}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
