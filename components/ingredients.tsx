import React from 'react';

interface IngredientsProps {
  name: string
  availableIngredients: string[]
  ingredients: string[]
  setIngredients: any
}

interface IngredientRowProps {
  name: string
  selected: boolean
  setIngredient
  unsetIngredient
}

const IngredientRow = (props: IngredientRowProps) => {

  const toggleIngredient = () => {
    if (props.selected) 
      props.unsetIngredient() 
    else
      props.setIngredient() 
  }

  return (
    <li onClick={_ => toggleIngredient()}>
    {props.selected ? 'X': '-'} {props.name}
    </li>
  )
}

export const ChooseIngredients = (props: IngredientsProps) => {

  const ingredients = props
    .availableIngredients
    .map(x => ({
      name: x,
      selected: props.ingredients.some(y => y === x),
      setIngredient: () => {
        let newVal = [...ingredients, x]
        console.log(newVal)
        props.setIngredients(newVal)
      },
      unsetIngredient: () => {
        let list = [...props.ingredients]
        list.splice( list.indexOf(x), 1 )
        props.setIngredients(x)
        }
    }))
    .map(x => <IngredientRow {...x} />)

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