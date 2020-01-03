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

  let [name, setName] = useState('')
  let selectedIngredients = useState<string[]>([])

  const availableIngredients = services.availableIngredients()


  return (
    <Router>
      <h1>Pizza BHO</h1>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/who"  >
            <WhoAreYou name={name} setName={setName} />
          </Route>
          <Route path="/confirmed">
            <Confirm name={name} />
          </Route>
           <Route path="/compose">
            <ChooseIngredients name={name} availableIngredients={availableIngredients} selectedIngredients={selectedIngredients} />
          </Route>
          <Route path="/summary">
            <Summary name={name} ingredients={selectedIngredients[0]} />
          </Route>
          <Redirect from="/" to="/who" />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

render(<App />, document.getElementById('root'));
