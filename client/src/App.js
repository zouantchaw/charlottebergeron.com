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
import ShortEssays from './components/ShortEssays';
import Essays from './components/Essays';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="Content">
          <BootstrapNavbar />
            <Route exact path="/"> <Home /> </Route>
            <Route path="/about"> <About /> </Route>
            <Route path="/short-essays"> <ShortEssays /> </Route>
            <Route path="/essays" render={routerProps => <EssaysContainer {...routerProps} />} />
            {/* <Route path="/essays"> <EssaysContainer /> </Route> */}

        </div>
        <Footer className="Footer"/>
      </Router>
    );                                                                                                                                                
  }
}

export default App;
        // <Switch>
        //   </Switch>          