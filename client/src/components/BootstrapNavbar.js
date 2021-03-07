import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">Charlotte Bergeron</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/essays">Essays</Nav.Link>
                                    <Nav.Link href="/short-essays"> Short Essays</Nav.Link>
                                    <Nav.Link href="/about">About</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;