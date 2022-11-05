import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Headers = () => {
  const { user, logOut } = useContext(AuthContext);

  const signOuts = () => {
    logOut();
  };

  return (
    <div className="mb-2">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <h2>
              <Link to="/">Xoozom</Link>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>

              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                {/* {user?.displayName}  */}

                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <Button onClick={signOuts} variant="light" className="ms-3">
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link className="ps-3" to="/register">
                      Register
                    </Link>
                  </>
                )}
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                {user?.photoURL ? (
                  <Image
                    style={{ width: "45px", height: "45px" }}
                    roundedCircle
                    src={user.photoURL}
                  ></Image>
                ) : (
                  <FaUserAlt />
                )}
              </Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <Container>
                <LeftSideNav />
              </Container>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Headers;
