import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';

import { getMediaHouses } from '../../services/mediaHouseService';
import Dashboard from '../common/dashboard';

class MediaHouses extends Component {
    state = { 
        data:{
            columns : [
                {label: 'Name',field: 'name',sort: 'asc',width:180},
                {label: 'Short Name',field: 'short_name',width:120},
                {label: 'Email',field: 'email',sort: 'asc',width:150},
                {label: 'Mobile',field: 'mobile',sort: 'asc',width:100},
                {label: 'Contact Person',field: 'contact_person',sort: 'asc',width:120},
                {label: 'Address',field: 'address',sort:'asc',width:180},
                {label: 'Program Count',field: 'program_count',sort: 'asc',width:50},
                {label: 'Created At',field: 'created_at',sort: 'asc',width:100},
                {label: 'Created By',field: 'created_by',sort: 'asc',width:100},
                {label: 'Edit',field: 'edit',sort: 'asc',width:100},
              ],
            rows: []
        },
        links:""
        
    };

    async componentDidMount() {
        try{
            const {data} = await getMediaHouses();
            const houses = this.mapToViewModel(data);
            const stateObj = {...this.state.data};
            stateObj['rows'] = houses;
            this.setState({ data: stateObj, links:data.result.links });
        } catch (e) {
            return null;
        }
    }

    handlePageChange = async (ev) => {
        try{
            const page = ev.currentTarget.dataset.href;
            const {data} = await getMediaHouses(page);
            const houses = this.mapToViewModel(data);
            const stateObj = {...this.state.data};
            stateObj['rows'] = houses;
            this.setState({ data: stateObj, links:data.result.links });
        } catch (e) {
            return null;
        }
    }
    mapToViewModel = (data) => {
        const houses = [];
            data.result.data.map((house) => {
               return houses.push({
                    name: <Link to={`/media-house/view/${house.short_name}`}>{house.name}</Link>,
                    short_name: house.short_name,
                    email: house.email,
                    mobile: house.mobile,
                    contact_person: house.contact_person,
                    address: house.address,
                    program_count: house.program_count,
                    created_at: house.created_at,
                    created_by: house.user.name,
                    edit: <Link className="btn abtn" to={`/media-house/edit/${house.short_name}`}>Edit</Link>,
                });
            });
        return houses;
    }
    render() { 
        const { links } = this.state;
        return ( 
           <Dashboard>
                <div className="white-bg">
                    <h3 className="section-title">Media Houses</h3>
                    <Link to="/media-house/create" className="btn abtn abtn-2" style={{padding: '10px' }}>Create Media House</Link>
                    <Link to="/media-house/bulk-upload" className="btn abtn abtn-2" style={{padding: '10px' }}>Bulk Import</Link>
                    <div className="table-responsive">
                        <MDBDataTable striped bordered hover
                                            data={this.state.data}
                                            paging={false} />
                    </div> 
                    <br />
                    <ul className="pagination">
                        <li className="page-item"><button className="page-link" data-href={`${links.first_page}`} onClick={this.handlePageChange}>&laquo;</button></li>
                        <li className="page-item"><button className="page-link" data-href={`${links.prev_page}`} onClick={this.handlePageChange}>Prev</button></li>
                        <li className="page-item"><button className="page-link" data-href={`${links.next_page}`} onClick={this.handlePageChange}>Next</button></li>
                        <li className="page-item"><button className="page-link" data-href={`${links.last_page}`} onClick={this.handlePageChange}>&raquo;</button></li>
                    </ul>               
                </div>
           </Dashboard>     
         );
    }
}
 
export default MediaHouses;