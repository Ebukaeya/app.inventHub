const styles = {
  container: {
    marginTop: 20 + "px",
    marginRight: 1.2 + "vh",
    marginLeft: 1 + "vh",
    marginBottom: 20 + "px",
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
  },
  containerChild1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 30 + "%",
  },
  containerChild2: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 60 + "%",
  },
  profileImageDiv: {
    width: 80 + "%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  img: {
    height: 36 + "px",
    width: 36 + "px",
    objectFit: "cover",
    borderRadius: "100%",

    boxShadow: "0px 0px 3px 0px #599aab",
  },
  spentAmoutdiv: {
    width: "90%",
    padding: "2px",
    height: 38 + "px",
    borderRadius: 35 + "px",
    background: " rgb(232,238,248)",
    background:
      " linear-gradient(86deg, rgba(232,238,248,1) 0%, rgba(255,255,255,1) 100%)",
  },
  spentAmount: {
    fontSize: "0.6rem",
    fontWeight: "bold",
    color: "#545353",
    fontFamily: "Nunito, sans-serif",
  },
  Amount: {
    fontSize: "1rem",
    fontWeight: "bold",
    fontFamily: "Nunito, sans-serif",
  },
};

const Narbar = () => {
  const openSideMenu = () => {
    let sideMenu = document.querySelector(".sideMenu");
    let cover = document.querySelector(".cover");
    cover.style.display = "block";
    sideMenu.classList.add("open");
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.containerChild1}>
          <div onClick={openSideMenu}>
            <svg
              style={{ cursor: "pointer" }}
              //  xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
              fontWeight="900"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
        <div style={styles.containerChild2}>
          <div style={styles.profileImageDiv}>
            <div style={styles.spentAmoutdiv}>
              <p style={styles.spentAmount}>spent amount</p>
              <p style={styles.Amount}>$ 999.9</p>
            </div>
            <img
              style={styles.img}
              src="https://res.cloudinary.com/ebuka1122/image/upload/v1655499719/samples/Ihub-Consumer-App/linkpic2_nqxxhx.png"
            />
          </div>
          <svg
            color="gray"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-bell-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Narbar;
