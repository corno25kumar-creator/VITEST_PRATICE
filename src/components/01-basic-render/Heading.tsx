import { useState, type FC } from "react"

type Title = {
    heading? : string
}

const Heading:FC<Title> = ({heading = "hello i am normal component"}) => {

    const [show , setheading] = useState<string>('');

    const changeColor = () => {
        setheading('blue')
    }

  return (
    <div>
      <h1 data-testid="h1">this is a normal heading</h1>
      <h2 style ={{color: show ? show : "red"}}>{heading }</h2>
      <p data-testid="p-tag">to change the color of heading </p>
      <button data-testid="btn" onClick={changeColor}> click Me!</button>
    </div>
  )
}

export default Heading
