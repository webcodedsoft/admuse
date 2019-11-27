import React from 'react';
import Joi from 'joi-browser';
import { Redirect } from 'react-router-dom';
import Form from '../../common/form';
import FrontPage from './../../common/frontPage';
import Select from './../../common/Select';
import { getSubChannels, getChannels, getMediaHouseByChannel } from '../../../services/mediaHouseService';
import { mapProgramAttributToSelect } from './../../../services/mediaHouseService';
import { getSlotsByQuery } from '../../../services/slotService';

class SearchSlot extends Form {
    state = { 
        results:[],
        data: {
            query: "Faaji",
            reach_min: "100",
            reach_max: "1000",
            price_min: "100",
            price_max: "2000",
            media_house_ids: "1",
            channel_ids: "",
            sub_channel_ids: ""
        },
        errors: {},
        channels:[],
        subchannels: [{}],
        mediahouses: [{}],
     }
     schema = {
         query: Joi.string().required().label("Search Query"),
         reach_min: Joi.number().label("Minimum Reach"),
         reach_max: Joi.number().label("Maximum Reach"),
         price_min: Joi.number().label("Minimum Price"),
         price_max: Joi.number().label("Maximum Price"),
         media_house_ids: Joi.string(),
         channel_ids: Joi.string(),
         sub_channel_ids: Joi.string()
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
        const { results } = this.state;
        return ( 
            <FrontPage>
                <div className="container">
                { this.state.results.length > 0 && 
                    <Redirect to={{ pathname: "/media-house/slot/search/result",state:{results} }} />
                }
                <form onSubmit={this.handleSubmit}>
                                <div className="row justify-content-center">
                                    <div className="col-sm-12">
                                        <h3 className="section-title">Search For Slots</h3>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                {this.renderInput('query', 'Search')}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderInput('reach_min', 'Minimum Reach')}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderInput('reach_max', 'Maximum Reach')}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderInput('price_min', 'Minimum Price')}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderInput('price_max', 'Maximum Price')}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderChannelSelect('channel_ids','Channel',this.state.channels)}
                                            </div>
                                            <div className="col-sm-6">
                                                {this.renderSelect('sub_channel_ids', 'Sub Channel',this.state.subchannels)}
                                            </div>
                                            <div className="col-sm-12">
                                                {this.renderSelect('media_house_ids', 'Media House',this.state.mediahouses)}
                                            </div>
                                            <div className="col-sm-12">
                                                <br />
                                                { this.renderButton("Search Slots") }
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
 
export default SearchSlot;
                                            