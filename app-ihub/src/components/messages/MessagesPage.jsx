import "../../styles/messages/message.css";
import EachMessage from "./EachMessage";
import Chats from "./Chats";
import { ImAttachment } from "react-icons/im";
import { IoSend } from "react-icons/io5";
import Template from "../Template";
import BottomNavigation from "../reUsable/BottomNavigation";

const MessagesPage = ({screenType}) => {
  return (
    <>
      <Template>
        <h4 className="titleMessage3">Messages</h4>
        <div className='messageWrapperDiv'>
          <div className='messageComWrapper'>
            <div className=''>
              {/* each message */}

              <EachMessage isTabletScreen={screenType} />
              
            </div>
            <div>
              <div className='messageDetailTitleDiv'>
                <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1656416015/samples/Ihub-Consumer-App/download_fq6jxy.jpg' />
                <div>
                  <p className='NameMessageDetail'>Ebuka M Eya India</p>
                  <p>online</p>
                </div>
              </div>
              <div className='messageContentDiv'>
                <Chats who={"self"} />
                <Chats who={"selfs"} />
                <Chats who={"selfs"} />
                <Chats who={"self"} />
                <Chats who={"self"} />
                <Chats who={"self"} />
                <Chats who={"self"} />
                <Chats who={"self"} />
                <Chats who={"self"} />
              </div>
              <div className='messageInputDIv'>
                <div>
                  <input autoFocus={true} className='inputMessage' type='text' placeholder='Type something..' />
                  <ImAttachment />
                </div>
                <button>
                  <IoSend size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <BottomNavigation/>
      </Template>
    </>
  );
};

export default MessagesPage;
