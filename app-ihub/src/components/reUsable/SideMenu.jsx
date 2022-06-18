import "../../styles/sidemenu.css";

const sideMenu = () => {
  const closeSideMenu = () => {
    let sideMenu = document.querySelector(".sideMenu");
    let cover = document.querySelector(".cover");
    console.log(cover);
    cover.style.display = "none";
    sideMenu.classList.remove("open");
  };

  return (
    <>
      <div onClick={closeSideMenu} className="cover">
        <div className="sideMenu"></div>
      </div>
    </>
  );
};

export default sideMenu;
