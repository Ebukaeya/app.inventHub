const Chats = ({ who }) => {
  let chatClass = who === "self" ? "flex-end  " : "flex-start  ";

  return (
    <>
      <div className='chattingDiv  ' style={{ alignSelf: chatClass }}>
        <div className={who==="self"? 'rightchat': "leftchat"} >cc jwernf wefnve rjvner vkenv ekrnv ervkemnvierfv my nae is eyo the masjjwdf ewjrnfe wrjgfner fjwenr gf3jrngf erjgetrget gtejgnutg erjgnrje gf</div>
        <div className='timeStampChat' style={who==="self"? {alignItems:"flex-end"}: {alignItems:"flex-start"}}>
          <p>4:10pm</p>
          {who === "self" && <p>seen</p>}
        </div>
      </div>
    </>
  );
};

export default Chats;
