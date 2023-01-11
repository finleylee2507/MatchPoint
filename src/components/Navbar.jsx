import React from 'react';
import { Nav, Form, Navbar, NavDropdown, Offcanvas, Button, Container } from 'react-bootstrap';

function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="false" className="mb-3">
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
                    <Navbar.Brand href="#">MatchPoint</Navbar.Brand>
                    <Nav.Link href="#action1">Sign in</Nav.Link>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar`}
                        aria-labelledby={`offcanvasNavbarLabel`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel`}>
                                MatchPoint
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Profile</Nav.Link>
                                <Nav.Link href="#action2">All Events</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;