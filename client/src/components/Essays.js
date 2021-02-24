import React, { Component } from 'react';
import {Card, Button } from 'react-bootstrap'
import '../Box.css'
import { Container, Row, Col } from 'reactstrap';

class Essays extends Component {

    renderEssays = () => { 
        console.log(this.props.essays)
        return this.props.essays.map(essay => (
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="/assets/yellowBackground.jpeg" /> */}
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            ));
        };
        
        render() {
            return (
                <Container>
                    <div>
                    <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="/assets/yellowBackground.jpeg" /> */}
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="/assets/yellowBackground.jpeg" /> */}
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="/assets/yellowBackground.jpeg" /> */}
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        {/* <Card.Img variant="top" src="/assets/yellowBackground.jpeg" /> */}
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
                        
                    </div>
                </Container>
        );
    }
}
// {this.renderEssays()}
// <li>{essay.body}</li>

export default Essays;