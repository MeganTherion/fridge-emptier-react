import getRecipes from "./helper_functions/getRecipes";
import { useEffect, useState } from "react";
import RecipesResult from "./RecipesResult";

function Form() {
  const dataArray = []; //holds ingredients from user input
  const [inputFields, setInputFields] = useState([{}]);
  const [restrictions, setRestrictions] = useState([]);
  const [recipes, setRecipes] = useState("");
  const loadingGifUrl =
    "https://media.giphy.com/media/7EhiahshVQJMWngK3U/giphy.gif";

  const handleFormChange = (index, event) => {
    const data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const handleRestrictionsChange = (e) => {
    const checked = e.target.checked;
    let value = e.target.value;

    if (checked) {
      const newRestrictions = [...restrictions, e.target.value];

      setRestrictions(newRestrictions);
    } else {
      const newRestrictions = [
        ...restrictions.filter((prev) => prev !== e.target.value),
      ];

      console.log("**unchecked", newRestrictions);
      setRestrictions(newRestrictions);
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    getRecipes(dataArray, restrictions)
      .then((data) => {
        setRecipes(data.results[0]);
        console.log("data!", recipes);
      })
      .catch((err) => console.log(err));
  };

  const addFields = (e) => {
    e.preventDefault();
    const newfield = {};
    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (e, index) => {
    console.log("eee", e);
    e.preventDefault();
    const data = [...inputFields];
    data.splice(data.length - 1, 1);
    setInputFields(data);
  };

  console.log("ingredients", dataArray);
  console.log("recipes!", recipes);

  useEffect(() => {
    console.log("updating restrictions", restrictions);
  }, [restrictions]);

  const dietStuff = [
    { id: "gluten-free" },
    { id: "dairy-free" },
    { id: "vegan" },
    { id: "vegetarian" },
    { id: "keto" },
  ];
  return (
    // onSubmit={handleSubmit}
    <form className="submit" action="submit" onSubmit={handleSubmit}>
      {inputFields.map((input, index) => {
        dataArray.push(input.ingredient);
        return (
          <div className="ingredient" key={index}>
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
        <button
          id="add-button"
          // src="../favicon-32x32.png"
          onClick={addFields}
        >+</button>     

        <button
          id="remove-button"
          // src="../favicon2-32x32.png"
          onClick={(index) => removeFields(index)}
        >-</button>
      </div>
      <h1>any restrictions?</h1>

      <div id="restrictions">
        {dietStuff.map((d) => {
          return (
            <div id="checkbox">
              <input
                type="checkbox"
                edge="end"
                onChange={(e) => handleRestrictionsChange(e)}
                value={d.id}
              />
              <label for={d.id}>{d.id}</label>
            </div>
          );
        })}
      </div>

      <button className="submit" type="submit">
        empty my fridge
      </button>
      <div className="recipes-result-container">
        {recipes ? (
          <RecipesResult {...recipes} />
        ) : (
          <img id="looking" src={loadingGifUrl} />
        )}
      </div>
    </form>
  );
}

export default Form;
