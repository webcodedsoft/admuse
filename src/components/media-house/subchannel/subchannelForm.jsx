import React from 'react';
import Joi from 'joi-browser';
import 'react-toastify/dist/ReactToastify.css';

import Form from '../../common/form';
import Dashboard from '../../common/dashboard';
import { createSubChannel, updateSubchannel } from './../../../services/mediaHouseService';
import { toast } from 'react-toastify';


class SubChannelForm extends Form {
    state = { 
        data: {name : ""},
        errors: {},
        channel: '',
        subchannel:'',
     }

     schema = {
        id: Joi.string(),
        name:Joi.string().required().label("Sub Channel Name")
    }

    componentDidMount () {
        const channel = this.props.match.params.channel;
        const subchannel = this.props.match.params.subchannel;
        if(subchannel) {
           this.setState({ subchannel, data: { name: subchannel } });
        }
        this.setState({ channel });
    }

    async doSubmit() {
        const { channel,subchannel } = this.state;
        try{
            if(this.state.subchannel) {
                const data = await updateSubchannel(channel, subchannel, this.state.data);
                this.props.history.push(`/channels/subchannels/list/${this.state.channel}`);
                if(data.status === 200) {
                    toast.success('Sub channel Updated');
                }
            } else {
                const data = await createSubChannel(channel, this.state.data);
                this.props.history.push(`/channels/subchannels/list/${this.state.channel}`);
                if(data.status === 200) {
                    toast.success('Sub channel Added');
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
                                        <h3 className="section-title">{ (this.state.subchannel) ? 'Edit Sub Channel' : 'Add Sub Channel' }</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {this.renderInput('name', 'Sub Channel')}
                                            </div>
                                            <div className="col-sm-12">
                                                { this.renderButton("Save Sub Channel") }
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
 
export default SubChannelForm;