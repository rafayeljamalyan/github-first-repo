import './css/App.css';
import React, { Component  } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom'; 
import Index from './pages/Index';
import About from './pages/About';
import Forms from './pages/Forms';
import { routes } from "./routes";

export default class App extends Component {
   

  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <ul>
              <li><NavLink activeClassName="shlor" exact to="/">Home</NavLink></li>
              <li><NavLink activeClassName="shlor" exact to="/about">  About </NavLink> </li>
              <li><NavLink activeClassName="shlor" exact to="/forms">  Forms </NavLink> </li>
            </ul>
          </nav>
          <Switch>

            {
              routes.map( (route,i) => (
                <Route 
                  key={i}
                  exact={ route.isExact } 
                  path={route.path} 
                  component={route.component} />
              ))
            }
            {/* <Route exact path="/" component={Index} />
            <Route exact path="/about" component={About} />
            <Route exact path="/forms" component={Forms} /> */}

            <Redirect from="/index" to="/" />
          </Switch>
        </Router>
      </div>
    )
  }
}

