import React, { Component } from 'react';
import BootstrapNavbar from './components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <BootstrapNavbar />
        <Footer />
      </div>
    );
  }
}

export default App;