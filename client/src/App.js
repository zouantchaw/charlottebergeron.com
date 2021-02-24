import React, { Component } from 'react';
import BootstrapNavbar from './components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar,Nav } from 'react-bootstrap'
import Home from './components/Home';
import About from './components/About';
import  EssaysContainer from './containers/EssaysContainer'
import ShortEssays from './containers/ShortEssaysContainer';

class App extends Component {

  let routes = (
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
  );
  render() {
    return (
      <Router>

        <div className="Content">
          <BootstrapNavbar />
        </div>


        <Footer className="Footer"/>

      </Router>
    );
  }
}

export default App;