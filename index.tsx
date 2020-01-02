import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { WhoAreYou } from './components/who';
import { ChooseIngredients } from './components/ingredients'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

interface AppProps { }
interface AppState {
  name: string;
}




export default function App() {

  let [name, setName] = useState('')
  let selectedIngredients = useState<string[]>([])

  let availableIngredients = [
    'Pomorodo', 'Mozzarella', 'Capperi', 'Acciughe'
  ]

  return (
    <Router>
      <div>
        <Nav />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/old">
            <App2 />
          </Route>
          <Route path="/who">
            <WhoAreYou name={name} setName={setName} />
          </Route>
           <Route path="/ingredients">
            <ChooseIngredients name={name} availableIngredients= {availableIngredients} selectedIngredients={selectedIngredients} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

function Nav() {
  return  <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/old">Old App</Link>
            </li>
            <li>
              <Link to="/who">Step 1</Link>
            </li>
          </ul>
        </nav>;
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class App2 extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
