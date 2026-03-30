import { render, screen } from "@testing-library/react";
import {describe, test} from 'vitest'
import { AuthStatus } from "./AuthStatus";


describe ("testing the conditional in react ", () => {

const mockData = {
    isLoggedIn : true,
    userName : "modi putin"
}


test ("render when the isLoggedIn is false " , () => {

    // arrange
  render(<AuthStatus isLoggedIn={false} userName="not log in "/>)
  
  // act//
  const auth_Container = screen.getByTestId("auth-container");
  const h1_Content = screen.getByRole("heading", { level: 1 })
  const btn = screen.getByRole('button')


  //assert //
  expect(auth_Container).toBeInTheDocument()
  expect(h1_Content).toHaveTextContent("Please Sign In")
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveTextContent("Login")



})




test ("render when the isLoggedIn is true " , () => {

    // arrange
  render(<AuthStatus isLoggedIn={mockData.isLoggedIn} userName={mockData.userName}/>)
  
  // act//
  const auth_Container = screen.getByTestId("auth-container");
  const h1_Content = screen.getByRole("heading", { level: 1})
  const btn = screen.getByRole('button')


  //assert //
  expect(auth_Container).toBeInTheDocument()
  expect(h1_Content).toHaveTextContent(`Welcome, ${mockData.userName}`)
  expect(btn).toBeInTheDocument()
  expect(btn).toHaveTextContent("Logout")



})


})