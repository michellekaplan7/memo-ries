import React from "react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";

describe("Header", () => {
    it('Should display the header when rendered', () => {
        const { getByText } =  render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>);

        const appName = getByText('MEMO—ries')
        const viewMemBtn = getByText('View All Memories')

        expect(appName).toBeInTheDocument();
        expect(viewMemBtn).toBeInTheDocument();
    })
    
    it('should update the pathname when the View All Memories button is clicked', () => {
        
    })
})