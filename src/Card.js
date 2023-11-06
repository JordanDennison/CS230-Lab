import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function BasicExample() {
    return (
        <div>
        <h1>Card Components</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '18rem', borderRadius: '10px', marginRight: '10px' }}>
                <Card.Body style={{backgroundColor: 'blue', borderRadius: '10px'}}>
                    <Card.Title style={{color: 'white'}}>Card 1</Card.Title>
                    <hr style={{borderTop: '1px solid white', marginBottom: '10px'}} />
                    <Card.Text style={{color: 'white'}}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', borderRadius: '10px', marginRight: '10px' }}>
                <Card.Body style={{backgroundColor: 'red', borderRadius: '10px'}}>
                    <Card.Title style={{color: 'white'}}>Card 2</Card.Title>
                    <hr style={{borderTop: '1px solid white', marginBottom: '10px'}} />
                    <Card.Text style={{color: 'white'}}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', borderRadius: '10px' }}>
                <Card.Body style={{backgroundColor: 'green', borderRadius: '10px'}}>
                    <Card.Title style={{color: 'white'}}>Card 3</Card.Title>
                    <hr style={{borderTop: '1px solid white', marginBottom: '10px'}} />
                    <Card.Text style={{color: 'white'}}>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </div>
    );
}

export default BasicExample;