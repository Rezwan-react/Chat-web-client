import React, { useEffect, useState } from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { chatServices } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConversations, selectConversation } from '../../store/slices/conversationSlice';
import Lottie from "lottie-react";
import loading from "../../../public/animation/loading.json";

function People() {
  const userData = useSelector((state) => state.authSlice.user);
  const [contactEmail, setContactEmail] = useState("");
  const dispatch = useDispatch();
  const { conversation, error, status, selectedConversation } = useSelector(
    (state) => state.conversationSlice
  );

  //========================= Fetch conversation list
  useEffect(() => {
    dispatch(fetchConversations());
  }, [dispatch]);

  if (status === "loading") {
    return <div><Lottie animationData={loading} /></div>;
  }

  //===================================== Handle Add Contact
  const handelAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await chatServices.AddCon(contactEmail);
      dispatch(fetchConversations());
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //=============================== Handle Select Conversation
  const handelSelect = (item) => {
    dispatch(selectConversation(item));
  };

  return (
    <>
      <section className='bg-[#e8e8e8] w-full min-h-screen py-6'>
        <div className="pl-4 pr-4 max-w-md">

          {/*======================= Search Bar & Add Button ============================*/}
          <form onSubmit={handelAdd} className="flex items-center justify-between mb-4">
            <div className="flex items-center bg-white rounded-xl px-3 py-2 w-full shadow">
              <FiSearch className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Search..."
                required
                onChange={(e) => setContactEmail(e.target.value)}
                className="bg-transparent w-full outline-none text-sm"
              />
            </div>
            <button type='submit' className="ml-3 bg-[#009087] hover:bg-[#007b74] text-white p-2 rounded-xl shadow transition active:scale-95">
              <FiPlus className="text-xl" />
            </button>
          </form>

          {/*============================= People Card List ===========================*/}
          {conversation.map((item) => {
            const isCreator = item.creator._id === userData._id;
            const otherUser = isCreator ? item.participent : item.creator;
            const lastMessage = item.lastMessage?.content || 'No messages yet';
            const timestamp = item.lastMessage?.createdAt
              ? new Date(item.lastMessage.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              : '';

            const isSelected = selectedConversation?.conversationID === item._id;

            return (
              <div
                key={item._id}
                onClick={() => handelSelect({ ...otherUser, conversationID: item._id })}
                className={`flex items-center gap-5 p-4 border border-[#e8e8e8] rounded-xl shadow-neumorphic mb-4 cursor-pointer transition 
                ${isSelected ? 'bg-[#009087] text-white' : 'bg-white text-black'}`}
              >
                <div className="bg-green-100 user_image w-[60px] h-[50px] rounded-full overflow-hidden flex items-center justify-center text-2xl font-bold text-black uppercase">
                  {otherUser.avatar ? (
                    <img
                      src={otherUser.avatar}
                      className='w-full h-full object-cover'
                      alt="user"
                    />
                  ) : (
                    otherUser.fullName.charAt(0).toUpperCase()
                  )}
                </div>
                <div className='flex items-center justify-between w-full'>
                  <div>
                    <h2 className={`text-lg font-semibold ${isSelected ? 'text-white' : 'text-black'}`}>
                      {otherUser.fullName}
                    </h2>
                    <p className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-gray-600'}`}>
                      {lastMessage}
                    </p>
                  </div>
                  <div>
                    <p className={`py-1 px-3 rounded-xl text-sm font-Poppins ${isSelected ? 'text-white' : 'text-gray-600'}`}>
                      {timestamp}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default People;
