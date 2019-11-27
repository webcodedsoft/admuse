import React from 'react';
import Joi from 'joi-browser';
import Form from '../../common/form';
import FrontPage from './../../common/frontPage';
import Select from './../../common/Select';
import { getSubChannels, getChannels, getMediaHouseByChannel } from '../../../services/mediaHouseService';
import { mapProgramAttributToSelect } from './../../../services/mediaHouseService';
import { getSlotsByQuery } from '../../../services/slotService';

class ChooseSlot extends Form {
    state = { 
        results:[],
        data: {
            channel_ids: "",
            sub_channel_ids: "",
            type: Joi.string().required().label("Slot Type"),
            size: "",
            location: "",
            interest: "",
            social_class: "",
            age_group: "",
            quantity: "",
            start_date: "",
            end_date: "",
            price: "",
        },
        errors: {},
        channels:[],
        subchannels: [{}],
        mediahouses: [{}],
     }
     schema = {
         channel_ids: Joi.string(),
         sub_channel_ids: Joi.string(),
         type: Joi.string().required().label("Slot Type"),
         size: Joi.string().required().label("Slot Size"),
         location: Joi.string().required().label("Location"),
         interest: Joi.string().required().label("Interest"),
         social_class: Joi.string().required().label("Social Class"),
         age_group: Joi.string().required().label("Age Group"),
         quantity: Joi.number().required().label("Quantity"),
         start_date: Joi.string().required().label("Start Date"),
         end_date: Joi.string().required().label("End Date"),
         price: Joi.number().required().label("Price"),
     }

     async componentDidMount() {
        const channels = await getChannels();
        this.setState({channels: mapProgramAttributToSelect(channels.data.result)});
    }

     renderChannelSelect(name, label, options=[]) {
        const {data, errors} = this.state;
        return(
            <Select 
                value={data[name]} 
                error={errors[name]} 
                name={name} 
                label={label} 
                onChange={ this.handleChannelChange} 
                options={options}
            />
        );
    }
    handleChannelChange = async ({currentTarget: input}) => {
        let channel = input[input.selectedIndex].text;
        const data = {...this.state.data}
        data[input.name] = input[input.selectedIndex].value;
        const response = await getSubChannels(channel);
        const mediahouses = await getMediaHouseByChannel(channel);
        this.setState({ data, 
                        subchannels: mapProgramAttributToSelect(response.data.result), 
                        mediahouses: mapProgramAttributToSelect(mediahouses.data.result) });
    }
    async doSubmit() {
        const {data} = await getSlotsByQuery(this.state.data);
        const {results} = this.state;
        results.push(data.result);
        this.setState({ results });
    }
    render() { 
        return ( 
            <FrontPage>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                                <div className="row justify-content-center">
                                    <div className="col-sm-12">
                                        <h3 className="section-title">Choose Slot to name your price</h3>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {this.renderChannelSelect('channel_ids','Channel',this.state.channels)}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderSelect('sub_channel_ids', 'Sub Channel',this.state.subchannels)}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderChannelSelect('type','Slot Type',[{}])}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderChannelSelect('size','Slot Size',[{}])}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderChannelSelect('location','Audience Location',[{}])}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderChannelSelect('interest','Audience Interest',[{}])}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderChannelSelect('social_class','Audience Social Class',[{}])}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderChannelSelect('age_group','Audience Age Group',[{}])}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderInput('quantity', 'Quantity')}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderInput('start_date', 'Start Date','date')}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderInput('end_date', 'End Date','date')}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderInput('price', 'Your Price')}
                                            </div>
                                            <div className="col-sm-12">
                                                <br />
                                                { this.renderButton("Submit") }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                </div>
            </FrontPage>
         );
    }
}
 
export default ChooseSlot;
                                            