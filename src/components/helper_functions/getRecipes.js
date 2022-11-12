import axios from "axios";
import Error from "../Error";

const getRecipes = async function (ingredients, restrictions) {
  console.log("getRecipes restrictions", restrictions);
  

  const restrictionsString = restrictions.map((r) => `&health=${r}`).join("");
  ingredients.splice(ingredients.length - 1, 0, `%2C`);
  const ingredientsString = ingredients.join("");

  const options = `https://api.edamam.com/search?q=${ingredientsString}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}${restrictionsString}`;
  ///// make API call
  try {
    const { data: response } = await axios.request(options);
    if (response.count === 0) {
      return <Error />;
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getRecipes;
