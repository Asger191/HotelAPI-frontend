import './App.css'
import Header from "./components/Header"
import Auth from './Auth'
import { useState } from "react"
import facade from "./apiFacade"
import { Outlet, useNavigate } from 'react-router'


function App() {
  const [loggedIn, setLoggedIn] = useState(facade.loggedIn())
  const [username, setUsername] = useState("")
  const [roles, setRoles] = useState([])
  const navigate = useNavigate()

  const login = (user, pass) => {
    facade.login(user, pass)
      .then(() => {
        setLoggedIn(true)
        const [u, r] = facade.getUsernameAndRoles()
        setUsername(u)
        setRoles(r)

        navigate("/vision")
      })
  }

  const logout = () => {
    facade.logout()
    setLoggedIn(false)
    setUsername("")
    setRoles([])

    navigate("/")
  }

  return (
    <div>
      
      <Header loggedIn={loggedIn} username={username} logout={logout} />

      
      <Auth
        loggedIn={loggedIn}
        login={login}
        logout={logout}
        username={username}
        roles={roles}
      />
      <Outlet />
      <div>
        
      </div>
    </div>
  )
}

export default App
