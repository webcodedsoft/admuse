import React from 'react';
// import { Link } from 'react-router-dom';
import Joi from 'joi-browser';
import {
    createProgram,
    getAgeGroup,
    getChannels,
    getContactList,
    getCostFactor, getGenders,
    getInterests,
    getLiteracyLevel, getMaritalStatus,
    getProfessionalLevel,
    getSchedules,
    getSocialClass,
    getSubChannels,
    getTypes,
    mapDataToMultiSelect,
    mapProgramAttributToSelect,
    uploadProgramImages
} from '../../../services/mediaHouseService';

import Script from 'react-load-script';
import {google_places_key} from '../../../config';

import 'react-toastify/dist/ReactToastify.css';
import Select from './../../common/Select';
import Dashboard from './../../common/dashboard';
import ProgramFormUtils from '../../common/programFormUtils';
import {toast} from 'react-toastify'

class programForm extends ProgramFormUtils {
    state = {
        data: {
            genders: [],
            name: "",
            reach_min: "",
            reach_max: "",
            channel_id: "",
            sub_channel_id: "",
            type_id: "",
            schedule_id: "",
            social_class: [],
            literacy_level: [],
            interest: [],
            profession_level: [],
            age_group: [],
            cost_factor_id: "",
            description: "",
            address: "",
            contacts: [],
            image: [],
            draft: false
        },
        location: '',
        subchannels: [{}],
        media_house_id: "",
        errors: {},
        genders: [],
        marital_status: [],
        social_class: [], literacy_level: [], interest: [], age_group: [], professional_level: [],
        imageUploading: true,
        imageUploadStatus: "",
        images: "",
        imagesName: ""
    }
    selectStyle = {
        dropdownButton: () => ({
            width: 300,
        })
    }
    schema = {
        id: Joi.string(),
        name: Joi.string().required().label("Program Name"),
        reach_min: Joi.string().required().label("Minimum Reach"),
        location: Joi.string().required().label("Comma separated list of locations"),
        reach_max: Joi.string().required().label("Maximum Reach"),
        channel_id: Joi.string().required().label("Channel"),
        sub_channel_id: Joi.string().required().label("Sub Channel"),
        schedule_id: Joi.string().required().label("Schedule"),
        cost_factor_id: Joi.string().required().label("Cost Factor"),
        description: Joi.string(),
        address: Joi.string(),
        type_id: Joi.string(),
        social_class: Joi.array(),
        literacy_level: Joi.array(),
        interest: Joi.array(),
        profession_level: Joi.array(),
        age_group: Joi.array(),
        marital_status: Joi.array(),
        genders: Joi.array(),
        contacts: Joi.array(),
        image: Joi.array(),
        draft: Joi.boolean()
    }

    async componentDidMount() {
        const channels = await getChannels();
        const types = await getTypes();
        const schedules = await getSchedules();
        const social_class = await getSocialClass();
        const literacy_level = await getLiteracyLevel();
        const interest = await getInterests();
        const genders = await getGenders();
        const age_group = await getAgeGroup();
        const professional_level = await getProfessionalLevel();
        const cost_factor = await getCostFactor();
        const contacts = await getContactList(this.props.match.params.shortname);
        const marital = await getMaritalStatus();
        //console.log(types);
        this.setState({
            channels: mapProgramAttributToSelect(channels.data.result),
            schedules: mapProgramAttributToSelect(schedules.data.result),
            social_class: mapDataToMultiSelect(social_class.data.result),
            literacy_level: mapDataToMultiSelect(literacy_level.data.result),
            interest: mapDataToMultiSelect(interest.data.result),
            age_group: mapDataToMultiSelect(age_group.data.result),
            contacts: mapDataToMultiSelect(contacts.data.result),
            genders: mapDataToMultiSelect(genders.data.result),
            marital_status: mapDataToMultiSelect(marital.data.result),
            professional_level: mapDataToMultiSelect(professional_level.data.result),
            cost_factor: mapProgramAttributToSelect(cost_factor.data.result),
            types: mapProgramAttributToSelect(types.data.result),
            media_house_id: this.props.match.params.shortname
        });
    }

    renderChannelSelect(name, label, options = []) {
        const {data, errors} = this.state;
        return (
            <Select
                value={data[name]}
                error={errors[name]}
                name={name}
                label={label}
                onChange={this.handleChannelChange}
                options={options}
            />
        );
    }

