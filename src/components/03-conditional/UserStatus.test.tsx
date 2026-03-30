import {render, screen } from "@testing-library/react"
import { describe, test } from "vitest"
import { UserStatus } from "./UserStatus"



describe("testing the userStatus component " , () => {

   const  mockdata = {
        name : 'putin',
        isOnline: false,
        isPremium : false
    }

    console.log(mockdata)

    // initial render 
    test("render UserStatus when both is Online and isPremium is false ", () => {

        // arrange
        render(<UserStatus  name = {mockdata.name} isOnline={mockdata.isOnline} isPremium={mockdata.isPremium}/>)
    
        //act

        const status_Card = screen.getByTestId("status-card")
        const h2 = screen.getByRole("heading" , {level:2})
        const span_IsOnline = screen.getByTestId("status-indicator")
        const button = screen.queryByRole('button')
        const premiumBadge = screen.queryByTestId("premium-badge");
    
        // assertion 

        //container
        expect(status_Card).toBeInTheDocument()

        // name heading
        expect(h2).toBeInTheDocument()
        expect(h2).toHaveTextContent(mockdata.name)

        // isOnline_span tag
        expect(span_IsOnline).toBeInTheDocument()
        expect(span_IsOnline).toHaveClass("text-gray-500")
        expect(span_IsOnline).toHaveTextContent("Offline")

        // should not present in screen 
        expect(button).not.toBeInTheDocument()
        expect(premiumBadge).not.toBeInTheDocument()
    })


    test("test userStatus when isOnline is true", () => {

         // arrange
        render(<UserStatus  name = {"sonty_bahi"} isOnline={true} isPremium={true}/>)
    
        //act
        const h2 = screen.getByRole("heading" , {level:2})
        const span_IsOnline = screen.getByTestId("status-indicator")
        const span_IsPremium = screen.getByTestId("premium-badge" )
        const button = screen.getByRole('button')


        //assertions

        // h2 
        expect(h2).toBeInTheDocument()
        expect(h2).toHaveTextContent("sonty_bahi")

        // span_IsOnline
        expect(span_IsOnline).toBeInTheDocument()
        expect(span_IsOnline).toHaveClass("text-green-600")
        expect(span_IsOnline).toHaveTextContent("Online")

        //span_IsPremium
        expect(span_IsPremium).toBeInTheDocument()
        expect(span_IsPremium).toHaveTextContent("PRO")

        // button
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent('Send Message')


    })









})

