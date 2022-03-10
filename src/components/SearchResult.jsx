import { useContext, useState } from "react";
import InputContext from "../context/InputContext";
import ListItem from "./ListItem";
// import "../App.css"
const SearchResult = () => {
  const [mealSelect, setMealSelect] = useState({});
  const contextInput = useContext(InputContext);
  const [ingrid, setIngrid] = useState([]);
  const [ingridValue, setIngridValue] = useState([]);
  const ingridSelect = (element) => {
    const temp = [];
    const temp2 = [];
    for (let i = 1; i <= 20; i++) {
      let str = `strIngredient${i}`;
      let strValue = `strMeasure${i}`;
      if (element[str] !== "") {
        temp.push(element[str]);
        temp2.push(element[strValue]);
      }
    }
    setIngrid(temp);
    setIngridValue(temp2);
  };
  return (
    <div>
      {<h2>Searching for {contextInput.keyword}</h2>}
      <div className="meals" style={{ display: "flex", flexWrap: "wrap" }}>
        {contextInput.ingridients ? (
          contextInput.ingridients.map((element) => {
            return element ? (
              <div
                key={element.idMeal}
                className="meal"
                style={{ display: "grid", margin: "10px", borderRadius: "5px" }}
                onClick={() => {
                      setMealSelect(element);
                      ingridSelect(element);
                    }}
              >
                <img
                  src={element.strMealThumb}
                  alt="#"
                  style={{ width: "180px", height: "180px" }}
                />
                <div className="meal-info">
                  <h3>
                    {element.strMeal}
                  </h3>
                </div>
              </div>
            ) : (
              <></>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <div className="meal-description">
        {Object.keys(mealSelect).length !== 0 ? (
          <div className="single-meal">
            <h1>{mealSelect.strMeal}</h1>
            <img
              src={mealSelect.strMealThumb}
              alt="#"
              style={{ width: "180px", height: "180px" }}
            />
            <div className="single-meal-info">
              <p>{mealSelect.strCategory}</p>
              <p>{mealSelect.strArea}</p>
            </div>
            <div className="main">
              <p>{mealSelect.strInstructions}</p>
              <h2>Ingredients</h2>
              <ul>
                {ingrid.map((ele, index) => {
                  return (
                      <ListItem ele={ele} eleVal={ingridValue[index]}/>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
