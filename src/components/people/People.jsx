import React, { useEffect, useState } from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { chatServices } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { addConversation, fetchConversations, selectConversation } from '../../store/slices/conversationSlice';
import Lottie from "lottie-react";
import loading from "../../../public/animation/loading.json";

function People() {
  const userData = useSelector((state) => state.authSlice.user);
  const [contactEmail, setContactEmail] = useState("");
  const dispatch = useDispatch();
  const { conversation, error, status, selectedConversation, messages } = useSelector(
    (state) => state.conversationSlice
  );

  //========================= Fetch conversation list
  useEffect(() => {
    dispatch(fetchConversations());
  }, [dispatch, messages]);

  if (status === "loading") {
    return <div><Lottie animationData={loading} /></div>;
  }

  //===================================== Handle Add Contact
  const handelAdd = async (e) => {
    e.preventDefault();
    try {
      dispatch(addConversation(contactEmail));
      setContactEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  //=============================== Handle Select Conversation
  const handelSelect = (item) => {
    if (item?.conversationID !== selectedConversation?.conversationID) {
      dispatch(selectConversation(item));
    }
  };

  return (
    <>
      <section className='bg-[#212121] w-full min-h-screen py-6 border border-amber-100'>
        <div className="pl-4 pr-4 max-w-md">

          {/*======================= Search Bar & Add Button ============================*/}
          <form onSubmit={handelAdd} className="flex items-center justify-between mb-4">
            <div className="flex items-center bg-[#212121] border border-amber-100 rounded-xl px-3 py-2 w-full shadow">
              <FiSearch className="text-[#fff] mr-2" />
              <input
                value={contactEmail}
                onKeyDown={(e) => e.key === "Enter" && handelAdd(e)}
                type="email"
                placeholder="Search..."
                required
                onChange={(e) => setContactEmail(e.target.value)}
                className="bg-transparent w-full outline-none text-sm text-[#fff] placeholder:text-gray-500"
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
                className={`flex items-center gap-5 p-4 shadow-neumorphic mb-4 cursor-pointer transition 
                ${isSelected ? 'bg-[#212121] border border-[#e8e8e8] rounded-xl  text-white' : 'bg-[#212121] text-[#fff]'}`}
              >
                <div className="bg-[#212121] user_image w-[60px] h-[50px] rounded-full overflow-hidden flex items-center justify-center text-2xl font-bold text-[#fff] uppercase">
                  {otherUser.avatar ? (
                    <img
                      src={otherUser.avatar}
                      className='w-full h-full object-cover'
                      alt="user"
                    />
                  ) : (
                    otherUser?.fullName?.charAt(0).toUpperCase()
                  )}
                </div>
                <div className='flex items-center justify-between w-full'>
                  <div>
                    <h2 className={`text-lg font-semibold ${isSelected ? 'text-white' : 'text-[#fff]'}`}>
                      {otherUser.fullName}
                    </h2>
                    <p className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-[#fff]'}`}>
                      {lastMessage}
                    </p>
                  </div>
                  <div>
                    <p className={`py-1 px-3 rounded-xl text-sm font-Poppins ${isSelected ? 'text-white' : 'text-[#fff]'}`}>
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
