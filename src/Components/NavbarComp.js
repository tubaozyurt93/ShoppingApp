import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant='dark' expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <NavDropdown title="Men's Clothing" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">T-Shirts</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Jacket</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Bag</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Women's Clothing" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">T-Shirts</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Jacket</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Jewelery</NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">Bag</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#action1">Electronics</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
