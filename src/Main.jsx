import React from "react"

export default function Main(){
  const [ingredients,setingredients] = React.useState([])
  const ingredientElements = ingredients.map(ingredient=>
    <li key={ingredient}>{ingredient}</li>
    
  )
  function submitted(formData){
    const newingredient = formData.get("ingredient")
    setingredients(previngredients=>[...previngredients,newingredient])
  }



  return(
    <main>
      <form action={submitted}
      className="add-ingredient-form">
        <input 
        aria-label = 'Add ingredient'
        type="text" 
        placeholder = "e.g oregano" 
        name = 'ingredient'/>
        <button>+ Add ingredient</button>
      </form>
      <ul>
        {ingredientElements}
      </ul>
    </main>
  )
}