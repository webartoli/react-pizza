import React, {useState, useEffect } from 'react';
import { Link,  } from "react-router-dom";
import {ingredients as getAvailableIngredients} from '../services'

interface IngredientsProps {
  name: string
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

  const [ingredients, setIngredients] = useState({
    loading: true,
    data: [],
    error: null
  })

  useEffect(() => {
    const fetchData = async () => getAvailableIngredients()
      .then(data => setIngredients({ loading: false, data: data, error: null}))
      .catch(err => setIngredients({loading: false, data: null, error: err}))
    
    fetchData()
  }, [])

  const {loading, error, data} = ingredients

  const rows = data
    .map(x => <IngredientRow key={x} name={x} selectedIngredients={props.selectedIngredients}  />)

 return (
  <div>
    <h2>Ciao {props.name}</h2>
    <span>Scegli gli ingredienti...</span>
    <ul>
      { loading ? 'loading' : rows }
    </ul>
    <Link to="/who">Indietro</Link>
    <Link to="/summary">Avanti</Link>
  </div>
)
}