import React from 'react';

interface IngredientsProps {
  name: string
  availableIngredients: string[]
  ingredients: string[]
  setIngredients: any
}

export const ChooseIngredients = (props: IngredientsProps) => {

  const ingredients = props
    .availableIngredients
    .map(x => ({
      name: x,
      selected: props.ingredients.some(y => y === x)
    }))

  const toggleIngredient = (ingredient: string) => {
    const selected = props.ingredients.some(y => y === ingredient)

  }

 return (
  <div>
    <h2>Ciao {props.name}</h2>
    <span>Scegli gli ingredienti...</span>
    <ul>
      { ingredients.map(x => <li onClick={_ => toggleIngredient(x.name)}>{x.selected ? 'X': '-'} {x.name}</li>) }
    </ul>
    <button>Avanti ></button>
  </div>
)
}