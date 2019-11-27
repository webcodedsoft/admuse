import React from 'react';
import Joi from 'joi-browser';
import 'react-toastify/dist/ReactToastify.css';

import Form from '../../common/form';
import Dashboard from '../../common/dashboard';
import { updateSize, createSize } from './../../../services/mediaHouseService';
import { toast } from 'react-toastify';


class SizeForm extends Form {
    state = { 
        data: {name : ""},
        errors: {},
        size: ""
     }

     schema = {
        id: Joi.string(),
        name:Joi.string().required().label("Size Metric")
    }
    componentDidMount() {
        const size = this.props.match.params.size;
        if(size) {
           this.setState({ size, data: { name: size } });
        }
    }
    async doSubmit() {
        try{
            if(this.state.size) {
                const data = await updateSize(this.state.size, this.state.data);
                console.log(data);
                this.props.history.push('/sizes/list');
                if(data.status === 200) {
                    toast.success('Size Updated');
                }
            } else {
                const data = await createSize(this.state.data);
                this.props.history.push('/sizes/list');
                if(data.status === 200) {
                    toast.success('Size Added');
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
                                        <h3 className="section-title">{ (this.state.size) ? 'Edit Size Metric' : 'Add Size Metric' }</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {this.renderInput('name', 'Size Metric')}
                                            </div>
                                            <div className="col-sm-12">
                                                { this.renderButton("Save Metric") }
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
 
export default SizeForm;