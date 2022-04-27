import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './home.css';

class createAcc extends Component {
    render() {
    return (
        <div className="formContainer">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone #</Form.Label>
                    <Form.Control typer="tel" data-format="+1 (ddd)-(dddd)-(ddd)"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Skill</Form.Label>
                    <Form.Select>
                        <option>Computer Science</option>
                        <option>Finance</option>
                        <option>Engineering</option>
                        <option>Biology</option>
                        <option>Other</option>
                    </Form.Select>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );}
};

export default createAcc;