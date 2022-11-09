import { useState, useEffect } from "react";
import axios from "axios";

export default async function useRecipes(ingredients, restrictions) {
  const [result, setResult] = useState("");
  const options = {
    url: "https://api.spoonacular.com/recipes/complexSearch",
    params: {
      diet: restrictions.toString(),
      includeIngredients: ingredients.toString(),
      number: "5",
      ignorePantry: "true",
      ranking: "1",
      apiKey: "5ae1bff34b154844871d284080a1e961",
    },
  };

  useEffect(() => {
    const changeImgInterval = setInterval(() => {
      console.log("state", restrictions);
      try {
        axios.request(options).then((res) => setResult(res.data[0]));
      } catch (error) {
        console.log(error);
      }
    }, 2000);

    const cleanUp = () => clearInterval(changeImgInterval);

    return cleanUp;
  }, []);

  return { result };
}
