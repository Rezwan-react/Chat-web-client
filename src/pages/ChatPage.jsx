import React from 'react';
import Chat from '../components/chat/Chat';
import People from '../components/people/People';
import { useSelector } from 'react-redux';

function ChatPage() {
  const { selectedConversation } = useSelector((state) => state.conversationSlice);

  return (
    <>
      {selectedConversation ? (
        <div className="flex w-full min-h-screen">
          {/* Sidebar */}
          <div className="w-[320px] bg-[#e8e8e8] border-r border-gray-300">
            <People />
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 bg-white">
            <Chat />
          </div>
        </div>
      ) : (
        <div className="flex w-full min-h-screen">
          {/* Sidebar */}
          <div className="w-[320px] bg-[#e8e8e8] border-r border-gray-300">
            <People />
          </div>

          {/* Placeholder Message */}
          <div className="flex-1 p-5 flex items-center justify-center text-gray-500 bg-white">
            <p className="text-xl font-medium font-poppins text-black">
              Select a conversation or start a new one
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatPage;
