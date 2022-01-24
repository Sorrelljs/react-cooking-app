import './Receipe.css'

// hooks
import useFetch from '../../hooks/useFetch'
import { useParams } from "react-router-dom";



export default function Receipe() {
    // extract route parameter inside this component
    // then fetch data for that recipe using useFetch hook
    // output the error, loading and finally once you have data, output the title for each recipe
    const { id } = useParams();
    const url = 'http://localhost:3000/recipes/' + id
    const { data: recipe, isPending, error } = useFetch(url)

    
    return (
        <div className='recipe'>
            {isPending && <h1>Loading...</h1>}   
            {error && <p>{error}</p>}
            {recipe && (
                <>
            <h2 className='page-title'>{recipe.title}</h2>
            <p>Takes {recipe.cookingTime} to cook.</p>
                <ul>
                    {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                </ul>
            <p className='method'>{recipe.method}</p>

               </>
            )}
                    {/* if the data.recipe.title matches the id do this */}
        </div>
    )
}
