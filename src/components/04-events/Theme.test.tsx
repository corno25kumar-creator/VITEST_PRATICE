import {render , screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test } from 'vitest'
import { ThemeSelector } from './ThemeSelector'



describe('testing the ThemeSelector component', ()=> {

    test("initial render", ()=> {

        const current_Theme = {
            theme:"light"
        }

        //arrange
        render(<ThemeSelector/>)

        // act
        const h2 = screen.getByRole("heading", {level:2})
        const select = screen.getByLabelText(/Choose a theme:/i)
       

        //assertion 
        expect(h2).toBeInTheDocument()
        expect(h2).toHaveTextContent(`Current Theme: ${current_Theme.theme}`)

        expect(select).toBeInTheDocument()
        expect(select).toHaveValue('light')
    })

    test("when user select the options",  async()=> {

        const event = userEvent.setup()
        const current_Theme = {
            theme:"dark"
        }

        render(<ThemeSelector/>)
        const h2 = screen.getByRole("heading", {level:2})
        const select = screen.getByRole('combobox')

        await event.selectOptions(select , `${current_Theme.theme}`)

        expect(h2).toHaveTextContent(`Current Theme: ${current_Theme.theme}`)
        expect(select).toHaveValue(`${current_Theme.theme}`)


    })



})