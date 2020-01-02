import React from 'react';

interface IngredientsProps {
  name: string
  availableIngredients: string[]
  selectedIngredients: [string[], React.Dispatch<React.SetStateAction<string[]>>]
}

interface IngredientRowProps {
  key: any
  name: string
  selectedIngredients: [string[], React.Dispatch<React.SetStateAction<string[]>>]
}

const IngredientRow = (props: IngredientRowProps) => {

  const [ingredients, setIngredients] = props.selectedIngredients

  const selected = ingredients.some(y => y === props.name)

  const add = () => setIngredients([...ingredients, props.name]);

  const remove = () => {
    let list = [...ingredients]
    list.splice( list.indexOf(props.name), 1 )
    setIngredients(list)
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
    .map(x => <IngredientRow key={x} name={x} selectedIngredients={props.selectedIngredients}  />)

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