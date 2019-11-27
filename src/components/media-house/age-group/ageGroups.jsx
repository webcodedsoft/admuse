import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dashboard from './../../common/dashboard';
import { MDBDataTable } from 'mdbreact';
import { getAgeGroup, deleteAgeGroup } from './../../../services/mediaHouseService';
import { toast } from 'react-toastify';
class AgeGroups extends Component {
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
            const {data} = await getAgeGroup();
            // console.log(data);
            let groups = [];
            groups = data.result.map((type, index) => {
                return {
                    name: type.name,
                    edit: <Link to={`/age-group/edit/${type.name}`} className="btn btn-primary btn-sm"><i className="fas fa-edit"></i></Link>,
                    remove: <button value={type.name} data-index={index} onClick={this.removeAgeGroup} className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                };
            });
            const stateObj = {...this.state.data};
            stateObj['rows'] = groups;
            this.setState({ data: stateObj });
        } catch (e) {
            return null;
        }
        
    }

    removeAgeGroup = async (ev) => {
        let response = window.confirm("Are you sure you want to remove "+ev.currentTarget.value+"?");
        if(response) {
            const ageGroup = ev.currentTarget.value;
            const index =  ev.currentTarget.dataset.index;
            const data = await deleteAgeGroup(ageGroup);
            if(data.status === 200){
                const stateObj = {...this.state.data};
                delete stateObj.rows[index];
                this.setState({ data: stateObj });
                toast.success('Age group deleted');
            }
        }
    }

    render() { 
        return ( 
            <Dashboard>
                <div className="white-bg">
                            <h2 className="section-title">Manage Age Groups</h2>
                            <Link to="/age-group/create" className="btn abtn abtn-2" style={{padding: '10px' }}>Create groups</Link>
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
 
export default AgeGroups;