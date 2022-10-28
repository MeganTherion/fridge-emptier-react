import useRecipes from "../hooks/getRecipes";
import RecipesResult from "./RecipesResult";

function App() {

  const {result} = useRecipes();
  return (
    <div className="App">
      <header className="App-header">
       
     <div>
      <header title="fridgeEmptier 🥕🥦🧅" />
      <h1>what's in your fridge?</h1>
      {/* should render "input" component here instead */}
      {/* <form action="submit"> */}
        <input id="fridge-input-1" type="text"></input><br></br>
        <input id="fridge-input-1" type="text"></input><br></br>
        <input id="fridge-input-1" type="text"></input><br></br>
        {/* add more fields functionality here */}
      {/* </form> */}

      <h1>any restrictions?</h1>
      {/* should render "restrictions" component here intead */}
<div id="restrictions">
      <input type="checkbox" id="gf" name="gf" value="gluten-free"/>
      <label for="gf">gluten-free</label>
      <input type="checkbox" id="vegan" name="vegan" value="vegan"/>
      <label for="vegan">vegan</label>
      <input type="checkbox" id="keto" name="keto" value="keto"/>
      <label for="keto">keto</label>
      {/* <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul> */}
</div>
      <button type="submit" onSubmit={useRecipes()}>empty my fridge</button>
      {/* <div>{options}</div> */}
    </div>
    {/* needs to actually wait for result here and send the ingredients */}
<RecipesResult result={result} />
      </header>
    </div>
  );
}

export default App;
