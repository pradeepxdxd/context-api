import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserProviderContext from './context/UserProviderContext'

function App () {
  return (
    <>
      <div>
        <UserProviderContext>
          <Login />
          <Profile />
        </UserProviderContext>
      </div>
    </>
  )
}

export default App
