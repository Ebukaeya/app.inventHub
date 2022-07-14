import ImageViewer from "./ImageViewer.jsx";
import { useState } from "react";

/* const images = [
  "https://res.cloudinary.com/ebuka1122/image/upload/v1655726270/samples/Ihub-Consumer-App/download_rznhgu.jpg",
  "https://res.cloudinary.com/ebuka1122/image/upload/v1655726270/samples/Ihub-Consumer-App/download_rznhgu.jpg",
  "https://res.cloudinary.com/ebuka1122/image/upload/v1655726270/samples/Ihub-Consumer-App/download_rznhgu.jpg",
]; */

const ProductSlider = ({productImages}) => {
  const images = productImages
  const [currentImage, setCurrentImage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const viewImage = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
    let body = document.querySelector("body");
    body.style.overflow = "hidden";
    
  };
  return (
    <>
      <div className="parentWrapper">
        <div className="productSliderWrapper">
          <div className="productSlider">
            {images?.map((image, index) => (
              <img onClick={() => viewImage(image.upload)} key={index} src={image.upload} />
            ))}
          </div>
        </div>
        <div className="productDotindwrapper">
          {images?.map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </div>
      {isOpen && <ImageViewer image={currentImage} close={setIsOpen} />}
    </>
  );
};

export default ProductSlider;
