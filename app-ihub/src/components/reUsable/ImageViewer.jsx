import "../../styles/productDetail.css";
import { IoMdClose } from "react-icons/io";

const ImageViewer = (props) => {
  console.log(props);

  const closeImage = ()=>{
    props.close(false)
    let body = document.querySelector("body");
    body.style.overflow = "auto";
    
  }
  return (
    <>
      <div className="imageViewrWrapper">
        <div onClick={() => closeImage() } className="closeImageViwer">
          <IoMdClose size={30} />
        </div>
        <div className="imageView">
          <img src={props.image} />
        </div>
      </div>
    </>
  );
};

export default ImageViewer;
