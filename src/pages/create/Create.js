
// styles 
import './Create.css'

// hooks
import { useEffect, useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useHistory } from 'react-router-dom'

export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([])
    const ingredientInput = useRef(null)
    const history = useHistory()

    const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')


    // Handle Form Submit
    const handleSubmit = (e) => {

        e.preventDefault()
        postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes'})
 
    }

//  Handle Adding Ingredients
    const handleAdd = (e) => {
        e.preventDefault()
        const ing = newIngredient.trim()

        if(ing && !ingredients.includes(ing)){
            setIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setNewIngredient('')
        ingredientInput.current.focus()
    }

    // redirect the user when we get a data response
    // THIS HOOK FIRES ONCE INITIALLY WHEN WE LOAD THE PAGE THEN ON EVERY TIME DEPENCY CHANGES
    useEffect(() => {
        // we need to use if statement otherwise it will check as soon as user lands on page and will redirect
        if(data) {
            history.push('/')
        }
    },[data])

    return (
        <div className='create'>
            <h2 className='page-title'>Add a new recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe Title:</span>
                    <input 
                    type="text" 
                    // the onChange event fires whenever the value inside the input changes
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                    />
                </label>


                <label>
                    <span>Recipe Ingredients :</span>
                    <div className="ingredients">
                        <input 
                        type="text"
                        onChange={(e) => setNewIngredient(e.target.value)}
                        value={newIngredient} />

                        <button 
                        className="btn"
                        onClick={handleAdd}
                        ref={ingredientInput}
                        >Add</button>
                    </div>
                </label>
                    <p>Current Ingredients: {ingredients.map(i => <em key={i}>{i},</em>)}</p>

                <label>
                    <span>Recipe Method: </span>
                    <textarea
                    onChange={(e) => setMethod(e.target.value)} 
                    value={method}
                    required
                    />
                </label>

                <label>
                    <span>Cooking Time: </span>
                    <input 
                    type="number"
                    onChange={(e) => setCookingTime(e.target.value)} 
                    value={cookingTime}
                    required
                    />

                </label>

                <button className="button">Submit</button>
            </form>
        </div>
    )
}
