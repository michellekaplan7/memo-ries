import React from "react";
import Landing from "./Landing";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

describe("Landing", () => {
  it("should display the correct information", () => {
    const router = (
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );

    const { getByText, getByRole, getByAltText } = render(router);
    const memoriesLogo = getByAltText("memories logo");
    const welcomeMessage = getByText("Welcome!");
    const link = getByRole("link", { name: "Let the memories begin!" });

    expect(welcomeMessage).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(memoriesLogo).toBeInTheDocument();
  });

  it("should update the pathname upon clicking the button", () => {
      const history = createMemoryHistory();
      const { getByRole } = render(
          <Router history={history}>
              <Landing />
          </Router>
      )
      const link = getByRole("link", { name: "Let the memories begin!" });
      fireEvent.click(link);
      expect(history.location.pathname).toBe("/destinations")
  })
});
