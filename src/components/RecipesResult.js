import "./RecipesResult.css"
function RecipesResult(props) {
  const result  = props;
  console.log("result!", props)
  const loadingGifUrl = 'https://media.giphy.com/media/7EhiahshVQJMWngK3U/giphy.gif';
if (!result) {
  return (
    <div className="recipes-result-container">
    <p>Hmm...we cant find anything. Try adding more or different ingredients, or removing restrictions</p>
    </div>
  )
} else {
  return (

    <div className="recipes-result-container">
      {/* <a href=`https://spoonacular.com/recipes/findByIngredients?${props}}` */}
     {result.title}<br></br>
       <img id="result" src={result.image}></img>
    </div>
    
  );
}
}
export default RecipesResult;