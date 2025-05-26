import { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FaRegEdit, FaRegSave } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../store/slices/authSlice';

function Profile() {
    const user = useSelector((state) => state.authSlice.user);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [profilePicUrl, setProfilePicUrl] = useState('');
    const [isEditingPic, setIsEditingPic] = useState(false);
    const [newProfilePic, setNewProfilePic] = useState(null);
    const dispatch = useDispatch();

    // Initialize fields from user data
    useEffect(() => {
        if (user) {
            setName(user.fullName || '');
            setEmail(user.email || '');
            setProfilePicUrl(user.avatar || '');
        }
    }, [user]);

    // Save handler for name
    const handleSaveName = () => {
        dispatch(updateUserData({ fullName: name }));
        setIsEditingName(false);
    };

    // Save handler for password
    const handleSavePassword = () => {
        dispatch(updateUserData({ password }));
        setIsEditingPassword(false);
    };

    // Handler to save new profile picture
    const handleSaveProfilePic = () => {
        if (newProfilePic) {
            dispatch(updateUserData({ avatar: newProfilePic }));
            setProfilePicUrl(newProfilePic);
            setIsEditingPic(false);
            setNewProfilePic(null);
        }
    };

    return (
        <section className="w-full min-h-screen bg-[#212121] flex items-center justify-center">
            <div className="w-[450px] h-[400px]  text-white font-sans ">
                <div className="w-full h-full rounded-2xl border border-amber-100 relative transition-transform duration-[1500ms] [transform-style:preserve-3d]">
                    {/* Card Top Header */}
                    <div className="absolute w-1/2 h-[10%] top-0 left-1/4 flex items-center justify-center bg-transparent border-x border-b border-black rounded-b-xl shadow-[3px_3px_15px_rgb(0,0,0),-3px_-3px_15px_rgb(58,58,58)]">
                        <p className="text-sm font-bold text-white">Profile</p>
                    </div>

                    {/* Card Front */}
                    <div className="absolute  w-full h-full rounded-2xl flex flex-col items-center justify-center gap-5  shadow-[5px_5px_30px_rgb(4,4,4),-5px_-5px_30px_rgb(57,57,57)] backface-hidden">
                        <div className="w-[120px] h-[120px] mt-3.5 border border-amber-100 rounded-full overflow-hidden relative">
                            {profilePicUrl ? (
                                <img
                                    src={profilePicUrl}
                                    alt="Profile"
                                    className="w-[120px] h-[120px] rounded-full object-cover "
                                />
                            ) : name ? (
                                <div className="w-[120px] h-[120px] rounded-full bg-transparent flex items-center justify-center text-4xl font-bold text-white uppercase select-none">
                                    {name.charAt(0).toUpperCase()}
                                </div>
                            ) : (
                                <FaUserCircle className="w-full h-full text-gray-400" />
                            )}

                            <div className="absolute bottom-2 right-2 bg-transparent rounded-full  p-1 shadow-md">
                                {!isEditingPic ? (
                                    <label htmlFor="profile-pic-upload" className="cursor-pointer">
                                        <FaRegEdit className="text-blue-500 text-[18px]" />
                                    </label>
                                ) : (
                                    <button onClick={handleSaveProfilePic}>
                                        <FaRegSave className="text-blue-500 text-[18px]" />
                                    </button>
                                )}
                                <input
                                    id="profile-pic-upload"
                                    type="file"
                                    accept="image/*"
                                    className="overflow-hidden absolute opacity-0 w-0 h-0"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                setNewProfilePic(reader.result);
                                                setIsEditingPic(true);
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-3 w-full px-4">
                            {/* Name Input */}
                            <div className="w-full flex justify-center items-center">
                                <input
                                    type="text"
                                    className="flex items-center w-[300px] sm:w-[400px] bg-transparent backdrop-blur-lg rounded-3xl shadow-lg p-2.5 outline-none"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    readOnly={!isEditingName}
                                />
                                <div className="flex gap-2 mt-1">
                                    {!isEditingName ? (
                                        <button className="text-xl flex justify-center items-center bg-transparent ml-2 px-2.5 py-2 rounded active:scale-95"
                                            onClick={() => setIsEditingName(true)}
                                        >
                                            <FaRegEdit className="text-blue-500 text-lx" />
                                        </button>
                                    ) : (
                                        <button className="text-xl flex justify-center items-center bg-transparent ml-2 px-2.5 py-2 rounded active:scale-95"
                                            onClick={handleSaveName}
                                        >
                                            <FaRegSave className="text-green-600 text-lx" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="w-full">
                                <input
                                    type="email"
                                    className="flex items-center w-[300px] sm:w-[400px] bg-transparent backdrop-blur-lg rounded-3xl shadow-lg p-2.5 outline-none"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    readOnly
                                />
                            </div>

                            {/* Password Input */}
                            <div className="w-full flex justify-center items-center">
                                <input
                                    type="password"
                                    className="flex items-center w-[300px] sm:w-[400px] bg-transparent backdrop-blur-lg rounded-3xl shadow-lg p-2.5 outline-none"
                                    placeholder="New Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    readOnly={!isEditingPassword}
                                />
                                <div className="flex gap-2 mt-1">
                                    {!isEditingPassword ? (
                                        <button
                                            className="text-xl flex justify-center items-center bg-transparent ml-2 px-2.5 py-2 rounded active:scale-95"
                                            onClick={() => setIsEditingPassword(true)}
                                        >
                                            <FaRegEdit className="text-blue-500 text-xl" />
                                        </button>
                                    ) : (
                                        <button
                                            className="text-xl flex justify-center items-center bg-transparent ml-2 px-2.5 py-2 rounded active:scale-95"
                                            onClick={handleSavePassword}
                                        >
                                            <FaRegSave className="text-green-600 text-xl" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hidden block for future use */}
                    <div className="hidden" aria-hidden="true">
                        {/* You can put a spinner, message, or any content here */}
                        Hidden block content
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
