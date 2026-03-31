import Heading from "./components/01-basic-render/Heading"
import  TodoFilter  from "./components/01-basic-render/TodoFilter"
import { Greeting } from "./components/02-props/Greeting";
import { UserCard } from "./components/02-props/UserCard"
import { AuthStatus } from "./components/03-conditional/AuthStatus";
import { UserStatus } from "./components/03-conditional/UserStatus";
import Onsave  from './components/05-form-input/Onsave'

function App() {
  const currentUser = {
    name: 'Sam',
    email: 'sam@example.com'
  };



  const handleUserRegistration = (data: { username: string; agreed: boolean }) => {
    console.log('Form submitted to App:', data);
    alert(`Welcome, ${data.username}!`);}

  return (
    <div>
      <Heading/>
      <TodoFilter />
      <hr />
     <UserCard user={currentUser} isAdmin={false} onUpdateRole={() => 'john'}/>
      <Greeting/>
      <hr />

      <AuthStatus isLoggedIn={true} userName="modi putin"/>
      <hr />
      <UserStatus  name="putin" isOnline ={true} isPremium={true} />
      <hr />
      <Onsave onSave={handleUserRegistration}/>
    </div>
  )
}

export default App
