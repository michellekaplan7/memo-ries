import React from "react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("Header", () => {
  it("Should display the header when rendered", () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const appName = getByAltText("memories-logo");
    const viewMemBtn = getByText("View All Memories");

    expect(appName).toBeInTheDocument();
    expect(viewMemBtn).toBeInTheDocument();
  });

  it("should update the pathname when the View All Memories button is clicked", () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    const memoryLink = getByRole("link", { name: "View All Memories" });
    fireEvent.click(memoryLink);
    expect(history.location.pathname).toBe("/memories");
  });
});
