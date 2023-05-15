const MessageSeller = ({message, setMessage, sendMessage}) => {
  return (
    <>
      <div onClick={(e) => e.stopPropagation()} className='dropDownMessageDiv'>
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Send message to store...' />
        <div className='sendMessgaeBtn973'>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};

export default MessageSeller;
