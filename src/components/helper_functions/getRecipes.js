import axios from "axios";
import Error from "../Error";

const getRecipes = async function (ingredients, restrictions) {
  console.log("getRecipes restrictions", restrictions);
  const APP_ID = "283a66f8";
  const APP_KEY = "e205820388ed446f3ef3dbc0a4667959";

  const restrictionsString = restrictions.map((r) => `&health=${r}`).join("");
  ingredients.splice(ingredients.length - 1, 0, `%2C`);
  const ingredientsString = ingredients.join("");

  const options = `https://api.edamam.com/search?q=${ingredientsString}&app_id=${APP_ID}&app_key=${APP_KEY}${restrictionsString}`;
  ///// make API call
  try {
    const { data: response } = await axios.request(options);
    // console.log("response", response.hits[0].recipe)
    console.log("response", response);
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
