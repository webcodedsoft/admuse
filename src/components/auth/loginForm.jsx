import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Joi from 'joi-browser';
import auth from '../../services/authService';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from './../common/form';
import axios from 'axios';

axios.interceptors.response.use(null, error => {
    const expectedError = (error.response) ? error.response.status : null;
    if(expectedError === 401) {
        console.log("Loggin the error", error);
        toast.error("Error: Access Denied, Invalid Login Credentials.");
    }
    return Promise.reject(error);
});

class LoginForm extends Form {
    state = { 
        data: {
                email : "",
                password : ""
        },
        errors: {}
     }

     schema = {
        email:Joi.string().email().required().label("Email Address"),
        password:Joi.string().min(4).required().label("Password"),
    }

    componentDidMount() {
        const user = auth.getCurrentUser();
        if(user) this.props.history.push('/');
    }

    async doSubmit() {
        const {data} = this.state;
        await auth.login(data.email, data.password);

        const { state } = this.props.location;
        window.location = state ? state.from.pathname : '/';
    }

    renderButton(label) {
        return (
                <button disabled={this.validate()} className="btn abtn abtn-round btn-lg btn-block">
                    {label}
                </button>
                );
    }

    render() { 
        if(auth.getCurrentUser()) return <Redirect to="/" />;
        return ( 
            <React.Fragment>
                <div className="page-auth">
                <div className="overlay">
                <ToastContainer />
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row justify-content-center">
                                <div className="col-sm-6">
                                    <div className="auth">
                                        <div className="auth-header">
                                            <h3>Log into account</h3>
                                        </div>
                                        <div className="body">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    {this.renderInput('email', 'Email Address')}
                                                </div>

                                                <div className="col-sm-12">
                                                    {this.renderInput('password', 'Password', 'password')}
                                                </div>

                                                <div className="col-sm-12">
                                                    <br />
                                                    { this.renderButton("Log In") }
                                                    <br /><br />
                                                    <p>Don't have an account? <Link to="/register">Register Here!</Link> -or- <Link to="/">Go home</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default LoginForm;