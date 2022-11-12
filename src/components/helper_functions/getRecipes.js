import { useEffect, useState } from "react";
import axios from "axios";
import RecipesResult from "../RecipesResult";
import Error from "../Error";

const getRecipes = async function (ingredients, restrictions) {
  console.log("getRecipes restrictions", restrictions);
  const APP_ID="283a66f8"
  const APP_KEY="e205820388ed446f3ef3dbc0a4667959"
  const searchString = '';

    const restrictionsString = restrictions.map(r => `&health=${r}`).join('')
    ingredients.splice(ingredients.length-1, 0, `%2C`)
    const ingredientsString = ingredients.join('')
    console.log("searchstring", ingredientsString)
    // return restrictionsString, ingredientsString;

  
  const options = 
   `https://api.edamam.com/search?q=${ingredientsString}&app_id=${APP_ID}&app_key=${APP_KEY}${restrictionsString}`
    // url: "https://api.edamam.com/api/recipes/v2",
    // params: {
    //   type: "public",
    //   app_id: ,
    //   app_key: ,
    //   q: ingredients.toString(),
    //   health: `${restrictions[0].toString()}&health=${restrictions[1].toString()}`
    
  // };
  ///add HEALTH parameter:
  // if (restrictions.length > 0) {
  //   restrictions.map(r => options.params.health=r)
  // // options.params.health = newArr.join('');
  //   }

    // 
///// make API call
  try {
    const { data: response } = await axios.request(options)
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
