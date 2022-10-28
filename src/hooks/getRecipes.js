import { useEffect, useState } from "react";
import axios from "axios";

function useRecipes(props) {
  const [result, setResult] = useState("");

  useEffect(() => {
    const options = {
      url: "https://api.spoonacular.com/recipes/findByIngredients",
      params: {
        ingredients: "apples,flour,sugar",
        number: "5",
        ignorePantry: "true",
        ranking: "1",
        apiKey: "5ae1bff34b154844871d284080a1e961",
      },
    };

    axios
      .request(options)
      .then((res) => setResult(res.data[0].image))
      .catch((err) => console.log(err));
  });
  return { result };
}

export default useRecipes;
