import Chats from "./Chats";
import { ImAttachment } from "react-icons/im";
import { IoSend } from "react-icons/io5";
import Template from "../Template";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { updateSelectedMessage } from "../../slices/messageSlice";

const MessageDetailPage = ({socket}) => {

      
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile.profile);
  const { selectedConversation } = useSelector((state) => state.selectedConversation);
 
  

  const bottom = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    scrollToBottom();
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

    /* refreshChatList(); */
  };

  return (
    <>
      <Template>
        <div className='messageComWrapper3'>
          <div className='messageDetailTitleDiv'>
            <div onClick={() => navigate("/messages")} id='messgageProfileImage3'>
              <IoIosArrowBack color='gray' size={24} />
              <img src={selectedConversation.business.profileImage} />
            </div>
            <div>
              <p className='NameMessageDetail'>{selectedConversation.business.NameOfBusiness}</p>
              {selectedConversation.business.isOnline ? <p>online</p> : <p style={{ color: "red" }}>{"    "} </p>}
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
              <input value={message} onChange={(e) => setMessage(e.target.value)} className='inputMessage' type='text' placeholder='Type something..' />
              <ImAttachment />
            </div>
            <button onClick={()=>sendMessage()}>
              <IoSend size={24} />
            </button>
          </div>
        </div>
      </Template>
    </>
  );
};

export default MessageDetailPage;
