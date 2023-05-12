


const MessageSeller = () => {


      return(
            <>

   <div onClick={(e)=>e.stopPropagation()} className="dropDownMessageDiv">
    <textarea placeholder="Send message to store..." />
    <div className="sendMessgaeBtn973">
      <button>Send</button>
    </div>
   </div>
            </>
      )
};



export default MessageSeller;