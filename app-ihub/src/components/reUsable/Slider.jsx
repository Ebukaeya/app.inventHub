import { useState, useEffect, useRef } from "react";
import "../../styles/slider.css";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FFBB28", "#FFaB28", "#FFcB28"];
const images = [
  "https://res.cloudinary.com/ebuka1122/image/upload/v1653606730/samples/Ihub_public/taxi_gb4wju.png",
  "https://res.cloudinary.com/ebuka1122/image/upload/v1653638765/samples/Ihub_public/Asset_4_b6sqjd.png",
  "https://res.cloudinary.com/ebuka1122/image/upload/v1653644792/samples/Ihub_public/bike3_kc6rnr.png",
  "https://res.cloudinary.com/ebuka1122/image/upload/v1653608637/samples/Ihub_public/ecutive-drive_eurd5n.png",
  "https://res.cloudinary.com/ebuka1122/image/upload/v1653951879/samples/Ihub_public/slideshow_xxt43j.png",
  "https://res.cloudinary.com/ebuka1122/image/upload/v1653952359/samples/Ihub_public/kekeslideshow_2_gdm8xz.png",
];
const delay = 10500;

function Slider() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1)), delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className='slideshow'>
        <div
          className='slideshowSlider'
          // style={{ transform: `translate3d(${-index * 378.17}px, 0, 0)` }}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((image, index) => (
            <div className='slide' key={index} style={{ backgroundColor: `${image}` }}>
              {/*   <img style={{ width: "100%", height:"100%", backgroundColor: `${image}` }} src={image}  /> */}
            </div>
          ))}
        </div>
      </div>
      <div className='slideshowDots'>
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Slider;
