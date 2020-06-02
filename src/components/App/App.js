import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Landing from "../Landing/Landing";
import Header from "../Header/Header";
import { Memories } from "../Memories/Memories";
import DestinationDetails from "../DestinationDetails/DestinationDetails";
import DestinationsContainer from "../DestinationsContainer/DestinationsContainer";

const App = () => {
  const [destinations, setDestinations] = useState([
    {
      destination: "Denver",
      destinationFullName: "Denver",
      id: 1,
      recordings: [],
    },
    {
      destination: "Aspen",
      destinationFullName: "Aspen",
      id: 2,
      recordings: [],
    },
    {
      destination: "FoCo",
      destinationFullName: "Fort Collins",
      id: 3,
      recordings: [],
    },
    {
      destination: "RMNP",
      destinationFullName: "Rocky Mountain National Park",
      id: 4,
      recordings: [],
    },
  ]);

  const [selectedDestination, setSelectedDestination] = useState({});

  return (
    <main className="App">
      <Switch>
        <Route
          path="/destinations/:destinationName"
          render={({ match }) => {
            return (
              <div className="destinationDetails">
                <Header />

                <div className="bread-crumb-container">
                  <Link className="breadCrumbLink" to="/destinations">
                    <p className="main-bread-crumb">destinations </p>
                  </Link>{" "}
                  <p className="main-bread-crumb">
                    > {match.params.destinationName}
                  </p>
                </div>

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
              <div className="destinationContainer">
                <Header />
                <div className="bread-crumb-container">
                  <p className="main-bread-crumb">destinations </p>
                </div>
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
          path="/memories"
          render={() => {
            return (
              <div className="memoriesContainer">
                <Header />
                <div className="bread-crumb-container">
                  <Link className="breadCrumbLink" to="/destinations">
                    <p className="main-bread-crumb">destinations </p>
                  </Link>{" "}
                  <p className="main-bread-crumb">> memories</p>
                </div>
                <Memories destinations={destinations} />
              </div>
            );
          }}
        />

        <Route
          exact
          path="/"
          render={() => {
            return <Landing />;
          }}
        />
      </Switch>
    </main>
  );
};

export default App;
