import getRecipes from "./helper_functions/getRecipes";
import { useState } from "react";
import RecipesResult from "./RecipesResult";


function Form() {
  const [inputFields, setInputFields] = useState([{}]);
  const [recipes, setRecipes] = useState("");
  const dataArray = [];
  const handleFormChange = (index, event) => {
    const data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  let handleSubmit = async (e) => {
    e.preventDefault();
    getRecipes(dataArray)
   .then(data => {
    console.log("data!", data)
    setRecipes(data[0])
   })
   .catch(err => console.log(err))
  };

  // .then((res) => setRecipes(res.data[0]))
  // .then((res) => console.log("res", res.data))
  // .catch((err) => console.log(err));

  // };
  // console.log("props", options)

  const addFields = (e) => {
    e.preventDefault();
    const newfield = {};
    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (e, index) => {
    e.preventDefault();
    const data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  console.log("ingredients", dataArray);
  console.log("recipes!", recipes)
  return (
    // onSubmit={handleSubmit}
    <form className="submit" action="submit" onSubmit={handleSubmit}>
      {inputFields.map((input, index) => {
        dataArray.push(input.ingredient);
        return (
          <div key={index}>
            <input
              type="text"
              name="ingredient"
              placeholder="Ingredient"
              value={input.name}
              onChange={(event) => handleFormChange(index, event)}
            />
          </div>
        );
      })}
      <div id="buttons">
        <img
          id="add-button"
          src="../favicon-32x32.png"
          onClick={addFields}
        ></img>
        <img
          id="remove-button"
          src="../favicon2-32x32.png"
          onClick={(index) => removeFields(index)}
        ></img>
      </div>
      <h1>any restrictions?</h1>

      <div id="restrictions">
        <input type="checkbox" id="gf" name="gf" value="gluten-free" />
        <label for="gf">gluten-free</label>
        <input type="checkbox" id="vegan" name="vegan" value="vegan" />
        <label for="vegan">vegan</label>
        <input type="checkbox" id="keto" name="keto" value="keto" />
        <label for="keto">keto</label>
      </div>
      {/* onClick={useRecipes(inputFields)} */}
      <button className="submit" type="submit">
        empty my fridge
      </button>
      <div className="recipes-result-container">
      {recipes.title}<br></br>
       <img src={recipes.image} alt="recipe here"/>
       
       {/* {recipes} */}
    </div>
    </form>
  );
}

export default Form;
