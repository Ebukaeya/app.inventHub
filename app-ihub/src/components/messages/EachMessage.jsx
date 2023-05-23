import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedConversation } from "../../slices/messageSlice";
import { useEffect, useState } from "react";

const EachMessage = ({ isTabletScreen, chat, selectedConversation,socket }) => {
  const [selectedChatClass, setSelectedChatClass] = useState("");

  useEffect(() => {
    if (selectedConversation && selectedConversation.business.id === chat.business.id) {
      setSelectedChatClass("selecetedMessage");
    } else {
      setSelectedChatClass("");
    }
  }, [selectedConversation]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedMessage = (e) => {
    /*  let targetDiv = e.target;
    let targetDivParentChildren = targetDiv.parentElement.children;
    Array.from(targetDivParentChildren).forEach((child) => {
      child.classList.remove("selecetedMessage");
    });
    targetDiv.classList.add("selecetedMessage"); */
    /* setSelectedChat({
      profileImage: chat.business.profileImage,
      name: chat.business.NameOfBusiness,
      messages: chat.chats,
      roomID: chat.business.id,
      storeOwnerID: chat.business.storeOwnerID,
    }); */

    dispatch(setSelectedConversation(chat));
    isTabletScreen && navigate("/messages/eachMessage"  , {state:"helo"}); /* pass the selected chat across */
  };

  return (
    <>
      <div
        onClick={(e) => {
          selectedMessage(e);
        }}
        className={"EachMessageCompDiv " + selectedChatClass}
      >
        <img src={chat.business.profileImage} />
        <div>
          <p>{chat.business.NameOfBusiness} </p>
          <p>{chat.business.lastMessage}</p>
        </div>
      </div>
      
    </>
  );
};

export default EachMessage;
