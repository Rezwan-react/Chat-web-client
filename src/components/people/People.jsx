import React, { useEffect, useState } from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { chatServices } from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { fetchConversations, selectConversation } from '../../store/slices/conversationSlice';
import Lottie from "lottie-react";
import loading from "../../../public/animation/loading.json"

function People() {
  const userData = useSelector((state) => state.authSlice.user);
  // const [conversation, setConversation] = useState([]);
  const [contactEmail, setContactEmail] = useState("");
  const dispatch = useDispatch();
  const { conversation, error, status } = useSelector(
    (state) => state.conversationSlice
  );
  // ============================ People Card List function 
  useEffect(() => {
    dispatch(fetchConversations());
  }, []);

  if (status === "loading") {
    return <div ><Lottie animationData={loading} /> </div>;
  }

  // ====================================== add contact handel function 
  const handelAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await chatServices.AddCon(contactEmail);
      dispatch(fetchConversations());
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  // ====================================== add Select handel function 
  const handelSelect = (item) => {
    dispatch(selectConversation(item))
  }

  return (
    <section className='bg-[#e8e8e8] w-full min-h-screen py-6'>
      <div className="pl-4 pr-4 max-w-md">

        {/*================================= Search Bar & Add Button ===========================*/}
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

        {/*=============================== People Card List =======================*/}
        {conversation.map((item) => {
          const isCreator = item.creator._id === userData._id;
          const otherUser = isCreator ? item.participent : item.creator;
          const lastMessage = item.lastMessage?.content || 'No messages yet';
          const timestamp = item.lastMessage?.createdAt
            ? new Date(item.lastMessage.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            : '';

          return (
            <div
              key={item._id}
              onClick={() => handelSelect({ ...item.participent, conversationID: item._id })}
              className='main flex items-center gap-5 p-4 bg-[#009087] border border-[#e8e8e8] rounded-xl shadow-neumorphic mb-4'
            >
              <div className="bg-green-100 user_image w-[60px] h-[50px] rounded-full overflow-hidden flex items-center justify-center text-black text-2xl font-bold uppercase">
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
              <div onClick={() => handelSelect({ ...item.creator, conversationID: item._id })} className='flex items-center justify-between w-full'>
                <div>
                  <h2 className='text-lg font-semibold text-white'>{otherUser.fullName}</h2>
                  <p className='text-sm font-semibold text-white'>{lastMessage}</p>
                </div>
                <div>
                  <p className="sender_msg w-fit py-1 px-3 rounded-xl text-sm font-Poppins text-white">
                    {timestamp}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default People;
