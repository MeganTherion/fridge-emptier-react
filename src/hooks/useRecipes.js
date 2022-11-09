import { useState, useEffect } from 'react';
import axios from 'axios';

export default async function useRecipes(props) {
  const [result, setResult] = useState('');
  const options = {
    url: "https://api.spoonacular.com/recipes/findByIngredients",
    params: {
      ingredients: props.toString(),
      number: "5",
      ignorePantry: "true",
      ranking: "1",
      apiKey: "5ae1bff34b154844871d284080a1e961",
    },
  };

  useEffect(() => {
    const changeImgInterval = setInterval(() => {
      try {
       axios.request(options)
        .then(res => setResult(res.data[0]))
        
      }
      catch (error) {
        console.log(error)
      }
    }, 2000)

    const cleanUp = () => clearInterval(changeImgInterval)

    return cleanUp;
  }, []);
  
  return {result}
}