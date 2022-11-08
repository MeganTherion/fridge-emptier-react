function RecipesResult(props) {
  const { result } = props;
  const loadingGifUrl = 'https://media.giphy.com/media/7EhiahshVQJMWngK3U/giphy.gif';
  
  return (
    result ? 
    <div className="recipes-result-container">
       <img src={result.image} alt="recipe here"/>
       {result}
    </div>
    :
    <div className="looking-container">
      <img src={loadingGifUrl} alt="looking here" />
    </div>
  );
}
export default RecipesResult;