import { useEffect, useState } from "react";
import axios from "axios";
import RecipesResult from "../RecipesResult";

const getRecipes = async function (ingredients, restrictions) {
  console.log("getRecipes restrictions", restrictions)
  const options = {
    url: "https://api.spoonacular.com/recipes/complexSearch",
    params: {
      diet: restrictions.toString(),
      ingredients: ingredients.toString(),
      number: "5",
      ignorePantry: "true",
      ranking: "1",
      apiKey: "5ae1bff34b154844871d284080a1e961",
    },
  };

  console.log("props", options);
try {
  const {data: response} = await axios.request(options)
  return response
}
catch (error) {
  console.log(error)
}
};

export default getRecipes;
