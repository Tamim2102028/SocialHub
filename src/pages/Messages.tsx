import React from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { setNewMessage, clearNewMessage } from "../store/slices/uiSlice";
import ChatArea from "../components/Messages/ChatArea";
import {
  mockConversations,
  type Conversation,
} from "../components/Messages/dummyData/messagesData";

const Messages: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedConversation = useAppSelector(
    (state) => state.ui.messages.selectedConversation
  );
  const newMessage = useAppSelector((state) => state.ui.messages.newMessage);

  const conversations: Conversation[] = mockConversations;

  const currentConversation = conversations.find(
    (conv) => conv.id === selectedConversation
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      dispatch(clearNewMessage());
    }
  };

  const handleNewMessageChange = (message: string) => {
    dispatch(setNewMessage(message));
  };

  const handlePhoneCall = () => {
    console.log("Starting phone call");
  };

  const handleVideoCall = () => {
    console.log("Starting video call");
  };

  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  return (
    <div className="flex h-[calc(100vh-64px)] rounded-lg border border-gray-200 bg-white shadow-sm">
      <ChatArea
        conversation={currentConversation || null}
        newMessage={newMessage}
        onNewMessageChange={handleNewMessageChange}
        onSendMessage={handleSendMessage}
        onPhoneCall={handlePhoneCall}
        onVideoCall={handleVideoCall}
        onMenuClick={handleMenuClick}
      />
    </div>
  );
};

export default Messages;
