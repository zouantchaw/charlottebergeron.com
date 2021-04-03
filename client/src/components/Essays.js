import React, { Component } from 'react';
import { Card, Button, CardColumns } from 'react-bootstrap'
import '../Box.css'
import { Link } from "react-router-dom";

class Essays extends Component {

    renderEssays = () => { 
        let essayTitle;
        console.log(this.props)
        return this.props.essays.map(essay => (
            <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        {essayTitle = essay.title}
                        <Card.Title>{essay.title}</Card.Title>
                        <Card.Text>
                            Iploribus Unum
                        </Card.Text>
                        <Link key={essayTitle} to={`/essays/${essayTitle}`}>Read</Link>
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

export default Essays;