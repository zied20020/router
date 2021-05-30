import React from 'react'
import {Navbar} from "react-bootstrap"
const Nav = () => {
    return (
        <div>
            <Navbar>
  <Navbar.Brand href="#home">I Like To Movie It</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">User</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Nav
