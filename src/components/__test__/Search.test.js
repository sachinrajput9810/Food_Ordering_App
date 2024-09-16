import { fireEvent, render , screen, waitFor } from "@testing-library/react"
import Body from "../Body"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/mockResListData.json"
import "@testing-library/jest-dom"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
global.fetch = jest.fn( () => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
} )



it("Should render search list with input burger" , async () => {
    // using act where the states are getting changed 
    await act(async () => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))

    const cardsBeforeSearch = screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(20)

    const searchBtn = screen.getByRole("button" , {name : "Search"})

    const searchBox = screen.getByPlaceholderText("Name of Restaurant")
    fireEvent.change(searchBox , {target : { value : "Pizza" } } )
    fireEvent.click(searchBtn )

    const cardsAfterSearch = screen.getAllByTestId("resCard")
    // console.log(searchBox);
    
    expect(cardsAfterSearch.length).toBe(5)

})

it("Should filter the top rated restaurant list" , async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))

    const cardsBeforeFilter = screen.getAllByTestId("resCard")
    expect(cardsBeforeFilter.length).toBe(20)

    const searchBtn = screen.getByRole("button" , {name : "Top Rated Restaurants"})

    fireEvent.click(searchBtn )

    const cardsAfterFilter = screen.getAllByTestId("resCard")
    // console.log(searchBox);
    
    expect(cardsAfterFilter.length).toBe(11)
})