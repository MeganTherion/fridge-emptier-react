import "./RecipesResult.css";
import Error from "./Error.js";
function RecipesResult(props) {
  const result = props;
  console.log("result!", result);
  if (!result)
  return (
    <div className="recipes-result-container">
        <p>
          "Hmm...we cant find anything. Try adding more or different ingredients,
          or removing restrictions"
        </p>
      </div>
  );
    return (
      <div className="recipes-result-container">
        <div className="recipes-result--title">
        {result.title}
        </div>
        {/* <br></br> */}
        <img id="result" src={result.image}></img>
      </div>
    );

  
}
export default RecipesResult;
