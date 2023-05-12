import Chats from "./Chats";
import { ImAttachment } from "react-icons/im";
import { IoSend } from "react-icons/io5";
import Template from "../Template";
import {IoIosArrowBack} from "react-icons/io";
import { useNavigate } from "react-router-dom";

const MessageDetailPage = () => {

      const navigate = useNavigate();
  return (
    <>
      <Template>
        
        <div className='messageComWrapper3'>
          <div className='messageDetailTitleDiv'>
            <div onClick={()=>navigate("/messages")} id="messgageProfileImage3">
            <IoIosArrowBack color="gray" size={24} />
            <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1656416015/samples/Ihub-Consumer-App/download_fq6jxy.jpg' /></div>
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
              <input  className='inputMessage' type='text' placeholder='Type something..' />
              <ImAttachment />
            </div>
            <button>
              <IoSend size={24} />
            </button>
          </div>
        </div>
        
      </Template>
    </>
  );
};

export default MessageDetailPage;
