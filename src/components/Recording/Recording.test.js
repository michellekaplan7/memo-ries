import React from "react";
import Recording from "./Recording";
import { MemoryRouter } from "react-router-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";

// TEST CHECKLIST


// test that when stop microphone is clicked, stopAudio is called
// test that when stop microphone is clicked, stopAudio is called, and onSuccess is called

describe("Recording", () => {
  it("should display the buttons and number of recordings when rendered", () => {
    const { getByRole, getByText } = render(
      <MemoryRouter>
        <Recording key={1} />
      </MemoryRouter>
    );

    const startButton = getByRole("button", { name: "Start microphone" });
    const stopButton = getByRole("button", { name: "Stop microphone" });
    const numRecordings = getByText("Recordings", { exact: false });

    expect(startButton).toBeInTheDocument();
    expect(stopButton).toBeInTheDocument();
    expect(numRecordings).toBeInTheDocument();
  });

  it.skip("should invoke startAudio when the Start microphone button is clicked", () => {
    const mockStartAudio = jest.fn();
    const mockStopAudio = jest.fn();
    const { getByRole } = render(
      <MemoryRouter>
        <Recording key={1} />
      </MemoryRouter>
    );

    const startButton = getByRole("button", { name: "Start microphone" });
    const stopButton = getByRole("button", { name: "Stop microphone" });
    fireEvent.click(startButton);
    fireEvent.click(stopButton);
    expect(mockStartAudio).toHaveBeenCalledTimes(1);
  });
});
