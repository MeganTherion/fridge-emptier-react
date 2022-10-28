import useRecipes from "../hooks/getRecipes";

function Form() {
  return (
  <form action="submit">
        <input id="fridge-input-1" type="text"></input><br></br>
        <input id="fridge-input-1" type="text"></input><br></br>
        <input id="fridge-input-1" type="text"></input><br></br>
        {/* add more fields functionality here */}
      

      <h1>any restrictions?</h1>
      
<div id="restrictions">
      <input type="checkbox" id="gf" name="gf" value="gluten-free"/>
      <label for="gf">gluten-free</label>
      <input type="checkbox" id="vegan" name="vegan" value="vegan"/>
      <label for="vegan">vegan</label>
      <input type="checkbox" id="keto" name="keto" value="keto"/>
      <label for="keto">keto</label>
    
</div>
      <button type="submit" onClick={useRecipes}>empty my fridge</button>
      {/* <div>{options}</div> */}
      </form>
  )
}

export default Form;