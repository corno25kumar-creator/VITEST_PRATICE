import {render , screen} from '@testing-library/react'
import  userEvent  from '@testing-library/user-event'
import { describe, test } from 'vitest'
import { Counter2 } from './Counter2'

describe("testing the counter2 component", ()=> {


    test("initial render when nothing happen", ()=> {
        // arrange
        render (<Counter2/>)

        //act
        const h1 = screen.getByTestId("count-val");
        const button_Increment = screen.getByRole("button", {name : /Increment/i});
        const button_Decrement = screen.getByRole("button", {name : /Decrement/i});

        //assertions
        expect(h1).toBeInTheDocument()
        expect(h1).toHaveTextContent("0")

        expect(button_Increment).toBeInTheDocument()
        expect(button_Increment).toHaveTextContent("Increment")


        expect(button_Decrement).toBeInTheDocument()
        expect(button_Decrement).toHaveTextContent("Decrement")

    })

    test("should update counter value on multiple interactions", async () => {
    // 1. Arrange
    const user = userEvent.setup()
    render(<Counter2 />)

    const h1 = screen.getByTestId("count-val")
    const incrementBtn = screen.getByRole("button", { name: /Increment/i })
    const decrementBtn = screen.getByRole("button", { name: /Decrement/i })
    
    // 2. Act (Multiple clicks simulate real user behavior)
    await user.click(incrementBtn)
    await user.click(incrementBtn) // Value should be 2 now
    await user.click(decrementBtn) // Value should be 1 now

    // 3. Assert (Final state check)
    expect(h1).toHaveTextContent("1")
})


})