import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
      <header className="mainHeader">
        <h2>De_Fri3nds</h2>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Login" activeClassName="active">Login</NavLink>
            </li>
            <li>
              <NavLink to="/Friends" activeClassName="active">Friends</NavLink>
            </li>

          </ul>
        </nav>
    </header>
  )
}

export default Header
