import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Landing from '../Landing/Landing'

function App() {
  return (
    <main className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Landing />}
        />
      </Switch>
    </main>
  );
}

export default App;
