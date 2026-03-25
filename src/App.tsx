import Heading from "./components/01-basic-render/Heading"
import  TodoFilter  from "./components/01-basic-render/TodoFilter"
import { Greeting } from "./components/02-props/Greeting";
import { UserCard } from "./components/02-props/UserCard"

function App() {
  const currentUser = {
    name: 'Sam',
    email: 'sam@example.com'
  };
  return (
    <div>
      <Heading/>
      <TodoFilter />
      <hr />
     <UserCard user={currentUser} isAdmin={false} onUpdateRole={() => 'john'}/>
      <Greeting/>
    </div>
  )
}

export default App
