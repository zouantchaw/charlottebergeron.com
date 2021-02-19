import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <div>
                <h2>
                    <Jumbotron>
                        <h1>Bienvenue, je suis Charlotte.</h1>
                        <p>
                        Ici, à travers mes <a href='/essays'>essais</a>, vous avez accès à mes idées et aux thèmes sur lesquels je réfléchis présentement.
                        </p>
                    </Jumbotron>
                    
                </h2>
            </div>
        );
    }
}

export default Home;