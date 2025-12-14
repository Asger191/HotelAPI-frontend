import LogIn from "./components/Login"
import LoggedIn from "./components/LoggedIn"
import { NavLink } from "react-router"

export default function Auth({ loggedIn, login, logout, username, roles }) {
  return (
    <div>
      {!loggedIn ? (
        <LogIn login={login} />
        
       
      ) : (
        <LoggedIn username={username} roles={roles} logout={logout} />
      )}
    </div>
  )
}
