import React from 'react';
import { Link } from 'react-router-dom';
import Joi from 'joi-browser';
import auth from '../../services/authService';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from './../common/form';

class RegisterForm extends Form {
    state = { 
        data: {
                name : "",
                email : "",
                password : "",
                type : "advertiser",
        },
        errors: {},
        advertise:true,
        publisher:false
     }

     schema = {
        id: Joi.string(),
        name:Joi.string().required().label("Full Name"),
        email:Joi.string().email().required().label("Email Address"),
        password:Joi.string().min(4).required().label("Password"),
        type: Joi.string(),
    }

    componentDidMount() {
        const user = auth.getCurrentUser();
        if(user) this.props.history.push('/');
    }
    
    async doSubmit() {
        try{
            const { data } = await auth.register(this.state.data);
            console.log(data);
            if(data.statusText === "error") {
                toast.error(`Error: ${data.result.errors.message}:`);
            } else {
                auth.login(data.email, data.password);
                this.props.history.push('/');
            }
        } catch(ex) {
            if(ex.response && ex.response.statusCode === 400) {
                const errors = {...this.state.errors};
                console.log(ex);
                errors.username = ex.response.result.errors.email[0];
                this.setState({errors});
            }
        }
        
    }

    renderButton(label) {
        return (
                <button disabled={this.validate()} className="btn abtn abtn-round btn-lg btn-block">
                    {label}
                </button>
                );
    }

    handleTypeChange = (e) => {
        e.preventDefault();
        const advertise = !this.state.advertise;
        const publisher = !this.state.publisher;
        let type = "advertiser";
        if(advertise === true) {
            type = 'advertiser';
        } else if(publisher === true) {
            type = 'publisher';
        }
        let { data } = {...this.state};
        data['type'] = type;

        console.log(data);
        this.setState({advertise, publisher, data });
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="page-auth">
                <div className="overlay">
                <ToastContainer />
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row justify-content-center align-items-center">
                                <div className="col-sm-6">
                                <div className="auth" style={{marginTop:'12%'}}>
                                        <div className="auth-header">
                                            <h3>Create an account</h3>
                                        </div>
                                        <div className="body">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                {this.renderInput('name', 'Fullname')}
                                            </div>
                                            <div className="col-sm-12">
                                                {this.renderInput('email', 'Email Address')}
                                            </div>

                                            <div className="col-sm-12">
                                                {this.renderInput('password', 'Password')}
                                            </div>

                                            <div className="col-sm-6 text-align-center">
                                                <button className={ (this.state.advertise) ? "acc-button active" : "acc-button" } onClick={this.handleTypeChange}><img  src='/images/advertise-icon.png' style={{width:'64px',height:'64px'}} alt="advertise"/></button>
                                                <p>I want to advertise</p>
                                            </div>
                                            <div className="col-sm-6 text-align-center">
                                                <button className={ (this.state.publisher) ? "acc-button active" : "acc-button" } onClick={this.handleTypeChange}><img  src='/images/advertiser-icon.png' style={{width:'64px',height:'64px'}} alt="advertise"/></button>
                                                <p>I want to list my slots</p>
                                            </div>

                                            <div className="col-sm-12">
                                                <br />
                                                { this.renderButton("Create Account") }
                                                <br /><br />
                                                <p>Already have an account? <Link to="/login">Sign In!</Link> -or- <Link to="/">Go home</Link></p>
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
 
export default RegisterForm;