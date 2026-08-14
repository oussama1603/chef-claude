import React from "react"

export default function Main(){
  const [ingredients,setingredients] = React.useState([])
  const ingredientElements = ingredients.map(ingredient=>
    <li key={ingredient}>{ingredient}</li>
    
  )
  function submitted(event){

    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    setingredients(previngredient=>[...previngredient,newIngredient])
    
  }



  return(
    <main>
      <form onSubmit={submitted}
      className="add-ingredient-form">
        <input 
        aria-label = 'Add ingredient'
        type="text" 
        placeholder = "e.g oregano" 
        name = 'ingredient'/>
        <button>+ Add ingredient</button>
      </form>
      <ul>
        
      </ul>
    </main>
  )
}