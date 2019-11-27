import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Dashboard from './../../common/dashboard';
import {getContactList, getOwnMediaHouses} from './../../../services/mediaHouseService';

class Contacts extends Component {
    state = {
        contacts: {}
    };

    async componentDidMount() {
        try {
            // todo: this is wrong because you are not using redux
            // so I have to fetch the media house in other to know which media
            // house I am working with
            const mediaData = await getOwnMediaHouses();
            const response = await getContactList(mediaData.data.result.short_name);
            this.setState({
                contacts: response.data.result
            });
        } catch (e) {
            return null;
        }
    }

    render() {
        return (
            <Dashboard>
                <div className="white-bg">
                    <h2 className="section-title">Contact List</h2>
                    <Link to="/contacts/create"
                          className="btn abtn abtn-2"
                          style={{padding: '10px'}}>Add New Contact</Link>

                    <table className='table table-bordered'>
                        <thead>
                        <tr>
                            <td>Contact Name</td>
                            <td>Mobile</td>
                        </tr>
                        </thead>
                        <tbody>
                        {Array.from(this.state.contacts).map((contact) =>
                            <tr>
                                <td>{contact.name}</td>
                                <td>{contact.mobile}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </Dashboard>
        );
    }
}

export default Contacts;