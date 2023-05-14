import "../../styles/exploreStore/exploreStore.css";
import { MdVerified, MdLocationPin, MdOutlineStarPurple500 } from "react-icons/md";
import { FiBox, FiHeart } from "react-icons/fi";
import { RiUserFollowLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const EachStoreCard = ({store}) => {
  const navigate = useNavigate();

  const handleStoreClick = () => {
      navigate(`store/${store._id}`, {state: {store}});
  };
  return (
    <>
      <div onClick={()=>handleStoreClick()} className='eachStoreCard12Div'>
        <div className='StoreImageDiv122'>
          <img src='https://lifelonglearning.dtu.dk/wp-content/uploads/2022/02/iStock-1326009446-scaled.jpg' />
          <div className='locationOfstoreFloating6'>Abakaliki</div>
        </div>
        <div className='storeTitleInfo44'>
          <div className='storeTitleInfo44FirstFlex'>
            <p>{store?.storeName}</p> <MdVerified size={12} color='green' />{" "}
          </div>
          <div className='storeTitleInfo44FirstFlex122'>
            <MdLocationPin size={12} color='gray' />
            <p>Nordre telkaj 22 stv ss ss Denmark</p>
          </div>
        </div>
        <div className='storeIconDiv'>
          <div>
            <FiBox size={12} color='gray' />
            <span>1232</span> {/* change to online only or online + offline */}
          </div>
          <div>
            <div>
              <MdOutlineStarPurple500 size={12} color='#FFC107' />
              <span>4.1k</span>
            </div>
            <div>
              <RiUserFollowLine size={12} color='gray' />
              <span>4.1k</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EachStoreCard;
