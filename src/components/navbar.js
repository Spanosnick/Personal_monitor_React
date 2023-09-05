import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainNavbar() {
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link id="startMenu" href="#home">Αρχική</Nav.Link>
                        <Nav.Link href="#infos">Πληροφορίες</Nav.Link>
                        <Nav.Link href="#message">Μηνύματα</Nav.Link>
                        <Nav.Link id="profileMenu" href="#profile">Προφίλ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;