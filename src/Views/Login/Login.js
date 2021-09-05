import React from 'react';
import { LoginForm } from './style';
import { Form, Button, Col, Row} from 'react-bootstrap';
import LoginImage from '../../assets/loginimg.jpg';

const Login = () => {
    return (
        <LoginForm>
            <Row>
                <Col>
                    <img src={LoginImage} className="loginimg" alt="image" />
                </Col>
                <Col className="padding">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button type="submit">
                            Sign In
                        </Button>
                        <Button variant="text" className="forgetbtn">Forgot Your Password ?</Button>
                    </Form>
                </Col>
            </Row>
        </LoginForm>
    )
}

export default Login
