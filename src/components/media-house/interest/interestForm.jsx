import React from 'react';
import Joi from 'joi-browser';
import 'react-toastify/dist/ReactToastify.css';

import Form from '../../common/form';
import { createInterest, updateInterest } from '../../../services/mediaHouseService';
import Dashboard from '../../common/dashboard';
import { toast } from 'react-toastify';


class InterestForm extends Form {
    state = { 
        data: {name : ""},
        errors: {},
        interest: ""
     }

     schema = {
        id: Joi.string(),
        name:Joi.string().required().label("Interest")
    }
    componentDidMount() {
        const interest = this.props.match.params.interest;
        if(interest) {
           this.setState({ interest, data: { name: interest } });
        }
    }
    async doSubmit() {
        try{
            if(this.state.interest) {
                const data = await updateInterest(this.state.interest, this.state.data);
                this.props.history.push('/interest/list');
                if(data.status === 200) {
                    toast.success('Interest Updated');
                }
            } else {
                const data = await createInterest(this.state.data);
                this.props.history.push('/interest/list');
                if(data.status === 200) {
                    toast.success('Interest Added');
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
                                        <h3 className="section-title">{ (this.state.interest) ? 'Edit Interest' : 'Add Interest' }</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {this.renderInput('name', 'Interest')}
                                            </div>
                                            <div className="col-sm-12">
                                                { this.renderButton("Save") }
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
 
export default InterestForm;