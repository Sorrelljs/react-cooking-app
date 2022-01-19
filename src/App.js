import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Styles
import './App.css'

// Page Components 
import Create from './pages/create/Create'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
       <Route exact path="/">
          <Home />
       </Route>
       <Route path="/create">
          <Create />
       </Route>
       <Route path="/search">
          <Search />
       </Route>
       <Route path="/recipes/:id">
          <Recipe />
       </Route>
     </Switch>
     </BrowserRouter>
      
    </div>
  );
}

export default App
