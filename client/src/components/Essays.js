import React, { Component } from 'react';
import { Card, Button, CardColumns } from 'react-bootstrap'
import '../Box.css'
import Link from "react-router-dom";

class Essays extends Component {

    renderEssays = () => { 
        console.log(this.props.essays)
        return this.props.essays.map(essay => (
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{essay.title}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Read</Card.Link>
                    {/* <Link to="/test">Read</Link> */}
                </Card.Body>
                </Card>
            ));
        };
        
        render() {
            return (
                <CardColumns>
                    {this.renderEssays()}
                </CardColumns>
        );
    }
}
// <li>{essay.body}</li>

export default Essays;