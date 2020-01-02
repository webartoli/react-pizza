import React from 'react';

interface IngredientsProps {
  name: string
  availableIngredients: string[]
  ingredients: string[]
  setIngredients: any
}

interface IngredientRowProps {
  key: any
  name: string
  ingredients: string[]
  setIngredients
}

const IngredientRow = (props: IngredientRowProps) => {

  const selected = props.ingredients.some(y => y === props.name)

  const add = () => props.setIngredients([...props.ingredients, props.name]);

  const remove = () => {
    let list = [...props.ingredients]
    list.splice( list.indexOf(props.name), 1 )
    props.setIngredients(list)
  }

  const toggle = selected ? remove : add;

  return (
    <li onClick={toggle}>
    {selected ? 'X': '-'} {props.name}
    </li>
  )
}

export const ChooseIngredients = (props: IngredientsProps) => {

  const ingredients = props
    .availableIngredients
    .map(x => <IngredientRow key={x} name={x} ingredients={props.ingredients} setIngredients={props.setIngredients}  />)

 return (
  <div>
    <h2>Ciao {props.name}</h2>
    <span>Scegli gli ingredienti...</span>
    <ul>
      { ingredients }
    </ul>
    <button>Avanti ></button>
  </div>
)
}