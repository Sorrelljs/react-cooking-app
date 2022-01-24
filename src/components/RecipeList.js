import React from 'react';
import { Link } from 'react-router-dom';

//styles
import './RecipeList.css'
// recipes is the data being passed as a prop to this component so we can use it here

export default function RecipeList({ recipes }) {

    //  RETURNING A DIFFERENT TEMPLATE
    if( recipes.length === 0){

        return <div className="error">No Recipes to Load...</div>
    }

  return (
  <div className='recipe-list'>
      {recipes.map(recipe => (
          <div key={recipe.id} className='card'>
              <h3>{recipe.title}</h3>
              <p>{recipe.cookingTime} to make</p>
              <div>{recipe.method.substring(0, 100)}...</div>
              {/* below we use the Link and template literal to take you to the correct recipe path
                  we use the id as the route param */}
              <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
          </div>
      ))}


  </div>);
}
