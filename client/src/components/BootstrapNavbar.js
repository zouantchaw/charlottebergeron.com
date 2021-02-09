import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap'
import App from '../App';
import Home from './Home';
import About from './About';
//   import Home from './Home';
//   import AboutUs from './AboutUs';
//   import ContactUs from './ContactUs';

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
                                    <Nav.Link href="/">Accueil</Nav.Link>
                                    <Nav.Link href="/essay">Essais</Nav.Link>
                                    <Nav.Link href="/short-essays">Essais courts</Nav.Link>
                                    <Nav.Link href="/about">À propos de moi</Nav.Link>
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
                                <Route path="/contact-us">
                                    {/* <ContactUs /> */}
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