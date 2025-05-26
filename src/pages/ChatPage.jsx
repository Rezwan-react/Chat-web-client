import React, { useEffect } from 'react';
import Chat from '../components/chat/Chat';
import People from '../components/people/People';
import { useSelector } from 'react-redux';
import { initSocket } from '../services/socket';

function ChatPage() {
  const { selectedConversation } = useSelector((state) => state.conversationSlice);

  useEffect(() => {
    initSocket()
  }, [])

  return (
    <>
      {selectedConversation ? (
        <div className="flex w-full min-h-screen">
          {/* Sidebar */}
          <div className="w-[320px] bg-[#212121] border-r ">
            <People />
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 bg-[#212121]">
            <Chat />
          </div>
        </div>
      ) : (
        <div className="flex w-full min-h-screen">
          {/* Sidebar */}
          <div className="w-[320px] bg-[#212121] border-r ">
            <People />
          </div>

          {/* Placeholder Message */}
          <div className="flex-1 p-5 flex items-center justify-center text-gray-500 bg-[#212121]">
            <p className="text-xl font-medium font-poppins text-[#fff]">
              Select a conversation or start a new one
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatPage;
