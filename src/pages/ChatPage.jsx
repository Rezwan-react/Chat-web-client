import React from 'react'
import Chat from '../components/chat/Chat'
import People from '../components/people/People'

function ChatPage() {
  return (
    <div className='flex w-full min-h-screen'>
      {/* Sidebar */}
      <div className="w-[320px] bg-[#e8e8e8] border-r">
        <People />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 bg-white">
        <Chat />
      </div>
    </div>
  )
}

export default ChatPage
