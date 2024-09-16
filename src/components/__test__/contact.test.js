import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Testing the contact us component" , () => {

    beforeAll( () => {
        console.log("Runs the function before all the test cases")
    })

    beforeEach( () => {
        console.log("Runs the function before each test case")
    })

    afterAll( () => {
        console.log("Runs the function after all the test cases")
    })
    afterEach( () => {
        console.log("Runs the function after each test case")
    })
    // it == test (mean it and test are the alias)
    it("should  test help us ", () => {
        render(<Contact />); // Render the component on jsdom
        const text = screen.getAllByText("Help and Support"); // Get all headings
        expect(text.length).toBeGreaterThan(0) ; // Check if there's at least one heading
    });
    
    it("should test the buttons" , () => {
        render(<Contact/>)
        const button = screen.getAllByRole("button")
        expect(button.length).toBe(8)
    })

})

