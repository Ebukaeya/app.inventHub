import { Link } from "react-router-dom";

const WishItem = (props) => {
  return (
    <>
      <div className="wisheItemDiv">
        <div>
            <img src="https://res.cloudinary.com/ebuka1122/image/upload/v1656416015/samples/Ihub-Consumer-App/download_fq6jxy.jpg"/>
        </div>
        <div>
          <div className="wishItmeTitleDiv">
            <p>Black write watch </p>
            <p>Zara store</p>
            <p>+45 91447264</p>
          </div>
          <div>
            <p> <span style={{fontSize:"12px"}}>Kr</span> 200</p>
            <Link to={"/"}><button className="viewItemWL">View item</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishItem;
