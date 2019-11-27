import React from 'react';
import Joi from 'joi-browser';
import 'react-toastify/dist/ReactToastify.css';

import Form from '../../common/form';
import { createType } from '../../../services/mediaHouseService';
import Dashboard from '../../common/dashboard';


class TypeForm extends Form {
    state = { 
        data: {name : ""},
        errors: {}
     }

     schema = {
        id: Joi.string(),
        name:Joi.string().required().label("Type")
    }

    async doSubmit() {
        try{
            const data = await createType(this.state.data);
            console.log(data);
            this.props.history.push('/types/list');
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
                                        <h3 className="section-title">Create Type</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {this.renderInput('name', 'Type')}
                                            </div>
                                            <div className="col-sm-12">
                                                { this.renderButton("Save Type") }
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
 
export default TypeForm;