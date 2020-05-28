import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Landing from '../Landing/Landing';
import Header from '../Header/Header';
import DestinationsContainer from '../DestinationsContainer/DestinationsContainer';

const App = () => {
  return (
    <main className="App">
      <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <Landing />
                </div>
              )
            }}
            />
          <Route
            exact
            path = "/destinations"
            render = {() => {
              return (
                <div>
                  <Header />
                  <p>destinations</p>
                    <DestinationsContainer />
                </div>
              );
            }}
            />
      </Switch>
    </main>
  );
}

export default App;

// <Link to = "/">
//   <p>destinations</p>
// </Link>
