function RecipesResult(props) {
  const { result } = props;
  const loadingGifUrl = 'https://raw.githubusercontent.com/gist/Chuncheonian/0b458eb00f72d648e65d69ab08ca16b8/raw/91dfc8ec23b03cae760d6635d397aaf879f51c16/shiba.gif';
  
  return (
    <div className="recipes-result-container">
       <img src={ result ? result : loadingGifUrl } alt="recipe here"/>
    </div>
  );
}
export default RecipesResult;