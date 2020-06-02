import React from "react";
import DestinationDetails from "./DestinationDetails";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";

let destinations;

describe("DestinationDetails", () => {
  it("renders the correct destination details", () => {
    destinations = [
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
    ];

    const { getByText } = render(
      <MemoryRouter>
        <DestinationDetails
          selectedDestination={{
            destination: "FoCo",
            destinationFullName: "Fort Collins",
            id: 3,
          }}
          destinations={destinations}
        />
      </MemoryRouter>
    );

    const name = getByText("Fort Collins");
    expect(name).toBeInTheDocument();
  });
});
