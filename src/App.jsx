import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // Add new recipe to END of list
  const addRecipe = (newRecipe) => {
    setRecipes((currentRecipes) => [
      ...currentRecipes,
      newRecipe,
    ]);
  };

  // Delete recipe by index
  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>

      <RecipeList
        recipes={recipes}
        deleteRecipe={deleteRecipe}
      />

      <RecipeCreate
        addRecipe={addRecipe}
      />
    </div>
  );
}

export default App;