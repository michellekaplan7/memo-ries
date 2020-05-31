import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Landing from "../Landing/Landing";
import Header from "../Header/Header";
import DestinationDetails from "../DestinationDetails/DestinationDetails";
import DestinationsContainer from "../DestinationsContainer/DestinationsContainer";

const App = () => { 
  const [destinations, setDestinations] = useState(
    [{
          destination: 'Denver',
          destinationFullName: 'Denver',
          id: 1,
          recordings: [],
        },
        {
          destination: 'Aspen',
          destinationFullName: 'Aspen',
          id: 2,
          recordings: [],
        },
        {
          destination: 'FoCo',
          destinationFullName: 'Fort Collins',
          id: 3,
          recordings: [],
        },
        {
          destination: 'RMNP',
          destinationFullName: 'Rocky Mountain National Park',
          id: 4,
          recordings: [],
        }]
  )
        
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
                <Link to={{
                  pathname: "/destinations",
                  recordings: selectedDestination.recordings
                  }}>
                  <p>destinations</p>
                </Link>{" "}
                > <p>{match.params.destinationName}</p>
                <div className="destination-details-container">
                  <DestinationDetails
                   selectedDestination={selectedDestination}
                   setDestinations={setDestinations}
                   destinations={destinations}
                 />
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
                  destinations={destinations}
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
