import React from "react";
import Recording from "./Recording";
import { MemoryRouter } from "react-router-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("Recording", () => {
  it("should display the buttons and number of recordings when rendered", () => {
    const { getByRole, getByText } = render(
      <MemoryRouter>
        <Recording key={1} destinations={[]} selectedDestination={{}}/>
      </MemoryRouter>
    );

    const startButton = getByRole("button", { name: "Start microphone" });
    const stopButton = getByRole("button", { name: "Stop microphone" });
    const numRecordings = getByText("Recordings", { exact: false });

    expect(startButton).toBeInTheDocument();
    expect(stopButton).toBeInTheDocument();
    expect(numRecordings).toBeInTheDocument();
  });
  });
