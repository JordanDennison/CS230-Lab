import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';

export function Contact(){
    return(
        <div style={{width: 700,  
                  padding: 30 ,
                  margin: '0 auto',
                  justifyContent: 'center'}}> 
            <h4>Contact Us</h4> 
            <Form> 
            <Form.Group> 
                <Form.Label>First Name:</Form.Label> 
                <Form.Control type="text" 
                                placeholder="Enter your first name" /> 
                </Form.Group> 
                <Form.Group> 
                <Form.Label>Last Name:</Form.Label> 
                <Form.Control type="email" 
                                placeholder="Enter your last name" /> 
                </Form.Group> 
                <Form.Group> 
                <Form.Label>Email Address:</Form.Label> 
                <Form.Control type="number" placeholder="Enter your email" /> 
                </Form.Group> 

                <Form.Group> 
                <Form.Label>Message:</Form.Label> 
                <Form.Control type="number" placeholder="Enter your message" /> 
                </Form.Group> 

                

                <Button variant="primary" type="submit"> 
                Click here to submit form 
                </Button> 
            </Form> 
        </div> 
    )
}