    handleChannelChange = async ({currentTarget: input}) => {
        let channel = input[input.selectedIndex].text;
        const data = {...this.state.data};
        data[input.name] = input[input.selectedIndex].value;
        const response = await getSubChannels(channel);
        this.setState({data, subchannels: mapProgramAttributToSelect(response.data.result)});
    }
    handleUpload = async (e) => {
        const selectedFiles = e.target.files;
        const len = selectedFiles.length;
        let names = "";
        let formData = new FormData();
        for (let i = 0; i < len; i++) {
            names += selectedFiles[i].name + ", ";
            formData.append(`images[${i}]`, selectedFiles[i]);
        }
        this.setState({
            imagesName: names,
            images: selectedFiles,
            imageUploadStatus: "Uploading Images, Please Wait..."
        });
        const {data} = await uploadProgramImages(formData);
        
        if (data.statusText === "error") {
            this.setState({imageUploading: true});
            toast.error(data.result.message);
        } else {
            const fields = {...this.state.data};
            fields['image'] = data.result.map(image => {
                return image.id;
            });
            //console.log(fields);
            this.setState({data: fields, imageUploading: false, imageUploadStatus: ''});
            toast.success("Images uploaded successfully!");
        }
    }
    handleScriptLoad = () => {   // Declare Options For Autocomplete 
        var options = { types: ['(cities)'],componentRestrictions: {country: 'ng'} }; 
        
        // Initialize Google Autocomplete 
        /*global google*/
        this.autocomplete = new google.maps.places.Autocomplete(
                              document.getElementById('location'),
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
    
        // Check if address is valid
        if (address) {
          // Set State
          const {data} = this.state;
          data['location'] = addressObject.formatted_address
          this.setState({ data });
        }
    }
    async doSubmit() {
        try {
            const {data} = await createProgram(this.state.media_house_id, this.state.data);
            //console.log(data);
            if (data.statusText === "error") {
                this.setState({imageUploading: false});
                toast.error(data.result.message);
            } else {
                this.props.history.push('/media-house/' + this.state.media_house_id + '/program/list');
                toast.success('Program has been created successfully!');
            }
        } catch (ex) {
            console.log('Error ' + ex);
        }

    }

    renderButton(label) {
        return (
            <button disabled={this.state.imageUploading} className="btn abtn abtn-2">
                {label}
            </button>
        );
    }

    render() {
        return (
            <Dashboard>
                <Script url={`https://maps.googleapis.com/maps/api/js?key=${google_places_key}&libraries=places`}  
                        onLoad={this.handleScriptLoad}        
                /> 
                <div className="white-bg">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row justify-content-center">
                            <div className="col-sm-12">
                                <h3 className="section-title">Create New Program</h3><br/>

                                <div className="row">
                                    <div className="col-sm-12">
                                        {this.renderInput('name', 'Program Name')}
                                    </div>
                                    <div className="col-sm-6">
                                        {this.renderInput('reach_min', 'Minimum Reach')}
                                    </div>
                                    <div className="col-sm-6">
                                        {this.renderInput('reach_max', 'Maximum Reach')}
                                    </div>

                                    <div className="col-sm-6">
                                        {this.renderChannelSelect('channel_id', 'Channel', this.state.channels)}
                                    </div>
                                    <div className="col-sm-6">
                                        {this.renderSelect('sub_channel_id', 'Sub Channel', this.state.subchannels)}
                                    </div>

                                    <div className="col-sm-6">
                                        {this.renderSelect('type_id', 'Type', this.state.types)}
                                    </div>
                                    <div className="col-sm-6">
                                        {this.renderSelect('schedule_id', 'Schedule', this.state.schedules)}
                                    </div>

                                    <div className="col-sm-6">
                                        {this.renderMultiSelect('marital_status', 'Marital Status', this.state.marital_status, this.handleMultiSelectValueChange)}
                                    </div>
                                    <div className="col-sm-6">
                                        {this.renderMultiSelect('contacts', 'Contact Person', this.state.contacts, this.handleMultiSelectValueChange)}
                                    </div>

                                    <div className="col-sm-6">
                                        {this.renderMultiSelect('social_class', 'Social Class', this.state.social_class, this.handleMultiSelectValueChange)}
                                    </div>
                                    <div className="col-sm-6">
                                        {this.renderMultiSelect('literacy_level', 'Literacy Level', this.state.literacy_level, this.handleMultiSelectValueChange)}
                                    </div>

                                    <div className="col-sm-6">
                                        {this.renderMultiSelect('interest', 'Interest', this.state.interest, this.handleMultiSelectValueChange)}
                                    </div>
                                    <div className="col-sm-6">
                                        {this.renderMultiSelect('age_group', 'Age Group', this.state.age_group, this.handleMultiSelectValueChange)}
                                    </div>
                                    <div className="col-sm-6">
                                        {this.renderMultiSelect('profession_level', 'Professional Level', this.state.professional_level, this.handleMultiSelectValueChange)}
                                    </div>
                                    <div className="col-sm-6">
                                        {this.renderSelect('cost_factor_id', 'Cost Factor', this.state.cost_factor)}
                                    </div>
                                    <div className="col-sm-6">
                                        {this.renderMultiSelect('genders', 'Genders', this.state.genders, this.handleMultiSelectValueChange)}
                                    </div>
                                    <div className="col-sm-6">
                                        {this.renderInput('location', 'Locations')}
                                    </div>
                                    <div className="col-sm-6">
                                        {this.renderInput('address', 'Address')}
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="images">Attach Images</label>
                                        <div className='input-upload'>
                                            <input type="file" multiple name="images" onChange={this.handleUpload}/>
                                        </div>
                                        {this.state.imagesName}
                                    </div>
                                    <div className="col-sm-12">
                                        {this.renderTextArea('description', 'Description')}
                                    </div>
                                    <div className="col-sm-12">
                                        <br/>
                                        {this.renderButton("Save Program")} {this.state.imageUploadStatus}
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

export default programForm;