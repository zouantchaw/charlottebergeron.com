import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap'
import Home from './Home';
import About from './About';
import  EssaysContainer from '../containers/EssaysContainer'
import ShortEssays from './ShortEssays';

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
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
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about">
                                    <About />
                                </Route>
                                <Route path="/essays">
                                    <EssaysContainer />
                                </Route>
                                <Route path="/short-essays">
                                    <ShortEssays />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;