import { useContext, useEffect, useState } from "react";
import InputContext from "../context/InputContext";

const ShuffleResult = () => {
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
  useEffect(()=>{
    ingridSelect(contextInput.ingridients[0])
  },contextInput.ingridients);
  return <>
    <div className="meal-description">
        {Object.keys(contextInput.ingridients[0]).length !== 0 ? (
          <div className="single-meal">
            <h1>{contextInput.ingridients[0].strMeal}</h1>
            <img
              src={contextInput.ingridients[0].strMealThumb}
              alt="#"
              style={{ width: "180px", height: "180px" }}
            />
            <div className="single-meal-info">
              <p>{contextInput.ingridients[0].strCategory}</p>
              <p>{contextInput.ingridients[0].strArea}</p>
            </div>
            <div className="main">
              <p>{contextInput.ingridients[0].strInstructions}</p>
              <h2>Ingredients</h2>
              <ul>
                {ingrid.map((ele, index) => {
                  return (
                    <li key={index}>
                      {ele} - {ingridValue[index]}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
  </>;
};

export default ShuffleResult;
