import React, {useState, useEffect} from 'react';
import Recipe from './components/recipe/Recipe';
import './App.css';
import Header from './components/header/Header';

// Function component also can maintain the state after the introduction of
// react hooks from react 16.8+ versions.
const App = () => {
  // maintain state using useState hook.
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  // Edamam.com provide dumy data
  // ID and Key is required to get the data
  const APP_ID = '8f2b17d1';
  const APP_KEY = '8ba75405973dd61f5266b6a86abc8cb1';
  const apiUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  // fetch data
  const getRecipes = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
    console.log(recipes)
  }

  // All side effects should be done in useEffect hook.
  // passing [query] so that DOM elements will render only when query parameter changes
  useEffect(() => {
    getRecipes()
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return(
    <React.Fragment>
      <Header />
      <div className="container">
        <form className="search-form" onSubmit={getSearch}>
          <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search for Receipe/Ingredient..."/>
          <button className="search-button btn btn-warning text-white" type="submit">Search</button>
        </form>
        <div className="recipes">
          {recipes.map(recipe =>(
              <Recipe recipeInfo={recipe.recipe} key={recipe.recipe.label}/>
            ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;
