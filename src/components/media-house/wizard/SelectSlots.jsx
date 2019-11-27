import React from 'react';
import Dashboard from './../../common/dashboard';
import { getSlots } from '../../../services/slotService';
import Form from './../../common/form';
import Joi from 'joi-browser';

class SelectSlots extends Form {
    state = { 
        slots:[],
        data: {
            email:'',
            message: '',
            slots:[]
        },
        errors:{},
        media_house_id:this.props.match.params.shortname,
        links:""
    };

    schema = {
        id: Joi.string(),
        email:Joi.string().email().required().label("Email Address"),
        message:Joi.string().required().label("Message"),
        slots:Joi.array()
    }

    async componentDidMount() {
        const media_house_id = this.props.match.params.shortname
        try{
            const {data} = await getSlots();
            let slots = data.result.data;
            this.setState({ slots, media_house_id: media_house_id, links:data.result.links });
        } catch (e) {
            return null;
        }
    }

    handleSlotSelected = (e) => {
        const isChecked = e.currentTarget.checked;
        if(isChecked) {
            const data = {...this.state.data}
            data['slots'].push(e.currentTarget.value)
            this.setState({data});
        } else {
            const data = {...this.state.data}
            const index = data['slots'].indexOf(e.currentTarget.value);
            data['slots'].splice(index,1);
            this.setState({data});
        }
    }

    doSubmit() {
        alert("eeee");
        console.log(this.state.data);

    }

    render() { 
        const {links} = this.state;
        return ( 
            <Dashboard>
                <div className="white-bg">
                        <h2 className="section-title">Select slots to share</h2>
                        <div className="row">
                        <div className="col-sm-6">
                            <ul className="list-group">
                                {
                                    this.state.slots.map((slot) => {
                                        return(<li 
                                                className="list-group-item" 
                                                key={slot.id}
                                                >
                                                <label htmlFor="">
                                                    <input type="checkbox" name="slots" value={slot.id} onChange={this.handleSlotSelected} />
                                                     &nbsp; {slot.name}
                                                </label> 
                                                </li>)
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            { this.renderInput('email','Customer Email','email') }
                            { this.renderTextArea('message','Write Something...') }
                            { this.renderButton('Send Rate') }
                        </div>
                    </div>
                    <br />
                    <ul className="pagination">
                        <li className="page-item"><button className="page-link" data-href={`${links.first_page}`} onClick={this.handlePageChange}>&laquo;</button></li>
                        <li className="page-item"><button className="page-link" data-href={`${links.prev_page}`} onClick={this.handlePageChange}>Prev</button></li>
                        <li className="page-item"><button className="page-link" data-href={`${links.next_page}`} onClick={this.handlePageChange}>Next</button></li>
                        <li className="page-item"><button className="page-link" data-href={`${links.last_page}`} onClick={this.handlePageChange}>&raquo;</button></li>
                    </ul>   
                    <br />
                    <button onClick={this.props.history.goBack} className="btn abtn abtn-2">&laquo; Go Back</button>         
                    <br />
                </div>
            </Dashboard>
         );
    }
}
 
export default SelectSlots;