import React from "react";
import DestinationsContainer from "./DestinationsContainer";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";

let destinations;

describe("DestinationsContainer", () => {
  it("holds the destination buttons", () => {
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

    let mockSetSelectedDestination = jest.fn();

    const { getAllByRole } = render(
      <MemoryRouter>
        <DestinationsContainer
          setSelectedDestination={mockSetSelectedDestination}
          destinations={destinations}
        />
      </MemoryRouter>
    );

    const destinationButtons = getAllByRole("button");
    expect(destinationButtons).toHaveLength(4);
  });
});
