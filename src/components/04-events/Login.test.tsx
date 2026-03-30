import { describe, test } from "vitest";
import {render ,  screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";


describe ("test the user input event ", () => {


    test("initial render without the user Input" , () => {

        //arrange
        render(<LoginForm/>)

        // act
        const h2 = screen.getByRole("heading", {level:2})
        const input = screen.getByPlaceholderText("Enter email")
        const button = screen.getByRole("button", {name: /Submit/i})

        //assertions
        expect(h2).toHaveTextContent("Login")
        expect(input).toBeInTheDocument()
        expect(button).toBeInTheDocument()
       
    })


    test("test Login Form when user event Happen", async()=> {

        const mockTestData = {
            email:"xyz123@gmail.com"
        }

        //arrange
        const user_Event = userEvent.setup()
        render(<LoginForm/>)

        const input = screen.getByPlaceholderText("Enter email")
        const button = screen.getByRole("button", {name: /Submit/i})
      


        // act
        await user_Event.type(input, `${mockTestData.email}`)
        await user_Event.click(button)

        //assertion
        expect( screen.getByTestId("result")).toBeInTheDocument()
        expect( screen.getByTestId("result")).toHaveTextContent(`Logged in as: ${mockTestData.email}`)


    })



})