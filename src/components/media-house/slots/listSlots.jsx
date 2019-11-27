import React from 'react';
import { getSlots } from '../../../services/slotService';
import { ToastContainer } from 'react-toastify';
import DealCard from './../../common/DealCard';
import { Link } from 'react-router-dom';
import Joi  from 'joi-browser';
import ProgramFormUtils from '../../common/programFormUtils';
import { getSocialClass, getInterests, getChannels } from '../../../services/mediaHouseService';
import { getGenders, getAgeGroup, mapDataToMultiSelect } from './../../../services/mediaHouseService';
import { addToCart } from './../../../services/cartService';
import {toast} from 'react-toastify';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

class ListSlots extends ProgramFormUtils {
    state = { 
        slots:[],
        data:{
            age_group:[],
            location:"",
            interest:[],
            social_class:[],
            budget: '',
            media_channel:[],
            gender:[],
            size:"",
            appearance:"",
        },
        errors:{},
        socials:[],interest:[],genders:[],age_group:[],channels:[]
     }
     schema = {
        location: Joi.string().required().label("Location"),
        media_channel: Joi.number().label("Media Channel"),
        gender: Joi.number().label("Gender"),
        size: Joi.number().label("Size"),
        appearance: Joi.string(),
    }

    async componentDidMount() {
        const { data } = await getSlots();
        const social_class = await getSocialClass();
        const interest = await getInterests();
        const genders = await getGenders();
        const age_group = await getAgeGroup();
        const channels = await getChannels();

        this.setState({ 
            slots: data.result.data,
            channels: mapDataToMultiSelect(channels.data.result),
            socials: mapDataToMultiSelect(social_class.data.result),
            interest: mapDataToMultiSelect(interest.data.result),
            age_group: mapDataToMultiSelect(age_group.data.result),
            genders: mapDataToMultiSelect(genders.data.result),
        });
        const loc = this.props.match.params.location;
        const soc = (this.props.match.params.social_class) ? this.props.match.params.social_class.split(',') : '';
        if(loc && soc) {
            const data = {...this.state.data }
            data['location'] = loc;
            data['social_class'] = soc;
            this.setState({data});
        }
    }
    addToCartAction(data) {
        if(addToCart(data)) {
            toast.success('1 item added to cart');
        } else {
            toast.error('Unable to add slot to cart, please try again later');
        }
    }
    render() { 
        const {slots} = this.state;
        return ( 
            <React.Fragment>
                <ToastContainer />
                <div className="slot-hero">

                </div>
                <div className="slots">
                <div className="container mt-150">
                        <h3 className="section-title">Refine Search</h3>
                            <div className="row">
                                
                                

                                <div className="col-sm-3">
                                    {this.renderMultiSelect('age_group', 'Audience Age Group', this.state.age_group, this.handleMultiSelectValueChange)}
                                </div>
                                <div className="col-sm-3">
                                    {this.renderMultiSelect('interest', 'Audience Interest', this.state.interest, this.handleMultiSelectValueChange)}
                                </div>
                                <div className="col-sm-3">
                                    {this.renderMultiSelect('social_class', 'Audience Social Class',this.state.socials, this.handleMultiSelectValueChange)}
                                </div>
                                <div className="col-sm-3">
                                    { this.renderInput('budget', 'Budget') }
                                </div>
                                <div className="col-sm-2">
                                    {this.renderInput('location', 'Location')}
                                </div>
                                <div className="col-sm-2">
                                    { this.renderMultiSelect('media_channel','Media Channel',this.state.channel, this.handleMultiSelectValueChange) }
                                </div>

                                <div className="col-sm-2">
                                    { this.renderMultiSelect('media_house','Publisher',[{}], this.handleMultiSelectValueChange) }
                                </div>
                                <div className="col-sm-2">
                                    { this.renderMultiSelect('gender','Gender',this.state.genders, this.handleMultiSelectValueChange) }
                                </div>
                                <div className="col-sm-2">
                                    { this.renderMultiSelect('size','Slot Size',[{}],this.handleMultiSelectValueChange) }
                                </div>
                                <div className="col-sm-2">
                                    { this.renderMultiSelect('appearance','Slot Appearance',[{}],this.handleMultiSelectValueChange) }
                                </div>

                                <div className="offset-9 col-sm-3">
                                    <Link to={`#`} className="btn abtn abtn-2 btn-block" style={{padding: '10px' }}>Refine Search</Link>
                                </div>
                            </div>
                            <hr /><br/><br/>
                            <h3 className="section-title">Slots for your campaigne</h3>
                            <div className="row">
                            {
                                    slots.map((slot) => {
                                        const cartdata = {
                                            id: slot.id,
                                            name: slot.name,
                                            reach: slot.program.reach.max,
                                            price: slot.price,
                                            quantity: 1,
                                            discount: 0,
                                            total: slot.price
                                        }
                                        return (
                                            <div className="col-sm-3" key={slot.id}>
                                                <DealCard id={slot.id} onAction={ () => this.addToCartAction(cartdata) } link={`/media-house/slot/view/${slot.id}`} image={slot.program.images[0].path} title={slot.name} price={slot.price} reach={slot.program.reach.max} />
                                                <br />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default ListSlots;