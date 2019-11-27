import React from 'react';
import Joi from 'joi-browser';
import http from '../../services/httpService';
import config from "../../config.json";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from './../common/form';
import Dashboard from './../common/dashboard';
import {getMediaHouse, updateMediaHouse} from '../../services/mediaHouseService';

import Script from 'react-load-script';
import {google_places_key} from '../../config';

class MediaHouseForm extends Form {
    state = {
        data: {
            name: "",
            address: "",
            mobile: "",
            email: "",
            description: "",
            contact_person: "null",
            apcon_number: "",
            mission: "",
            vision: ""
        },
        errors: {},
        media_house: ""
    };

    schema = {
        id: Joi.string(),
        name: Joi.string().required().label("Media House Name"),
        address: Joi.string().required().label("Address"),
        mobile: Joi.string().required().label("Mobile Number"),
        email: Joi.string().email().required().label("Email Address"),
        contact_person: Joi.string(),
        apcon_number: Joi.any(),
        mission: Joi.string(),
        vision: Joi.string(),
        description: Joi.string()
    };

    async componentDidMount() {
        const media_house_id = this.props.match.params.shortname;
        if (media_house_id) {
            const {data} = await getMediaHouse(media_house_id);
            let payload = {...this.state.data};
            payload['name'] = (data.result.name) ? data.result.name : "";
            payload['address'] = (data.result.address) ? data.result.address : "";
            payload['mobile'] = (data.result.mobile) ? data.result.mobile : "";
            payload['email'] = (data.result.email) ? data.result.email : '';
            payload['description'] = (data.result.description) ? data.result.description : "";
            payload['contact_person'] = (data.result.contact_person) ? data.result.contact_person : 'demo';
            payload['apcon_number'] = (data.result.apcon_number) ? data.result.apcon_number : '';
            payload['mission'] = (data.result.mission) ? data.result.mission : '';
            payload['vision'] = (data.result.vision) ? data.result.vision : '';
            this.setState({data: payload, media_house: media_house_id});
        }
    }

    

    async doSubmit() {
        try {
            if (this.state.media_house) {
                const data = await updateMediaHouse(this.state.media_house, this.state.data);
                if (data.statusText === "error") {
                    toast.error(data.result.message);
                } else {
                    this.props.history.push('/media-house');
                    toast.success('Media House has been updated successfully!');
                }
            } else {
                const data = await http.post(config.apiEndPoint + '/media/create', this.state.data);
                this.props.history.push('/media-house');
                if (data.statusText === "error") {
                    toast.error(data.result.message);
                } else {
                    this.props.history.push('/media-house');
                    toast.success('Media House was been created successfully!');
                }
            }

        } catch (ex) {
            console.log('Error ' + ex);
        }

    }

    renderButton(label) {
        return (
            <button className="btn abtn abtn-2">
                {label}
            </button>
        );
    }

    handleScriptLoad = () => {   // Declare Options For Autocomplete 
        var options = { types: ['address'],componentRestrictions: {country: 'ng'}}; 
        
        // Initialize Google Autocomplete 
        /*global google*/
        this.autocomplete = new google.maps.places.Autocomplete(
                              document.getElementById('address'),
                              options );  // Avoid paying for data that you don't need by restricting the 
        // set of place fields that are returned to just the address
        // components and formatted address
        this.autocomplete.setFields(['address_components',   
                                     'formatted_address']);  // Fire Event when a suggested name is selected
        this.autocomplete.addListener('place_changed',
                                      this.handlePlaceSelect); 
    }

    handlePlaceSelect = () => {

        // Extract City From Address Object
        const addressObject = this.autocomplete.getPlace();
        const address = addressObject.address_components;
        console.log(address);
        // Check if address is valid
        if (address) {
          // Set State
          const {data} = this.state;
          data['address'] = addressObject.formatted_address
          this.setState({ data });
        }
    }

    render() {
        return (
            <Dashboard>
                <Script url={`https://maps.googleapis.com/maps/api/js?key=${google_places_key}&libraries=places`}  
                        onLoad={this.handleScriptLoad} /> 
                <div className="white-bg">
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row justify-content-center">
                                <div className="col-sm-12">
                                    <h3 className="section-title">Create Media House</h3>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            {this.renderInput('name', 'Media House Name*')}
                                        </div>
                                        <div className="col-sm-12">
                                            {this.renderTextArea('description', 'Description')}
                                        </div>
                                        <div className="col-sm-6">
                                            {this.renderInput('address', 'Media House Address*')}
                                        </div>

                                        <div className="col-sm-6">
                                            {this.renderInput('apcon_number', 'APCON No')}
                                        </div>

                                        <div className="col-sm-6">
                                            {this.renderInput('mobile', 'Mobile Number*')}
                                        </div>
                                        <div className="col-sm-6">
                                            {this.renderInput('email', 'Email Address*')}
                                        </div>

                                        <div className="col-sm-6">
                                            {this.renderTextArea('mission', 'Mission')}
                                        </div>
                                        <div className="col-sm-6">
                                            {this.renderTextArea('vision', 'Vision')}
                                        </div>
                                        <div className="col-sm-12">
                                            <br/>
                                            {this.renderButton("Save Media House")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Dashboard>
        );
    }
}

export default MediaHouseForm;