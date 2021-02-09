import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <div>
                <h2>
                    <Jumbotron>
                        <h1>Welcome, I’m Charlotte.</h1>
                        <p>
                        Here you will get to know more about my ideas and themes I am currently reflecting about through my <a href='/'>essays</a>.
                        </p>
                    </Jumbotron>
                </h2>
            </div>
        );
    }
}

export default Home;