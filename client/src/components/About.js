import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'

class About extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                <div>
                    <h3>Hi, I'm Charlotte.</h3>
                </div>

                <div>
                    <p>
                    I am a college student trying to interact more with the real world (meaning the world that is happening outside of school). I am mainly here to think out loud and hopefully get some feedback.

                    <br />
                    <br />
                        Let me know your impressions and let’s start a discussion.
                    </p>
                </div>
                </Jumbotron>
            </div>
        );
    }
}

export default About;