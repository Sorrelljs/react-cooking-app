import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

// Styles 
import './Search.css'

// components
import RecipeList from '../../components/RecipeList'

export default function Search() {

    //  ***** USING PARAMETERS **** //

    //  ?q= what ever the user has searched for. this returns a object 
    const queryString = useLocation().search
    // this creates a new url search params object based on what the user typed in
    //  THIS BASICALLY ALLOWS US TO GET SPECIFIC PARAMETERS 
    const queryParams = new URLSearchParams(queryString)
    // WHATEVER THE PARAMETER IS CALLED ( IN OUR CASE Q) WE GET EVERYTHING AFTER IT (THE USERS INPUT)
    const query = queryParams.get('q')

    const url = 'http://localhost:3000/recipes?q=' + query
    const {error, isPending, data} = useFetch(url)
    
    return (
        <div>
            <h2 className="page-title">Recipes including "{query}"</h2>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}
