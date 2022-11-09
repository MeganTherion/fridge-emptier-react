import { useEffect, useState } from "react";
import axios from "axios";
import RecipesResult from "../RecipesResult";

const getRecipes = async function (ingredients, restrictions) {
  console.log("getRecipes restrictions", restrictions)
  const options = {
    url: "https://api.spoonacular.com/recipes/complexSearch",
    params: {
      includeIngredients: ingredients.toString(),
      diet: restrictions.toString(),
      number: "5",
      ignorePantry: "true",
      apiKey: "5ae1bff34b154844871d284080a1e961",
    },
  };

  
try {
  const {data: response} = await axios.request(options)
  console.log("response", response)
  if (response.totalResults === 0)
  return (<div><p>"error"</p></div>)
  else return response;
}
catch (error) {
  console.log(error)
}
};

export default getRecipes;
