import React from 'react';
import Joi from 'joi-browser';
import 'react-toastify/dist/ReactToastify.css';

import Form from '../../common/form';
import Dashboard from '../../common/dashboard';
import { createSocialClass, updateSocialClass } from './../../../services/mediaHouseService';
import { toast } from 'react-toastify';


class SocialClassForm extends Form {
    state = { 
        data: {name : ""},
        errors: {},
        social_class:""
     }

     schema = {
        id: Joi.string(),
        name:Joi.string().required().label("Social Class")
    }
    componentDidMount() {
        const social_class = this.props.match.params.social_class;
        if(social_class) {
           this.setState({ social_class, data: { name: social_class } });
        }
    }
    async doSubmit() {
        try{
            if(this.state.social_class) {
                const data = await updateSocialClass(this.state.social_class, this.state.data);
                this.props.history.push('/social-class/list');
                if(data.status === 200) {
                    toast.success('Social Class Updated');
                }
            } else {
                const data = await createSocialClass(this.state.data);
                this.props.history.push('/social-class/list');
                if(data.status === 200) {
                    toast.success('Social Class Added');
                }
            }
        } catch(ex) {
            console.log('Error '+ex);
        }
        
    }

    render() { 
        return ( 
            <Dashboard>
                <div className="white-bg">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row justify-content-center">
                                    <div className="col-sm-12">
                                        <h3 className="section-title">{ (this.state.social_class) ? 'Edit Social Class' : 'Add Social Class' }</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {this.renderInput('name', 'Social Class')}
                                            </div>
                                            <div className="col-sm-12">
                                                { this.renderButton("Save Social Class") }
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
 
export default SocialClassForm;