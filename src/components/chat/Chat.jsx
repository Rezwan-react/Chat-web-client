import React, { useEffect, useRef, useState } from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages, sendMessage } from '../../store/slices/conversationSlice';

function Chat() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const chatContainer = useRef(null)

  const { selectedConversation, messages } = useSelector((state) => state.conversationSlice);
  const { user } = useSelector((state) => state.authSlice);
  
// =================== Fetch messages when selectedConversation changes
  useEffect(() => {
    if (selectedConversation?.conversationID) {
      dispatch(fetchMessages(selectedConversation.conversationID));
    }
  }, [selectedConversation, dispatch]);
  // =================== handleSendChat part start
  const handleSendChat = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    dispatch(sendMessage({ content, reciverId: selectedConversation._id, conversationId: selectedConversation.conversationID, }));
    setContent("");
  };
  // =================== handleScroll part start
  useEffect(() => {
    if (chatContainer.current) {
      chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className='w-full h-screen'>
      <div className="container">
        <div className='chat_text'>
          {/* ========== Header ========== */}
          <div className="userDataBar p-5 bg-[#FDFAF6]">
            <div className="singel_users flex justify-between mb-5 items-center">
              <div className='flex items-center gap-5'>
                <div className="bg-green-100 user_image w-[50px] h-[50px] rounded-full border-2 border-[#FFC1DA] overflow-hidden flex items-center justify-center text-black text-2xl font-bold font-poppins uppercase">
                  {selectedConversation?.avatar ? (
                    <img
                      src={selectedConversation?.avatar}
                      className='w-full h-full object-cover'
                      alt="user photo"
                    />
                  ) : (
                    selectedConversation?.fullName?.charAt(0).toUpperCase()
                  )}
                </div>
                <h2 className='text-lg font-semibold text-[#222222] font-poppins'>
                  {selectedConversation?.fullName}
                </h2>
              </div>
            </div>
          </div>

          {/* ========== Chat Messages ========== */}
          <div ref={chatContainer} className="msg_box w-full h-[500px] p-5 overflow-y-scroll">
            {messages.length > 0 ? (
              messages.map((message) => (
                <div key={message._id} className='mb-5'>
                  {message.sender === user._id ? (
                    // Sent Message (You) - right
                    <>
                      <p className="w-fit py-1 px-3 ml-auto bg-[#6A9AB0] rounded-xl font-Poppins text-white">
                        {message?.content}
                      </p>
                      <p className="w-fit py-1 px-3 ml-auto rounded-xl text-sm font-Poppins text-black">
                        {message?.createdAt ? new Date(message.createdAt).toLocaleTimeString() : ''}
                      </p>
                    </>
                  ) : (
                    // Received Message - left
                    <>
                      <p className="w-fit py-1 px-3 bg-[#3A6D8C] rounded-xl font-Poppins text-white">
                        {message?.content}
                      </p>
                      <p className="w-fit py-1 px-3 rounded-xl text-sm font-Poppins text-black">
                        {message?.createdAt ? new Date(message.createdAt).toLocaleTimeString() : ''}
                      </p>
                    </>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center text-xl font-medium font-poppins text-black">No messages yet</p>
            )}
          </div>

          {/* ========== Message Input ========== */}
          <form onSubmit={handleSendChat} className="msg_input flex px-10 border-t-2 border-t-[#640D5F]">
            <input
              onChange={(e) => setContent(e.target.value)}
              type="text"
              value={content}
              required
              className='w-full bg-transparent text-xl font-bold font-Poppins text-[#522258] mt-4 outline-none'
              placeholder='Enter your message'
            />
            <button type='submit' className='text-xl text-[#2E236C] active:scale-[1.1] mt-4 ml-2'>
              <FaRegPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Chat;
