import React from 'react';
import Joi from 'joi-browser';
import 'react-toastify/dist/ReactToastify.css';

import Form from '../../common/form';
import Dashboard from '../../common/dashboard';
import { createSchedule, updateSchedule } from './../../../services/mediaHouseService';
import { toast } from 'react-toastify';


class ScheduleForm extends Form {
    state = { 
        data: {name : ""},
        errors: {},
        schedule: ""
     }

     schema = {
        id: Joi.string(),
        name:Joi.string().required().label("Schedule")
    }
    componentDidMount() {
        const schedule = this.props.match.params.schedule;
        if(schedule) {
           this.setState({ schedule, data: { name: schedule } });
        }
    }
    async doSubmit() {
        try{
            if(this.state.schedule) {
                const data = await updateSchedule(this.state.schedule, this.state.data);
                this.props.history.push('/schedule/list');
                if(data.status === 200) {
                    toast.success('Schedule Updated');
                }
            } else {
                const data = await createSchedule(this.state.data);
                this.props.history.push('/schedule/list');
                if(data.status === 200) {
                    toast.success('Schedule Added');
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
                                        <h3 className="section-title">{ (this.state.schedule) ? 'Edit Schedule' : 'Add Schedule' }</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {this.renderInput('name', 'Schedule')}
                                            </div>
                                            <div className="col-sm-12">
                                                { this.renderButton("Save Schedule") }
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
 
export default ScheduleForm;