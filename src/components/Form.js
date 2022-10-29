import useRecipes from "../hooks/getRecipes";
import {useState} from 'react';


function Form() {
  const [inputFields, setInputFields] = useState([{}])
  const dataArray = [];
const handleFormChange = (index, event) => {
  
 const data = [...inputFields];
 data[index][event.target.name] = event.target.value;
 setInputFields(data);

}

const addFields = (e) => {
  e.preventDefault();
  const newfield = { ingredient:'' }
  setInputFields([...inputFields, newfield])
}

const removeFields = (e, index) => {
  e.preventDefault();
  const data = [...inputFields];
  data.splice(index, 1)
  setInputFields(data)
}
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(JSON.stringify(formValues));
  // }

console.log("ingredients", dataArray)
  return (
    // onSubmit={handleSubmit}
<form action="submit" >
    {inputFields.map((input, index) => {
      dataArray.push(input.ingredient)
      return (
        <div key={index}>
          <input 
          type="text"
          name='ingredient'
          placeholder='Ingredient'
          value={input.name}
          onChange={event => handleFormChange(index, event)}
        />
        </div>
      )
    })}
    <div id="buttons">
    <img id="add-button" src="../favicon-32x32.png" onClick={addFields}>
      </img>
      <img id="remove-button" src="../favicon2-32x32.png" onClick={(index) => removeFields(index)}></img>
    {/* <input id="fridge-input-1" name="ingredient" type="text"></input><br></br>
    <input id="fridge-input-1" type="text"></input><br></br>
    <input id="fridge-input-1" type="text"></input><br></br> */}
    {/* add more fields functionality here */}
        {/* <br></br> */}
        {/* <input id="fridge-input-2" type="text"></input><br></br>
        <input id="fridge-input-3" type="text"></input><br></br> */}
        {/* add more fields functionality here */}
        {/* <button className="button-add" type="button" onClick={() => addFormFields()}>another one</button> */}
      
        </div>
      <h1>any restrictions?</h1>
      
<div id="restrictions">
      <input type="checkbox" id="gf" name="gf" value="gluten-free"/>
      <label for="gf">gluten-free</label>
      <input type="checkbox" id="vegan" name="vegan" value="vegan"/>
      <label for="vegan">vegan</label>
      <input type="checkbox" id="keto" name="keto" value="keto"/>
      <label for="keto">keto</label>
    
</div>
{/* onClick={useRecipes(inputFields)} */}
      <button className="button-submit" type="submit" >empty my fridge</button>
      {/* <div>{options}</div> */}
      </form>
  )
}

export default Form;