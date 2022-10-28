import useRecipes from "../hooks/getRecipes";
import RecipesResult from "./RecipesResult";
import Form from "./Form";
import './App.css';

function App() {
  const {result} = useRecipes();
  return (
    <div className="App">
      <header className="App-header">
       
     <div>
      <header title="fridgeEmptier 🥕🥦🧅" />
      <h1>what's in your fridge?</h1>
      {/* should render "form" component here instead */}
      <Form />
    </div>
    {/* needs to actually wait for result here and send the ingredients */}
<RecipesResult />
      </header>
    </div>
  );
}

export default App;
