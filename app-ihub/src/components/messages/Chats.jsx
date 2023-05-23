const Chats = ({ who,message }) => {
  let chatClass = who === "self" ? "flex-end  " : "flex-start  ";

  return (
    <>
      <div className='chattingDiv  ' style={{ alignSelf: chatClass }}>
        <div className={who==="self"? 'rightchat': "leftchat"} >{message.message}</div>
        <div className='timeStampChat' style={who==="self"? {alignItems:"flex-end"}: {alignItems:"flex-start"}}>
          <p>{message.time}</p>
          {who === "self" && message.seen && <p>seen</p>}
        </div>
      </div>
    </>
  );
};

export default Chats;
