import "../../styles/loaders.css";

const SkeletonLoad = () => {
  return (
    <>
      <div className="skeletonLoaderWrapper">
        <div className="skeletonSearch animatedAll"></div>
        <div className="productSkeletonWrapper">
          <div className="animatedAll"></div>
          <div className="animatedAll"></div>
          <div className="animatedAll"></div>
        </div>
        <div className="storeSkeletonWrapper">
          <div className="animatedAll"></div>
          <div className="animatedAll"></div>
          <div className="animatedAll"></div>
        </div>
      </div>
    </>
  );
};

export default SkeletonLoad;
