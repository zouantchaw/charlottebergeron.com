import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'

class About extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                <div>
                    <h3>Bienvenue, je suis Charlotte.</h3>
                </div>

                <div>
                    <p>
                        Je suis une étudiante universitaire qui essaie d'interagir avec la société qui existe en dehors de l’école. Principalement, je suis ici pour penser à voix haute et, je l’espère, recevoir vos feedback.

                    <br />
                    <br />
                        Partagez vos impressions avec moi et commençons une discussion.
                    </p>
                </div>
                </Jumbotron>
            </div>
        );
    }
}

export default About;