import React from "react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("App", () => {
  it("should display the landing page", () => {
    const { getByText, getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const welcome = getByText("Welcome!");
    const welcomeButton = getByRole("button", {
      name: "Let the memories begin!",
    });
    expect(welcome).toBeInTheDocument();
    expect(welcomeButton).toBeInTheDocument();
  });

  it("should display the destination buttons and the view all memories button upon clicking the let memories begin button", () => {
    const { getByRole, getAllByRole, getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const welcomeButton = getByRole("button", {
      name: "Let the memories begin!",
    });
    fireEvent.click(welcomeButton);
    const destinationButton1 = getByText("Aspen");
    const viewMemoriesButton = getByText("View All Memories");
    const allButtons = getAllByRole("button");
    expect(allButtons).toHaveLength(5);
    expect(destinationButton1).toBeInTheDocument();
    expect(viewMemoriesButton).toBeInTheDocument();
  });

  it("should display the destination details based on a selected destination", () => {
    const { getByRole, getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const welcomeButton = getByRole("button", {
      name: "Let the memories begin!",
    });
    fireEvent.click(welcomeButton);
    const destinationButton1 = getByRole("button", { name: "RMNP" });
    fireEvent.click(destinationButton1);
    const destinationName = getByText("Rocky Mountain National Park");
    const recordingAmount = getByText("Recordings (0)");
    expect(destinationName).toBeInTheDocument();
    expect(recordingAmount).toBeInTheDocument();
  });

  it("should display destination buttons upon clicking the breadcrumb link", () => {
    const { getByRole, getAllByRole, getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const welcomeButton = getByRole("button", {
      name: "Let the memories begin!",
    });
    fireEvent.click(welcomeButton);
    const destinationButton1 = getByRole("button", { name: "RMNP" });
    fireEvent.click(destinationButton1);
    const destinationLink = getByRole("link", { name: "destinations" });
    const destinationName = getByText("Rocky Mountain National Park");
    fireEvent.click(destinationLink);
    const allButtons = getAllByRole("button");
    expect(allButtons).toHaveLength(5);
    expect(destinationName).not.toBeInTheDocument();
  });

  it("Should see a message when you click on View All Memories in the nav-bar ", () => {
    const { getByRole, getAllByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const welcomeButton = getByRole("button", {
      name: "Let the memories begin!",
    });
    fireEvent.click(welcomeButton);

    const memoriesButton = getByRole("button", { name: "View All Memories" });
    fireEvent.click(memoriesButton);

    const recordingMessage = getAllByText("You have no", { exact: false });
    expect(recordingMessage).toHaveLength(4);
  });

  it("should display destination buttons upon clicking the breadcrumb link on the memories page", () => {
    const { getByRole, getAllByText, getAllByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const welcomeButton = getByRole("button", {
      name: "Let the memories begin!",
    });
    fireEvent.click(welcomeButton);
    const memoriesButton = getByRole("button", { name: "View All Memories" });
    fireEvent.click(memoriesButton);
    const recordingMessage = getAllByText("You have no recordings", {
      exact: false,
    });
    expect(recordingMessage).toHaveLength(4);
    const destinationLink = getByRole("link", { name: "destinations" });
    fireEvent.click(destinationLink);
    const allButtons = getAllByRole("button");
    expect(allButtons).toHaveLength(5);
    expect(recordingMessage[0]).not.toBeInTheDocument();
  });
});
