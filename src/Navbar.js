import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample() {

    return (
        <Navbar expand="lg" className="bg-dark text-white">
            <Container>
                <Navbar.Brand href="#home" className='text-white'>Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Card</Nav.Link>
                        <Nav.Link href="#link" className='text-white'>Contact</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="search">Search</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;