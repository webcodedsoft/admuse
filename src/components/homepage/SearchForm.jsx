import React from 'react';
import Form from './../common/form';
import Script from 'react-load-script';
import {google_places_key} from '../../config';
import Joi from 'joi-browser';
import { getSocialClass } from '../../services/mediaHouseService';
import { mapDataToMultiSelect } from './../../services/mediaHouseService';

class SearchForm extends Form {
    state = {
        data: {
            location: [],
            social_class: [],
        },
        errors: {},
        social_class: []
    }

    schema = {
        location: Joi.string().required().label('Audience Location'),
        social_class: Joi.array().label('Audience Social Class'),
    }
    async componentDidMount() {
        const social_class = await getSocialClass();
        this.setState({
            social_class: mapDataToMultiSelect(social_class.data.result)
        });
    }
    handleScriptLoad = () => {   // Declare Options For Autocomplete 
        // var options = { types: ['(cities)'],componentRestrictions: {country: 'ng'} }; 
        var options = { types: ['(cities)'] }; 
        
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

    doSubmit = () => {
        const {location, social_class } = this.state.data;
        const address = `/media-house/slot/list/${location}/${social_class.join(',')}`;
        this.props.history.push(address);
    }

    render() {
        return ( 
            <div>
                <Script url={`https://maps.googleapis.com/maps/api/js?key=${google_places_key}&libraries=places`}  
                        onLoad={this.handleScriptLoad}        
                /><br />
                <form onSubmit={this.handleSubmit}>
                    <div className="row justify-content-center">
                        <div className="form-group col-sm-4">
                            {this.renderInput('location','Audience Location') }
                        </div>

                        <div className="form-group col-sm-4">
                            {this.renderMultiSelect('social_class','Social Class',this.state.social_class, this.handleMultiSelectValueChange) }
                        </div>
                        <div className="form-group col-sm-1" style={{marginTop:'-5px'}}>
                            {this.renderButton('  Search  ')}
                        </div>
                    </div>
                </form>
                
            </div>
         );
    }
}
 
export default SearchForm;