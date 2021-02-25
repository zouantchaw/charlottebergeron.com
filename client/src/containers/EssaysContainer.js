import React, { Component } from 'react';
import axios from 'axios';
import Essays from '../components/Essays'
import { Route } from 'react-router-dom';
import EssayShow from '../components/EssayShow'

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

    renderEssays = () => {
        debugger
    }
    
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
                <Essays essays={this.state.essays}/>
                <Route path={`${this.props.match.url}/:essayTitle`} render={routerProps => <EssayShow {...routerProps} essays={this.state.essays} />} />                
                {/* <Route path={`${this.props.match.url}/:essayTitle`} render={routerProps => <EssayShow {...routerProps} essays={this.state.essays} />} />                 */}
            </div>
        );
    }
}

export default EssaysContainer;