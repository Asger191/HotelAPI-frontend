import { NavLink } from "react-router";
import julehotel from "../assets/julehotel.png";



export default function Header({ loggedIn, username, logout }) {
  return (
    <header style={{ background: "#e16868ff", padding: 10, display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img src={julehotel} alt="julehotel" width={80} height={80} />
        <h1>Hotel Christmas</h1>

      </div>

      <div>
        <NavLink to="/">
        Home
        </NavLink>

        <NavLink to="vision">
        Vision
        </NavLink>

        <NavLink to="endpoints">
            Endpoints
        </NavLink>
      </div>

      {!loggedIn ? (
        <span>Login below</span>
      ) : (
        <div>
          <span style={{ marginRight: 10 }}>User: {username}</span>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </header>
  )
}

