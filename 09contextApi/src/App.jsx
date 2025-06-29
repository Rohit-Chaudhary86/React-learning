import './App.css'
import { UserContext } from './context/userContext.js'

import Profile from './components/Profile.jsx'
import Login from './components/login.jsx'
import UserContextProvider from './context/userContextProvider.jsx'

function App() {
  return (
    <>
       <UserContextProvider>
        <h1>Learning react 😒</h1>
          <Login />
          <Profile />
       </UserContextProvider>
    </>
  )
}

export default App
