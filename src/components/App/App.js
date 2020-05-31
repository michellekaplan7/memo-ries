import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Landing from "../Landing/Landing";
import Header from "../Header/Header";
import DestinationDetails from "../DestinationDetails/DestinationDetails";
import DestinationsContainer from "../DestinationsContainer/DestinationsContainer";

const App = () => {
  const [selectedDestination, setSelectedDestination] = useState({});
  return (
    <main className="App">
      <Switch>
        <Route
          path="/destinations/:destinationName"
          render={({ match }) => {
            return (
              <div>
                <Header />
                <Link to="/destinations">
                  <p>destinations</p>
                </Link>{" "}
                > <p>{match.params.destinationName}</p>
                <div className="destination-details-container">
                  <DestinationDetails destination={selectedDestination} />
                </div>
              </div>
            );
          }}
        />

        <Route
          exact
          path="/destinations"
          render={() => {
            return (
              <div>
                <Header />
                <p>destinations</p>
                <DestinationsContainer
                  setSelectedDestination={setSelectedDestination}
                />
              </div>
            );
          }}
        />

        <Route
          exact
          path="/"
          render={() => {
            return (
                <Landing />
            );
          }}
        />
      </Switch>
    </main>
  );
};

export default App;
