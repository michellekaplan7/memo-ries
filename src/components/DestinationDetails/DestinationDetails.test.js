import React from "react";
import DestinationDetails from "./DestinationDetails";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("DestinationDetails", () => {
  it("renders the correct destination details", () => {
    const { getByText } = render(
      <MemoryRouter>
        <DestinationDetails
          destination={{
            destination: "FoCo",
            destinationFullName: "Fort Collins",
            id: 3,
          }}
        />
      </MemoryRouter>
    );

    const name = getByText("Fort Collins");
    expect(name).toBeInTheDocument();
  });
});
