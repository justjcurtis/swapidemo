import { render, waitFor, act } from '@testing-library/react'
import ProductCard from './productCard'
import starships from '../testData/starships.json'
import { NotificationContext, NotificationProvider } from '../contexts/notificationContext'

describe("ProductCard", () => {
    test("renders correctly", () => {
        const product = starships[0]
        const { container } = render(
            <NotificationProvider>
                <ProductCard product={product} />
            </NotificationProvider>
        )
        expect(container.innerHTML).toMatchSnapshot()
    })
    describe("when amount is 0", () => {
        test("Calls 'notify' with error when buy button is clicked", async () => {
            const product = starships[0]
            const notify = jest.fn()
            const { getByText } = render(
                <NotificationContext.Provider value={{ notify }}>
                    <ProductCard product={product} />
                </NotificationContext.Provider>
            )
            act(() => {
                getByText("BUY").click()
            })
            await waitFor(() => {
                expect(notify).toHaveBeenCalledWith("Please add at least 1 item to your basket", "error")
            })
        })
    })

    describe("when amount is greater than 0", () => {
        test("Calls 'notify' with success when buy button is clicked", async () => {
            const product = starships[0]
            const notify = jest.fn()
            const { getByText, rerender } = render(
                <NotificationContext.Provider value={{ notify }}>
                    <ProductCard product={product} />
                </NotificationContext.Provider>
            )
            act(() => {
                getByText("+").click()
            })
            rerender(
                <NotificationContext.Provider value={{ notify }}>
                    <ProductCard product={product} />
                </NotificationContext.Provider>
            )
            act(() => {
                getByText("BUY (1)").click()
            })
            await waitFor(() => {
                expect(notify).toHaveBeenCalledWith("1 CR90 corvette added to basket (₹3500000)", "success")
            })
        })
    })
})

