import { useNavigate } from "react-router-dom";

const EachOrderMain = (props) => {
      const navigate = useNavigate();
  return (
    <>
      <div className='eachOrderMainItemList'>
        <div className='priceHeaderDiv33'>
          <div>
            <p className='caption4r'>Date</p>
            <p className='caption293e'> 2023.04.05</p>
          </div>
          <div>
            <p className='caption4r'>Total price</p>
            <p className='caption293e'>$4000.00</p>
          </div>
          <div className='flexingContainer21'>
            <div>
              <p className='caption4r'>Order status</p>
              <p className='caption293e'>Delivered</p>
            </div>
            <p>-</p>
          </div>
        </div>
        <div className='orderImageDisplayDiv345'>
          <div className='OrderImageDivRow2'>
            <div>
              <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1656026265/samples/Ihub-Consumer-App/images_xvpyq7.jpg' />
            </div>
            <div>
              <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1655939583/samples/Ihub-Consumer-App/images_o9oqbm.jpg' />
            </div>
            <div>
              <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1656026265/samples/Ihub-Consumer-App/images_xvpyq7.jpg' />
            </div>
            <div>
              <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1656026265/samples/Ihub-Consumer-App/images_xvpyq7.jpg' />
            </div>
            <div>
              <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1656026265/samples/Ihub-Consumer-App/images_xvpyq7.jpg' />
            </div>
            <div>
              <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1656026265/samples/Ihub-Consumer-App/images_xvpyq7.jpg' />
            </div>
          </div>
          <span>+ 5</span>
        </div>
        <div onClick={()=>navigate("kfhe8fuvjefi")} className="hideOnWeb22"></div>
      </div>
    </>
  );
};

export default EachOrderMain;
