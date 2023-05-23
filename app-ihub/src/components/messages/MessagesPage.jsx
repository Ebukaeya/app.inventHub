import "../../styles/messages/message.css";
import EachMessage from "./EachMessage";

import Template from "../Template";
import BottomNavigation from "../reUsable/BottomNavigation";
import { fetchChatListUrl } from "../../api/consumerApi";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MessageComp from "./MessageComp";
import { setSelectedConversation, dropSelectedMessage } from "../../slices/messageSlice";

const MessagesPage = ({ screenType, socket }) => {
  console.log(socket);
  const [chatList, setChatList] = useState([]);

  const { profile } = useSelector((state) => state.profile);
  const { selectedConversation } = useSelector((state) => state.selectedConversation);
  const dispatch = useDispatch();

  useEffect(() => {
    getChatList();
    socket.on("updatedChat", (data) => {
      console.log("updatedChat", data);
      setChatList(data.chats);
    });

    return () => {
      socket.off("updatedChat");
      socket.off("userConnected");
      socket.off("userDisconnected");
      /* dispatch(dropSelectedMessage()); */ /* droponly on web */
    };
  }, []);

  useEffect(() => {
    /* experimental */
    socket.on("userConnected", (data) => {
      console.log(chatList);
      let newChatList = [...chatList].map((chat) => {
        let newChat =   JSON.parse(JSON.stringify(chat)) ;
        if (newChat.business.id === data.userID) {
          newChat.business["isOnline"] = true;
          console.log(newChat.business.isOnline);
        }
        return newChat;
      });

      setChatList(newChatList);
    });

    socket.on("userDisconnected", (data) => {
    
      let newChatList = chatList.map((chat) => {
        let newChat =   JSON.parse(JSON.stringify(chat))    /* { ...chat }; */
        if (newChat.business.id === data.userID) {
          newChat.business["isOnline"] = false;
          /* chat.business["isOnline"] = false; */
          console.log(newChat.business.isOnline);
        }
        return newChat;
      });
      console.log(newChatList);
      setChatList(newChatList);
    });

    return () => {
      console.log("unmounting in main");
      
    };
  }, [chatList]);

  useEffect(() => {
    socket.on("updatedChat", (data) => {
      console.log("updatedChat", data);
      if (selectedConversation) {
        selectedConversation.conversationID === data.currentConversation.conversationID && dispatch(setSelectedConversation(data.currentConversation));
      }
    });

    return () => {
      socket.off("updatedChat");
    };
  }, [selectedConversation]);

  const getChatList = async () => {
    try {
      const response = await fetch(fetchChatListUrl + profile._id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          /* Authorization: `Bearer ${profile.token}`, */
        },
      });
      if (response.ok) {
        const data = await response.json();
        /* make object writable */
        data.forEach((chat) => {
          chat.business = { ...chat.business, isOnline: false };
          /* Object.defineProperties(chat.business, { isOnline: { writable: true, configurable: true } }); */
        });
        console.log(data);
        setChatList(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Template>
        <h4 className='titleMessage3'>Messages</h4>
        <div className='messageWrapperDiv'>
          <div className='messageComWrapper'>
            <div className=''>
              {/* each message */}

              {chatList.map((chat) => (
                <EachMessage key={chat._id} chat={chat} isTabletScreen={screenType} selectedConversation={selectedConversation} socket={socket} />
              ))}

              {/* <EachMessage isTabletScreen={screenType} /> */}
            </div>

            {selectedConversation && <MessageComp refreshChatList={getChatList} socket={socket} profile={profile} />}
          </div>
        </div>
        <BottomNavigation />
      </Template>
    </>
  );
};

export default MessagesPage;
