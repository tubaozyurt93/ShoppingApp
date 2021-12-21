import React , { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, Container, Modal } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
// Components
import Register from './Register';
import LogIn from './LogIn';

function NavbarComp({t, i18n}) {

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }
    const [registerShow, setRegisterShow] = useState(false);
    const [loginShow, setLoginShow] = useState(false);

    return (
        <div>
            <Navbar style={{ marginBottom: "10px" }} bg="dark" variant='dark' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title={t('navbar.dropdown.headers.mensclothings')} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">{t('navbar.dropdown.sections.tshirt')}</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">{t('navbar.dropdown.sections.jacket')}</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">{t('navbar.dropdown.sections.bag')}</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={t('navbar.dropdown.headers.womensclothings')} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">{t('navbar.dropdown.sections.tshirt')}</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">{t('navbar.dropdown.sections.jacket')}</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">{t('navbar.dropdown.sections.jewelery')}</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">{t('navbar.dropdown.sections.bag')}</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action1">{t('navbar.dropdown.headers.electronics')}</Nav.Link>
                        </Nav>
                            <NavDropdown title={t('navbar.dropdown.headers.language')} id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#turkish" onClick={()=> {handleChangeLanguage("tr")} }> Türkçe</NavDropdown.Item>
                                <NavDropdown.Item href="#english" onClick={()=> {handleChangeLanguage("en")}}>English</NavDropdown.Item>
                            </NavDropdown>
                        <Form className="d-flex">
                            <Button style={{ marginRight: "20px" }} bg="light" onClick={() => setRegisterShow(true)} variant="outline-light">{t('navbar.buttons.register')}</Button>
                            <Button style={{ marginRight: "20px" }} bg="light" onClick={() => setLoginShow(true)} variant="outline-light">{t('navbar.buttons.login')}</Button>
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
                    {t('navbar.buttons.register')}
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
                    {t('navbar.buttons.login')}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body><LogIn/></Modal.Body>
            </Modal>
        </div>
    )
}
export default withTranslation()(NavbarComp);
