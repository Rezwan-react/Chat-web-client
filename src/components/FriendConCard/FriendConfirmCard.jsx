import React from 'react';

function FriendConfirmCard() {
    return (
        <section className="py-6">
            <div className="container mx-auto px-4">
                <div
                    className="w-full shadow-md rounded-xl p-4 flex items-center justify-between space-x-4 text-white bg-gradient-to-r from-[#00154c] via-[#12376e] to-[#23487f] ">
                    {/* Profile Info */}
                    <div className="flex items-center space-x-4">
                        <img src="/img/rezwan.jpg" alt="profile" className="w-10 h-10 rounded-full overflow-hidden border-2 border-white" />
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-200">Sent you a friend request</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                        <button
                            className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 text-sm transition-transform hover:scale-105">
                            Confirm
                        </button>
                        <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300 text-sm transition-transform hover:scale-105">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FriendConfirmCard;
