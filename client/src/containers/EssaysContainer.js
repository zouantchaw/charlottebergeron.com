import React, { Component } from 'react';
import Essays from '../components/Essays'

class EssaysContainer extends Component {

    state = {
        essays: []
    }

    getEssays = () => {
        fetch('http://localhost:8080/api/essays')
            .then(response => response.json())
            .then(data => {
                this.setState({essays: data});
                console.log(`Data recieved: ${data}`);
                console.log(`State- Essays: ${this.state.essays}`)
            })
    };
    
      componentDidMount = () => {
          this.getEssays();
      }

    render() {
        return (
            <div>
                <h2>Essays</h2> 
                <Essays essays={this.state.essays}/>
            </div>
        );
    }
}

export default EssaysContainer;