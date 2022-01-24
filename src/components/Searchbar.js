import { useHistory } from 'react-router-dom';
import { useState } from 'react';


// styles
import './Searchbar.css'


export default function Searchbar() {
    const [term, setTerm] = useState('')
    const history = useHistory()
    const handleSubmit = (e) => {
        // Stops page refreshing when we submit a form
        e.preventDefault()

        // Redirect user
        // ? for query p = (the term that the person is searching for )
        history.push(`/search?q=${term}`)
    }
  return (
  <div className="searchbar">
      <form onSubmit={handleSubmit}>
          {/* Id on INPUT matches with htmlfor  */}
          <label htmlFor="search">Search:</label>
          <input 
          type="text" 
          id="search"
        //   this will track the value and store it inside of the term state
          onChange={(e) => setTerm(e.target.value)}
          required
          />
      </form>
  </div>
  );
}
