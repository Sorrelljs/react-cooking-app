// styles 
import './Home.css'


// hooks 
import   useFetch  from '../../hooks/useFetch'

// components 
import RecipeList from '../../components/RecipeList'


export default function Home() {
    const {data, isPending, error } = useFetch('http://localhost:3000/recipes')

    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>} 
            {isPending && <p className='loading'>Loading...</p>}
            {/* Only map through the data if there is data. It will not work if you just map out the data. initial value is null */}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}


