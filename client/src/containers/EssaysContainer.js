import React, { Component } from 'react';
import axios from 'axios';


class EssaysContainer extends Component {

    state = {
        essays: []
    }

    getEssays = () => {
        fetch('http://localhost:8080/api/essays')
            .then(response => response.json())
            .then(data => console.log(data));
    };
    
    // axios.get('http://localhost:8080/api/name')
    // .then((resp) => {
    //   const data = resp.data;
    //   this.setState({ essays: data })
    //   console.log('Data has been recieved');
    //   console.log(`Data: ${this.state.essays}`);
    // })
    // .catch(() => {
    //   alert('Error retrieving data')
    // })
      componentDidMount = () => {
          this.getEssays();
      }

    render() {
        return (
            <div>
                <h2>Essays</h2>
            </div>
        );
    }
}

export default EssaysContainer;