import { useNavigate } from "react-router-dom";

const EachMessage = ({ message, index, deleteMessage }) => {

  const navigate = useNavigate();
  const selectedMessage = (e) => {
    let targetDiv = e.target;
    let targetDivParentChildren = targetDiv.parentElement.children;
    Array.from(targetDivParentChildren).forEach((child) => {
      child.classList.remove("selecetedMessage");
    });
    targetDiv.classList.add("selecetedMessage");
    navigate("/messages/eachMessage");
  };

  return (
    <>
      <div onClick={(e) => selectedMessage(e)} className='EachMessageCompDiv'>
        <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1656416015/samples/Ihub-Consumer-App/download_fq6jxy.jpg' />
        <div>
          <p>Ebuka M Eya India</p>
          <p>Hi, I am interested in your product jdjndiinsisd jkwnsd</p>
        </div>
      </div>
    </>
  );
};

export default EachMessage;
