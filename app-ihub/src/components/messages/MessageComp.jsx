import Chats from "./Chats";
import { ImAttachment } from "react-icons/im";
import { IoSend } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedMessage } from "../../slices/messageSlice";

const MessageComp = ({ refreshChatList, socket, selectedChat, profile, setSelectedChat }) => {
  const [message, setMessage] = useState("");
  const [isUserOnline, setIsUserOnline] = useState(false);

  const dispatch = useDispatch();
  const { selectedConversation } = useSelector((state) => state.selectedConversation);

  const bottom = useRef(null);

  useEffect(() => {
    scrollToBottom();
 /*    socket.on("userDisconnected", (data) => {
      console.log(selectedConversation.business.id);
      if (selectedConversation.business.id === data.userID) {
        setIsUserOnline(false);
      }
    });
    
    socket.on("userConnected", (data) => {
      console.log(selectedConversation.business.id);
      if (selectedConversation.business.id === data.userID) {
        setIsUserOnline(true);
      }
    });

    return () => {
      socket.off("userConnected");
      socket.off("userDisconnected");
    }; */
  }, [selectedConversation]);

  const scrollToBottom = () => {
    bottom.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const sendMessage = async () => {
    dispatch(updateSelectedMessage({ message, senderID: profile._id, seen: false, time: new Date().toLocaleTimeString() }));
    /* send the message to socket webstore and save in consumer db and webstore db */
    socket.emit("message", {
      message,
      senderInfo: { consumerID: profile._id, fullname: profile.fullName, profileImage: profile.imageUrl, lastMessage: message },
      room: selectedConversation.business.id,
      businessName: selectedConversation.business.NameOfBusiness,
      businessImage: selectedConversation.business.profileImage,
      storeOwnerID: selectedConversation.business.storeOwnerID,
    });

    refreshChatList();
  };
  return (
    <>
      <div>
        <div className='messageDetailTitleDiv'>
          <img src={selectedConversation.business.profileImage} />
          <div>
            <p className='NameMessageDetail'> {selectedConversation.business.NameOfBusiness} </p>
            {selectedConversation.business.isOnline ? <p>online</p> : <p style={{ color: "red" }}>offline</p>}
          </div>
        </div>
        <div className='messageContentDiv'>
          {selectedConversation.chats.map((message, index) => (
            <Chats key={index} who={message.senderID === profile._id ? "self" : "not self"} message={message} />
          ))}

          <div ref={bottom}></div>
        </div>

        <div className='messageInputDIv'>
          <div>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autoFocus={true}
              className='inputMessage'
              type='text'
              placeholder='Type something..'
            />
            <ImAttachment />
          </div>
          <button onClick={sendMessage}>
            <IoSend size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default MessageComp;
