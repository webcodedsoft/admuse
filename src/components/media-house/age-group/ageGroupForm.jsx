import React from 'react';
import Joi from 'joi-browser';
import 'react-toastify/dist/ReactToastify.css';

import Form from '../../common/form';
import { createAgeGroup, updateAgeGroup } from '../../../services/mediaHouseService';
import Dashboard from '../../common/dashboard';
import { toast } from 'react-toastify';


class AgeGroupForm extends Form {
    state = { 
        data: {name : ""},
        errors: {},
        ageGroup: ""
     }
     componentDidMount() {
         const ageGroup = this.props.match.params.agegroup;
         if(ageGroup) {
            this.setState({ ageGroup, data: { name: ageGroup } });
         }
     }
     schema = {
        id: Joi.string(),
        name:Joi.string().required().label("Age Group")
    }

    async doSubmit() {
        try{
            if(this.state.ageGroup) {
                const data = await updateAgeGroup(this.state.ageGroup, this.state.data);
                this.props.history.push('/age-group/list');
                if(data.status === 200) {
                    toast.success('Age Group Updated');
                }
            } else {
                const data = await createAgeGroup(this.state.data);
                this.props.history.push('/age-group/list');
                if(data.status === 200) {
                    toast.success('Age Group Added');
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
                                        <h3 className="section-title">{ (this.state.ageGroup) ? 'Edit Age Group' : 'Add New Age Group' }</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {this.renderInput('name', 'Age Group')}
                                            </div>
                                            <div className="col-sm-12">
                                                { this.renderButton("Save Age Group") }
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
 
export default AgeGroupForm;