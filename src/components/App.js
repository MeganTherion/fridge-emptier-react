// import useRecipes from "./helper_functions/getRecipes";
import RecipesResult from "./RecipesResult";
import Form from "./Form";
import "./App.css";

function App() {
  // const { result } = useRecipes();
  return (
    <div className="App">
      <header className="App-header">
        <header title="fridgeEmptier 🥕🥦🧅">🥕🥦🧅</header>
        <h1>what's in your fridge?</h1>
        <body>
        {/* should render "form" component here instead */}
        <Form />
        {/* needs to actually wait for result here and send the ingredients */}
      
        </body>
      </header>
    </div>
  );
}

export default App;
