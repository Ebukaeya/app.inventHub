import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const EachCartItem = () => {
  return (
    <>
      <div className='eachCartItem8273'>
        <div className='ImageDiveCart53'>
          <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1677526350/Ihub-product-images/qeateh2lkpfd95jhkscq.png' alt='productImage' />
        </div>
        <div className='eachcCartDetailT8'>
          <div>
            <div>
              <p className='TitleEachCartI2'>AirPioD Pro Max dj</p>
              <span>Apple</span>
              <span>In stock</span>
            </div>
            <div className='flexingOption47e'>
              <div className='AddQuantityButtonCa'>
                <BiMinus size={16} />
                <p> 1</p>
                <BsPlus size={18} />
              </div>
              <div className='AddQuantityButtonCa'>
                <select>
                  <option>M</option>
                  <option>S</option>
                  <option>M</option>
                  <option>M</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <p className="priceTagTT21">#19.00</p>
            <div>
                  <AiOutlineDelete size={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EachCartItem;
