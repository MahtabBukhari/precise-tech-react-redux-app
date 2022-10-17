import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
   <Navbar bg='light'>
    <Container>
        <Navbar.Brand href='/'><h3>Ecommerce Redux</h3></Navbar.Brand>
    </Container>
   </Navbar>
  )
}

export default Header
