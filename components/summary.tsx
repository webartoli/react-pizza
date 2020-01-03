import React, { useState} from 'react';
import { Link } from "react-router-dom";


interface Props {
  name: string
  ingredients: string[]
}

export const Summary = (props: Props) => {
  return (
  <div>
    <h2>La pizza di</h2>
    <h1>{props.name}</h1>
    <p>Ingredienti</p>
    <p>{props.ingredients.join(', ')}</p>
    <p>note:</p>
    <textarea></textarea>
    <Link to="/compose">Modifica gli ingredienti</Link>
    <Link to="/confirmed">Conferma</Link>
  </div>)
  }

export const Confirm = (props) => <div>
  <p>OK {props.name}, tutto bene</p>
  <p>Pizza registrata correttamente</p>
  <Link to="/who">Ordina un altra pizza</Link>
</div>