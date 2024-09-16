import { Provider } from "react-redux"
import Header from "../Header"
import { BrowserRouter as Router } from "react-router-dom";
import { fireEvent, render  , screen} from "@testing-library/react"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
it("Should load the Header component with login button" , () => {

    render(
        <Provider store={appStore}>
            <Router>
                <Header/>
            </Router>
        </Provider>
    )

    // const buttons = screen.getAllByRole("button")
    // const loginButton = buttons.find( btn => btn.textContent === "Login")

    // const loginButton = screen.getByText("Login") 

    const loginButton = screen.getByRole("button" , {name : "Login"})
    expect(loginButton).toBeInTheDocument()

})

it("Should load the Header component with login button" , () => {

    render(
        <Provider store={appStore}>
            <Router>
                <Header/>
            </Router>
        </Provider>
    )

    // to test specific part of the string we can use regex uy using   => /name/
    const cartItems = screen.getByText(/Cart/)
    expect(cartItems).toBeInTheDocument()

})

it("Should change login to Logout button on Click" , () => {
    render(
        <Provider store={appStore}>
            <Router>
                <Header/>
            </Router>
        </Provider>
    )

    const loginButton = screen.getByRole("button" , {name : "Login"})

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button" , {name : "Logout"})

    expect.toBeInTheDocument(logoutButton)
})