import React from "react";
import {Container, Nav, Navbar, Offcanvas} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {signOut} from "../utilities/firebase";
import "./Navbar.css";

const SignOutButton = () => {
    const navigate = useNavigate();

    async function signOutUser() {
        await signOut();
        navigate("/");
    }

    return (
        <button className="btn btn-dark" onClick={signOutUser}>
            Sign out
        </button>
    );
};

const AuthButton = () => {
    return <SignOutButton/>;
};

const NavBar = () => {
    return (
        <>
            <Navbar expand="false" className="bar">
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar`}/>
                    <Navbar.Brand
                        className="logo"
                        href="src/components/events/EventList.jsx"
                    >
                        MatchPoint
                    </Navbar.Brand>
                    {/* <Nav.Link className="nav-link" href="#action1">Sign in</Nav.Link> */}
                    <AuthButton/>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar`}
                        aria-labelledby={`offcanvasNavbarLabel`}
                        placement="start"
                        className="burger-menu"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel`}>
                                MatchPoint
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {/* <Nav.Link href="#action1">Profile</Nav.Link> */}
                                <Nav.Link href="/allEvents">All Events</Nav.Link>
                              {/* <Nav.Link href='/teams'>Teams</Nav.Link> */}
                              <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
