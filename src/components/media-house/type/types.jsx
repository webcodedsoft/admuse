import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getTypes } from '../../../services/mediaHouseService';
import Dashboard from './../../common/dashboard';
import { MDBDataTable } from 'mdbreact';

class Types extends Component {
    state = { 
        data: {
            columns : [
                {label: 'Name',field: 'name',sort: 'asc', width: 300},
                {label: 'Edit',field: 'edit',sort: false, width: 50},
                {label: 'Delete',field: 'remove',sort: false, width:50}],
            rows: []
        }
    };

    async componentDidMount() {
        try{
            const {data} = await getTypes();
            console.log(data);
            let types = [];
            types = data.result.map((type) => {
               return {
                    name: type.name,
                    edit: <button className="btn btn-primary btn-sm"><i className="fas fa-edit"></i></button>,
                    remove: <button className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                };
            })
            const stateObj = {...this.state.data};
            stateObj['rows'] = types;
            this.setState({ data: stateObj });
        } catch (e) {
            return null;
        }
        
    }

    render() { 
        return ( 
            <Dashboard>
                <div className="white-bg">
                            <Link to="/types/create" className="btn abtn abtn-2" style={{padding: '10px' }}>Create Types</Link>
                            <div className="table-responsive">
                            <MDBDataTable  striped bordered hover
                                       data={this.state.data}
                                       paging={true} />
                            </div>
                        </div>
            </Dashboard>
         );
    }
}
 
export default Types;