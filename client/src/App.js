import React, { Component } from 'react';
import BootstrapNavbar from './components/BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div>
        <BootstrapNavbar />
      </div>
    );
  }
}

export default App;