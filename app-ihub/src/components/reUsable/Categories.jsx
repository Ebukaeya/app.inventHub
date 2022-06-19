import "../../styles/categories.css";

const Categories = ({ categories, updateCategories }) => {
  const updatedNavBar = (e) => {
    let silblings = [...e.target.parentElement.children];
    silblings.forEach((div) => {
      div.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <>
      <div className="mycontainer">
        <div className="categoriesWrapper">
          <div onClick={e=>{
                updateCategories(e.target.innerText);
                updatedNavBar(e);
            }} className="categories active">
            All
          </div>

          {categories.map((category, index) => (
            <div key={index} onClick={e=>{
                updateCategories(e.target.innerText);
                updatedNavBar(e);
            }} className="categories">
              {category}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
