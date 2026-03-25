// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import Heading from './Heading'
// import TodoList from './TodoFilter'

// describe('heading Components', () => {


//     // no props given
//     test.skip('shows default heading when no prop passed', () => {
//          render(<Heading />)
//          expect(screen.getByText('hello i am normal component')).toBeInTheDocument()
//     })

//     // initial render 
//     test.skip('render the heading text', ()=> {
//          render(<Heading heading= "hello i am normal component"/>)

//          const h1 = screen.getByTestId('h1')
//          const heading_text = screen.getByText("hello i am normal component")
//          const p = screen.getByTestId('p-tag')
//          const button = screen.getByTestId('btn')
       
//          expect(h1).toBeInTheDocument()
//          expect(heading_text).toBeInTheDocument()
//          expect(p).toBeInTheDocument()
//          expect(button).toBeInTheDocument()

//     })

//     //  when default color red given
//     test.skip('h2 color is red by default', () => {
//          render(<Heading heading="hello i am normal component" />)
//          const h2 = screen.getByText('hello i am normal component')
//          expect(h2).toHaveStyle({ color: 'rgb(255, 0, 0)' })
//     })

//     test.skip("h2 is change color when btn click", async () => {

//             render(<Heading heading="hello i am normal component"/>)
        
//             const heading_text = screen.getByText("hello i am normal component")
//             const color_button = screen.getByTestId('btn')

//             await userEvent.click(color_button)

//             expect(heading_text).toHaveStyle({color:"rgb(0, 0, 255)"})

        
//     })


//     // default render 
//     test.skip('todo default render', ()=> {
//         render(<TodoList/>)

//         const heading_1 = screen.getByTestId('heading')
//         const input = screen.getByTestId('todo-input')
//         const button = screen.getByTestId('add-btn')

//         expect(heading_1).toBeInTheDocument()
//         expect(input).toBeInTheDocument()
//         expect(button).toBeInTheDocument()
//     })

//      //  render   after add todo 
//     test.skip('todo default render', async()=> {
//         render(<TodoList/>)

//         const heading_1 = screen.getByTestId('heading')
//         const input_2 = screen.getByTestId('todo-input')
//         const input_placeholder = screen.getByPlaceholderText("Enter todo")
//         const button_2 = screen.getByTestId('add-btn')

//         await userEvent.type(input_placeholder, "react");
//         await userEvent.click(button_2)

//         const ul = screen.getByRole("ul")

//         expect(heading_1).toBeInTheDocument()
//         expect(input_2).toBeInTheDocument()
//         expect(button_2).toBeInTheDocument()
//         expect(ul).toBeInTheDocument()

        
//     })

// })