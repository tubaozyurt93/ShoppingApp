import React from 'react';
import { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, Container, Modal } from 'react-bootstrap';
import Register from './Register';
import LogIn from './LogIn';
function NavbarComp() {

    const [registerShow, setRegisterShow] = useState(false);
    const [loginShow, setLoginShow] = useState(false);

    return (
        <div>
            <Navbar style={{ marginBottom: "10px" }} bg="dark" variant='dark' expand="lg">
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
                            <Button style={{ marginRight: "20px" }} bg="light" onClick={() => setRegisterShow(true)} variant="outline-light">Register</Button>
                            <Button style={{ marginRight: "20px" }} bg="light" onClick={() => setLoginShow(true)} variant="outline-light">Log In</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Modal
                size="md"
                show={registerShow}
                onHide={() => setRegisterShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Register
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body><Register /></Modal.Body>
            </Modal>
            <Modal
                size="md"
                show={loginShow}
                onHide={() => setLoginShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Log In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body><LogIn/></Modal.Body>
            </Modal>
        </div>
    )
}

export default NavbarComp;
