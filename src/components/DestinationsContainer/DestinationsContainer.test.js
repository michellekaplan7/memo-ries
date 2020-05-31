import React from "react";
import DestinationsContainer from "./DestinationsContainer";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("DestinationContainer", () => {
  it("holds the destination buttons", () => {
    const { getAllByRole } = render(
      <MemoryRouter>
        <DestinationsContainer setSelectedDestination={""} />
      </MemoryRouter>
    );

    const destinationButtons = getAllByRole("button");
    expect(destinationButtons).toHaveLength(4);
  });
});
