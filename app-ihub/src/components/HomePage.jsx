import "../styles/homePage.css";
import Narbar from "./reUsable/Navbar";
import Slider from "./reUsable/Slider";
import SideMenu from "./reUsable/SideMenu";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Narbar />
      <div className="mycontainer">
        <div className="SliderDivWrapper">
          <Slider />
        </div>
        <div className="ExplorePageWrapper">
          <div>
            <Link className="link" to={"/stores"}>
              <div className="IconDiv">
                <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1655510350/samples/Ihub-Consumer-App/Asset_1_who0e4.png" />
              </div>
              <div>
                <p className="MakeTextAl">Explores stores</p>
                <p className="MakeTextAl">Buy products</p>
              </div>
            </Link>
          </div>

          <div>
            <Link className="link" to={"/restaurants"}>
              <div className="IconDiv">
                <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1655577928/samples/Ihub-Consumer-App/Asset_6_aapdhf.png" />
              </div>
              <div>
                <p className="MakeTextAl">Explores stores</p>
                <p className="MakeTextAl">Buy products</p>
              </div>
            </Link>
          </div>
          <div>
            <div>
              <Link className="link" to={"/logistics"}>
                <div className="IconDiv">
                  <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1655577925/samples/Ihub-Consumer-App/Asset_5_gnfcvz.png" />
                </div>
                <div>
                  <p className="MakeTextAl">Explores stores</p>
                  <p className="MakeTextAl">Buy products</p>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <Link className="link" to={"/services"}>
                <div className="IconDiv">
                  <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1655511530/samples/Ihub-Consumer-App/Asset_2_q1j5kf.png" />
                </div>
                <div>
                  <p className="MakeTextAl">Explores stores</p>
                  <p className="MakeTextAl">Buy products</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SideMenu />
    </>
  );
};

export default HomePage;
