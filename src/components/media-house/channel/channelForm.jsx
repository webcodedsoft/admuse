import React from 'react';
import Joi from 'joi-browser';
import 'react-toastify/dist/ReactToastify.css';

import Form from '../../common/form';
import Dashboard from '../../common/dashboard';
import { createChannel, updateChannel } from './../../../services/mediaHouseService';
import { toast } from 'react-toastify';


class ChannelForm extends Form {
    state = { 
        data: {name : ""},
        errors: {},
        channel: ""
     }

     schema = {
        id: Joi.string(),
        name:Joi.string().required().label("Channel Name")
     }
    componentDidMount() {
        const channel = this.props.match.params.channel;
        if(channel) {
           this.setState({ channel, data: { name: channel } });
        }
    }
    async doSubmit() {
        try{
            if(this.state.channel) {
                const data = await updateChannel(this.state.channel, this.state.data);
                this.props.history.push('/channels/list');
                if(data.status === 200) {
                    toast.success('Channel Updated');
                }
            } else {
                const data = await createChannel(this.state.data);
                this.props.history.push('/channels/list');
                if(data.status === 200) {
                    toast.success('Channel Added');
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
                                        <h3 className="section-title">{ (this.state.channel) ? 'Edit Channel' : 'Add Channel' }</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {this.renderInput('name', 'Channel')}
                                            </div>
                                            <div className="col-sm-12">
                                                { this.renderButton("Save Channel") }
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
 
export default ChannelForm;