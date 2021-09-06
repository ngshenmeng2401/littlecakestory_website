import React, {Component, useState, useEffect} from 'react';
import { RegisterForm } from './style';
import { Form, Button, Col, Row, Toast } from 'react-bootstrap';
import SignupImage from '../../assets/signup1.jpg';
import PropTypes from 'prop-types';
import axios from 'axios';

export class Register extends Component {

    static propTypes = {
        name: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string,
        confirmPassword: PropTypes.string,
        isLenthy: PropTypes.bool,
    };

    constructor(props) {
        super(props)
    
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            isLenthy: false,
        }
    }

    handleInput = (e) => {

        this.setState (() => {
            return {
                name: this.name.value,
                email: this.email.value,
                password: this.password.value,
                confirmPassword: this.confirmPassword.value,
            };
        })

        if(this.password.value.length >7 ){

            this.setState (() => {
                return {
                    isLenthy: true,
                };
            });
        }else {
            this.setState (() => {
                return {
                    isLenthy: false,
                };
            });
        }
    }

    handleSubmit = (e) => {

        e.preventDefault();
        // console.log (this.state);

        let formData = new FormData();
        // formData.append("name",this.state.name);
        formData.append("email",this.state.email);
        // formData.append("password",this.state.password);
        const url = "https://javathree99.com/s271059/reactJS_tutorial/register_user.php";

        if(this.state.password != this.state.confirmPassword){
            alert("Both password are different!");

        }else{
            axios.post(url,formData).then(response =>{
                console.log(response.data);
            }).catch(error =>{
                console.log(error);
            })
        }

        // console.log(formData.get('email'));
    }

    render() {

        const {name, email, password, confirmPassword} = this.state;

        return (
            <RegisterForm>
            <Row>
                <Col className="signupbtn">
                    <h3>Create Account</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-2" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control required  
                                type="text" 
                                placeholder="Enter name" 
                                onChange={this.handleInput} 
                                name="name" 
                                value={name} 
                                ref={(name) => this.name = name}/>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required  
                                type="email" 
                                placeholder="Enter email" 
                                onChange={this.handleInput} 
                                name="email" 
                                value={email} 
                                ref={(email) => this.email = email}/>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required  
                                type="password" 
                                placeholder="Password" 
                                onChange={this.handleInput} 
                                name="password"  
                                value={password} 
                                ref={(password) => this.password = password}/>
                        </Form.Group>
                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control required  
                                type="password" 
                                placeholder="Confirm Password" 
                                onChange={this.handleInput} 
                                name="confirmPassword" 
                                value={confirmPassword} 
                                ref={(confirmPassword) => this.confirmPassword = confirmPassword}/>
                        </Form.Group>
                        <ul className="mb-2">
                            <li className={this.state.isLenthy ? "text-success" : "text-danger"}>
                                Min 8 characters
                            </li>
                        </ul>
                        <Button type="submit" disabled={!this.state.isLenthy}>
                            Sign Up
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <img src={SignupImage} alt="img" className="signupimg" />
                </Col>
            </Row>
        </RegisterForm>
        )
    }
}

export default Register

