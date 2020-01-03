import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { WhoAreYou } from './components/who';
import { Summary, Confirm } from './components/summary';
import { ChooseIngredients } from './components/ingredients'
import * as services from './services'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  NoMatch
} from "react-router-dom";

interface AppProps { }
interface AppState {
  name: string;
}

export default function App() {

  const defaultIngredients = ['Pomodoro', 'Mozzarella']

  let [name, setName] = useState('')
  let selectedIngredients = useState<string[]>(defaultIngredients)
  let [ingredients, setIngredients] = selectedIngredients

  const resetIngredients = () => {
    setName('')
    setIngredients(defaultIngredients)
  }

  return (
    <Router>
      <h1>Pizza BHO</h1>
      <div>
        <Switch>
          <Route exact path="/who"  >
            <WhoAreYou name={name} setName={setName} /> 
          </Route>
           <Route exact path="/compose">
            {name 
            ? <ChooseIngredients name={name} selectedIngredients={selectedIngredients} /> 
            : <Redirect to="/who" />}
          </Route>
          <Route exact path="/summary">
            {ingredients 
            ? <Summary name={name} ingredients={ingredients} />
            : <Redirect to="/compose" />}
          </Route>
          <Route exact path="/confirmed">
            {ingredients 
            ? <Confirm name={name} reset={resetIngredients} /> 
            : <Redirect to="/compose" />}
          </Route>
          <Redirect from="/" to="/who" />
        </Switch>
      </div>
    </Router>
  );
}

render(<App />, document.getElementById('root'));
