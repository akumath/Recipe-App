import React from 'react';
import './recipe.css'

const Recipe = (props) => {
	console.log(props.recipeInfo)
	return(
		<div className="recipe">
			<h1>{props.recipeInfo.label}</h1>
			<ol>
				{props.recipeInfo.ingredients.map(ingredient => (
					<li>{ingredient.text}</li>
				))}
			</ol>
			<p>Calories: {props.recipeInfo.calories.toFixed()}</p>
			<img class="dish-image" src={props.recipeInfo.image} alt="" />
		</div>
	)
}
export default Recipe;