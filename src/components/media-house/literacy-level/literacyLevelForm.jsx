import React from 'react';
import Joi from 'joi-browser';
import 'react-toastify/dist/ReactToastify.css';

import Form from '../../common/form';
import { createLiteracyLevel, updateLiteracyLevel } from '../../../services/mediaHouseService';
import Dashboard from '../../common/dashboard';
import { toast } from 'react-toastify';


class LiteracyLevelForm extends Form {
    state = { 
        data: {name : ""},
        errors: {},
        level: ""
     }

     schema = {
        id: Joi.string(),
        name:Joi.string().required().label("Literacy Level")
    }
    componentDidMount() {
        const level = this.props.match.params.level;
        if(level) {
           this.setState({ level, data: { name: level } });
        }
    }
    async doSubmit() {
        try{
            if(this.state.level) {
                const data = await updateLiteracyLevel(this.state.level, this.state.data);
                this.props.history.push('/literacy-level/list');
                if(data.status === 200) {
                    toast.success('Level Updated');
                }
            } else {
                const data = await createLiteracyLevel(this.state.data);
                this.props.history.push('/literacy-level/list');
                if(data.status === 200) {
                    toast.success('Level Added');
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
                                        <h3 className="section-title">{ (this.state.level) ? 'Edit Literacy Level' : 'Add Literacy Level' }</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {this.renderInput('name', 'Literacy Level')}
                                            </div>
                                            <div className="col-sm-12">
                                                { this.renderButton("Save Level") }
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
 
export default LiteracyLevelForm;