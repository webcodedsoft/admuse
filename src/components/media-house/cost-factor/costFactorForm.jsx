import React from 'react';
import Joi from 'joi-browser';
import 'react-toastify/dist/ReactToastify.css';

import Form from '../../common/form';
import { createCostFactor, updateCostFactor } from '../../../services/mediaHouseService';
import Dashboard from '../../common/dashboard';
import { toast } from 'react-toastify';


class CostFactorForm extends Form {
    state = { 
        data: {name : ""},
        errors: {},
        cost_factor: ""
     }

     schema = {
        id: Joi.string(),
        name:Joi.string().required().label("Cost Factor")
    }
    componentDidMount() {
        const cost_factor = this.props.match.params.cost_factor;
        if(cost_factor) {
           this.setState({ cost_factor, data: { name: cost_factor } });
        }
    }
    async doSubmit() {
        try{
            if(this.state.cost_factor) {
                const data = await updateCostFactor(this.state.cost_factor, this.state.data);
                this.props.history.push('/cost-factor/list');
                if(data.status === 200) {
                    toast.success('Cost Factor Updated');
                }
            } else {
                const data = await createCostFactor(this.state.data);
                this.props.history.push('/cost-factor/list');
                if(data.status === 200) {
                    toast.success('Cost Factor Added');
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
                                        <h3 className="section-title">{ (this.state.cost_factor) ? 'Edit Cost Factor' : 'Add Cost Factor' }</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {this.renderInput('name', 'Cost Factor')}
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
 
export default CostFactorForm;