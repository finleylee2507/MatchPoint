import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { signOut } from "../utilities/firebase";
import "./Navbar.css";

const SignOutButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  async function signOutUser() {
    await signOut();
    navigate("/");
  }

  return (
    <button className="nav-button" onClick={signOutUser}>
      Sign out
    </button>
  );
};

const AuthButton = () => {
  return <SignOutButton />;
};

const NavBar = ({ numberOfUnread }) => {
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <Navbar expand="false" className="bar navbar-expand-lg navbar-light">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
          <Navbar.Brand className="logo" href="/allEvents">
            MatchPoint
          </Navbar.Brand>
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
                <Nav.Link
                  className={`nav-link ${
                    activeLink === "/allEvents" ? "active" : ""
                  }`}
                  href="/allEvents"
                  onClick={() => handleClick("allEvents")}
                >
                  All Events
                </Nav.Link>
                <Nav.Link
                  className={`nav-link ${
                    activeLink === "/inbox" ? "active" : ""
                  }`}
                  href="/inbox"
                  onClick={() => handleClick("inbox")}
                >
                  Inbox
                  {numberOfUnread !== 0 ? (
                    <span className="number-of-unread">{numberOfUnread}</span>
                  ) : (
                    <span></span>
                  )}
                </Nav.Link>

                <Nav.Link
                  className={`nav-link ${
                    activeLink === "/profile" ? "active" : ""
                  }`}
                  href="/profile"
                  onClick={() => handleClick("profile")}
                >
                  Profile
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <AuthButton />
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
