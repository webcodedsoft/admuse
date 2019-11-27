import React, {Component} from 'react';

import Dashboard from './../../common/dashboard';
import {createContact, getOwnMediaHouses} from './../../../services/mediaHouseService';

class ContactCreate extends Component {
    state = {
        mobile: '',
        name: '',
        media: {}
    };

    async componentDidMount() {
        try {
            // todo: this is wrong because you are not using redux
            // so I have to fetch the media house in other to know which media
            // house I am working with
            const mediaData = await getOwnMediaHouses();
            this.setState({
                media: mediaData.data.result
            });
        } catch (e) {
            return null;
        }
    }

    async submit(event) {
        event.preventDefault();
        const response = await createContact(
            this.state.media.short_name, {
                mobile: this.state.mobile,
                name: this.state.name,
            }
        );

        if (response.data.statusText === 'success') window.location.assign('/contacts');
    }

    render() {
        return (
            <Dashboard>
                <div className="white-bg">
                    <h2 className="section-title">Contact Create</h2>
                    <form className='form' action='#' onSubmit={this.submit.bind(this)}>
                        <div className="col-sm-6 offset-sm-3">
                            <p>Contact Name</p>
                            <input className='form-control'
                                   onChange={name => this.setState({name: name.currentTarget.value})}
                                   defaultValue={this.state.name}
                                   name='name' type='text' placeholder='Contact Name'/>
                            <p>Mobile</p>
                            <input className='form-control'
                                   onChange={mobile => this.setState({mobile: mobile.currentTarget.value})}
                                   type='text' placeholder='Contact Name'/>

                            <button className='form-control btn btn-success'>Create</button>
                        </div>
                    </form>
                </div>
            </Dashboard>
        );
    }
}

export default ContactCreate