import React from 'react'
import "./navbar.scss"

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="navLeft">
          <span>MyDesign</span>
        </div>
        <div className="navMiddle">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Contacts</li>
            <li>Latest</li>
          </ul>
        </div>
        <div className="navRight">
          <div className="search">
            <input type="text" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar