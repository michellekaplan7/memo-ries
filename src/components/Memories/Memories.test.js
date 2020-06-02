import React from "react";
import { Memories } from "./Memories";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, find } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

let destinations, recording;

describe('Memories', () => {

it('should display a message when there are no mmemories present…', () => {
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

it('Should display a recording for a destination when one is present', () => {
  recording = {
    src: "blob:http://localhost:3000/96201330-62ed-4313-9435-a12aa460cd3c",
    controls: true,
    autoPlay: false,
    id: 69
  }

  destinations = [
    {
      destination: "Denver",
      destinationFullName: "Denver",
      id: 1,
      recordings: [recording],
    },
  ]

  const router = (
    <MemoryRouter>
      <Memories destinations={destinations}/>
    </MemoryRouter>
  );

  const { getByText, getByRole, getByAltText, getByTestId } = render(router);
  const destination = getByText("Denver Memories:");
  const recordingElement = getByTestId("audio");

  expect(destination).toBeInTheDocument();
  expect(recordingElement).toBeInTheDocument();
});

});
