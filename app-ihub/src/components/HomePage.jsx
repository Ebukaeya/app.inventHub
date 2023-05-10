import "../styles/homePage.css";
/* import Narbar from "./reUsable/Navbar"; */
import Slider from "./reUsable/Slider";
import SideMenu from "./reUsable/SideMenu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Template from "./Template";
import Narbar from "./narbar/Narbar";
const HomePage = () => {
  const profile = useSelector((state) => state.profile.profile);
  const navigate = useNavigate();
  return (
    <>
      <Template>
        <div className='mycontainer'>
          <div className='SliderDivWrapper'>
            <Slider />
          </div>
          <div className='ExplorePageWrapper'>
            <div onClick={()=>navigate("/products")}>
              <div className='IconDiv'>
                <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1655510350/samples/Ihub-Consumer-App/Asset_1_who0e4.png' />
              </div>
              <div>
                <p className='MakeTextAl'>Explores stores</p>
                <p className='MakeTextAl'>Buy products</p>
              </div>
            </div>

            <div>
              <div className='IconDiv'>
                <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1655577928/samples/Ihub-Consumer-App/Asset_6_aapdhf.png' />
              </div>
              <div>
                <p className='MakeTextAl'>Explores stores</p>
                <p className='MakeTextAl'>Buy products</p>
              </div>
            </div>
            <div>
              <div>
                <div className='IconDiv'>
                  <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1655577925/samples/Ihub-Consumer-App/Asset_5_gnfcvz.png' />
                </div>
                <div>
                  <p className='MakeTextAl'>Explores stores</p>
                  <p className='MakeTextAl'>Buy products</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className='IconDiv'>
                  <img src='https://res.cloudinary.com/ebuka1122/image/upload/v1655511530/samples/Ihub-Consumer-App/Asset_2_q1j5kf.png' />
                </div>
                <div>
                  <p className='MakeTextAl'>Explores stores</p>
                  <p className='MakeTextAl'>Buy products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Template>
      {/*    { profile &&  <Narbar />} */}
    </>
  );
};

export default HomePage;
