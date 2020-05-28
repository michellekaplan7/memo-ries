import React from "react";
import Landing from "./Landing";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("Landing", () => {
    it("should display the correct information", () => {
        const router = (
            <MemoryRouter>
                <Landing />
            </MemoryRouter>
        );

        const { getByText, getByRole } = render(router);
        const welcomeMessage = getByText('Welcome!')
        const link = getByRole("link", {name: 'Let the memo-ries begin!'})

        expect(welcomeMessage).toBeInTheDocument()
        expect(link).toBeInTheDocument()
    })
})