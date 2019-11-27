import React from 'react';
import Joi from 'joi-browser';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from './../common/form';
import Dashboard from './../common/dashboard';
import { createUser, getUserById, updateUser } from './../../services/userService';

class UserForm extends Form {
    state = { 
        data: {
                name : "",
                email : "",
                password : "",
                type : "",
                phone: "",
                business_name:"",
                sector:"",
                address:"",
                website:"",
                product_and_services: ""
        },
        errors: {},
        user_id:'',
        edit: false 
     }

     schema = {
        id: Joi.string(),
        name:Joi.string().required().label("Full Name"),
        email:Joi.string().email().required().label("Email Address"),
        password:Joi.any().label("Password"),
        type: Joi.any(),
        phone: Joi.any(),
        business_name:Joi.any(),
        sector:Joi.any(),
        address:Joi.any(),
        website:Joi.any(),
        product_and_services: Joi.any()
    }
    
    async componentDidMount() {
        const user_id = this.props.match.params.user;
        if (user_id) {
            const {data} = await getUserById(user_id);
            console.log(data);
            let payload = {...this.state.data};
            payload['name'] = data.result.name;
            payload['email'] = data.result.email;
            payload['type'] = data.result.type;
            payload['phone'] = (data.result.phone) ? data.result.phone : '';
            payload['business_name'] = (data.result.business_name) ? data.result.business_name : '';
            payload['sector'] = (data.result.sector) ? data.result.sector : '';
            payload['address'] = (data.result.address) ? data.result.address : '';
            payload['website'] = (data.result.website) ? data.result.website : '';
            payload['product_and_services'] = (data.result.product_and_services) ? data.result.product_and_services : '';
            this.setState({data: payload, user_id, edit:true});
        }
    }
    async doSubmit() {
        if(!this.state.edit) {
            try{
                const { data } = await createUser(this.state.data);
                console.log(data);
                if(data.statusText === "error") {
                    toast.error(`Error: ${data.result.errors.message}:`);
                } else {
                    this.props.history.push('/users');
                    toast.success(`User account created`);
                }
            } catch(ex) {
                console.log(ex);
            }    
        } else {
            try{
                const { data } = await updateUser(this.state.user_id,this.state.data);
                if(data.statusText === "error") {
                    toast.error(`Error: ${data.result.errors.message}:`);
                } else {
                    this.props.history.push('/users');
                    toast.success(`User account updated`);
                }
            } catch(ex) {
                console.log(ex);
            }    
        }
        
    }

    renderButton(label) {
        return (
                <button className="btn abtn abtn-2">
                    {label}
                </button>
                );
    }

    render() { 
        return ( 
            <Dashboard>
                <div className="white-bg">
                    
                        <form onSubmit={this.handleSubmit}>
                        <div className="container">
                            <h3 className="section-title" style={{marginLeft: '-2px'}}>{ (!this.state.user_id) ? 'Create User Account' : 'Edit User' }</h3>
                            <div className="row">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {this.renderInput('name', 'Fullname')}
                                            </div>
                                            { !this.state.edit &&
                                            <React.Fragment>
                                                <div className="col-sm-6">
                                                    {this.renderInput('email', 'Email Address')}
                                                </div>

                                                <div className="col-sm-6">
                                                    {this.renderInput('password', 'Password','password')}
                                                </div>

                                                <div className="col-sm-6">
                                                    {this.renderSelect('type', 'Type',[{key: "user", value:"Regular User"},
                                                                                        {key: "publisher", value:"Publisher"},
                                                                                        {key: "administrator", value:"Administrator"}])}
                                                </div>
                                            </React.Fragment>
                                            }{ this.state.edit && 
                                                <React.Fragment>
                                                    <div className="col-sm-6">
                                                        {this.renderInput('phone', 'Phone Number')}
                                                    </div>
                                                    <div className="col-sm-6">
                                                        {this.renderInput('business_name', 'Business Name')}
                                                    </div>
                                                    <div className="col-sm-6">
                                                        {this.renderInput('sector', 'Sector')}
                                                    </div>
                                                    <div className="col-sm-6">
                                                        {this.renderInput('address', 'Address')}
                                                    </div>
                                                    <div className="col-sm-6">
                                                        {this.renderInput('website', 'Website')}
                                                    </div>
                                                    <div className="col-sm-6">
                                                        {this.renderInput('product_and_services', 'Product and Service')}
                                                    </div>
                                                </React.Fragment> 
                                            }
                                            <div className="col-sm-12">
                                                <br />
                                                { this.renderButton((!this.state.user_id) ? 'Create User' : 'Edit User') }
                                                <br /><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </form>
                                   
                </div>
            </Dashboard>
         );
    }
}
 
export default UserForm;