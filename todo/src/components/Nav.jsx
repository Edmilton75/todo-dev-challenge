import React from 'react'
import "../styles/nav.css"
const Nav = () => {
  return (
    <nav>
        <ul className="navList">
            <li className="click">All</li>
            <li className="active">Active</li>
            <li className="completed">Completed</li>
        </ul>
    </nav>
  )
}

export default Nav