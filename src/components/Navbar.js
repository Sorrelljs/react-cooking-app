// imports
import React from 'react';
import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

// Pages 
import Searchbar from './Searchbar';

export default function NavBar() {
  return ( 
  <div className="navbar">
    <nav>
        <Link to="/" className='brand'>
            <h1>Cooking Ninjas</h1>
        </Link>
        <Searchbar/>
        <Link to="/create">Create Recipe</Link>

    </nav>
  </div>
  );
}
