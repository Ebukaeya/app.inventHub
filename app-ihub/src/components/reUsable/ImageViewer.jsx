import "../../styles/productDetail.css";
import { IoMdClose } from "react-icons/io";

const ImageViewer = (props) => {
  console.log(props);
  return (
    <>
      <div className="imageViewrWrapper">
        <div onClick={() => props.close(false)} className="closeImageViwer">
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
