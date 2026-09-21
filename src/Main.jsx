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
     {ingredients.length > 0 && <section>
    <h2>Ingredients on hand:</h2>
    <ul className="ingredients-list" aria-live="polite">
      
    </ul>
      {ingredients.length > 3 && <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button>Get a recipe</button>
      </div>}
</section>}
    </main>
  )
}