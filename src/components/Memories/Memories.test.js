import React from "react";
import { Memories } from "./Memories";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

let destinations;

describe('Memories', () => {

it.only('should display a message when there are no mmemories present…', () => {
  destinations = [
    {
      destination: "Denver",
      destinationFullName: "Denver",
      id: 1,
      recordings: [],
    },
  ]

  const router = (
    <MemoryRouter>
      <Memories destinations={destinations}/>
    </MemoryRouter>
  );

  const { getByText, getByRole, getByAltText } = render(router);
  const destination = getByText("Denver Memories:");
  const errorMessage = getByText("You have no recordings for this location.");

  expect(destination).toBeInTheDocument();
  expect(errorMessage).toBeInTheDocument();
});

});
