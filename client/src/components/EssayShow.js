import React, { Component } from 'react';

class EssayShow extends Component {

    state = {
        essays: []
    }


    getEssays = () => {
        fetch('http://localhost:8080/api/essays')
            .then(response => response.json())
            .then(data => {
                this.setState({essays: data});
                console.log(`Data recieved: ${data[0]}`);
                console.log(`State- Essays: ${this.state.essays}`)
            })
    };

    componentDidMount = () => {
        this.getEssays();
        console.log(this.props.essays)
    }


    render() {
        return (
            <div>
                Test
            </div>
        );
    }
}

export default EssayShow;