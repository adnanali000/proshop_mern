import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
              <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/cart">
                <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  )
}

export default Header