import "../styles/homePage.css";
import Narbar from "./reUsable/Navbar";
import Slider from "./reUsable/Slider";
import SideMenu from "./reUsable/SideMenu";

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
            <div className="IconDiv">
              <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1655510350/samples/Ihub-Consumer-App/Asset_1_who0e4.png" />
            </div>
            <div>
              <p>Explores stores</p>
              <p>Buy products</p>
            </div>
          </div>
          <div>
            <div className="IconDiv">
              <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1655511569/samples/Ihub-Consumer-App/Asset_3_dwej4q.png" />
            </div>
            <div>
              <p>Explores stores</p>
              <p>Buy products</p>
            </div>
          </div>
          <div>
            <div>
              <div className="IconDiv">
                <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1655511572/samples/Ihub-Consumer-App/Asset_4_n0bvy4.png" />
              </div>
              <div>
                <p>Explores stores</p>
                <p>Buy products</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="IconDiv">
                <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1655511530/samples/Ihub-Consumer-App/Asset_2_q1j5kf.png" />
              </div>
              <div>
                <p>Explores stores</p>
                <p>Buy products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideMenu />
    </>
  );
};

export default HomePage;
