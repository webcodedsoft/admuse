import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dashboard from './../../common/dashboard';
import { MDBDataTable } from 'mdbreact';
import { getInterests, deleteInterest } from './../../../services/mediaHouseService';
import { toast } from 'react-toastify';

class Interest extends Component {
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
            const {data} = await getInterests();
            let interests = [];
            interests = data.result.map((type, index) => {
               return {
                    name: type.name,
                    edit: <Link to={`/interest/edit/${type.name}`} className="btn btn-primary btn-sm"><i className="fas fa-edit"></i></Link>,
                    remove: <button value={type.name} data-index={index} onClick={this.removeInterest} className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                };
            })
            const stateObj = {...this.state.data};
            stateObj['rows'] = interests;
            this.setState({ data: stateObj });
        } catch (e) {
            return null;
        }
    }

    removeInterest = async (ev) => {
        let response = window.confirm("Are you sure you want to remove "+ev.currentTarget.value+"?");
        if(response) {
            const interest = ev.currentTarget.value;
            const index =  ev.currentTarget.dataset.index;
            const data = await deleteInterest(interest);
            console.log(data);
            if(data.status === 200){
                const stateObj = {...this.state.data};
                delete stateObj.rows[index];
                this.setState({ data: stateObj });
                toast.success('Interest deleted');
            }
        }
    }

    render() { 
        return ( 
            <Dashboard>
                <div className="white-bg">
                            <h2 className="section-title">Manage Interests</h2>
                            <Link to="/interest/create" className="btn abtn abtn-2" style={{padding: '10px' }}>Create Interest</Link>
                            <div className="table-responsive">
                            <MDBDataTable  striped bordered hover
                                       data={this.state.data}
                                       paging={false} />
                            </div>
                        </div>
            </Dashboard>
         );
    }
}
 
export default Interest;