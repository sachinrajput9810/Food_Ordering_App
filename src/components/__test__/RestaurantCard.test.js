import { render , screen } from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import ResDataMock from "../mocks/ResDataMock.json/"
import "@testing-library/jest-dom"

const RestaurantPromotedLabel = withPromotedLabel(RestaurantCard)

it("Should test the Rendering of restaurant card data" , () => {

    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <RestaurantPromotedLabel resData = {ResDataMock}/>
            </BrowserRouter>
        </Provider>
    )

    const searchText =  screen.getByText("Promoted")
    expect(searchText).toBeInTheDocument()
    
})
