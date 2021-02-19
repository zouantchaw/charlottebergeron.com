import React, { Component } from 'react';
import BootstrapNavbar from './components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <div className="Content">
          <BootstrapNavbar />
        </div>
        <Footer className="Footer"/>
      </>
    );
  }
}

export default App;