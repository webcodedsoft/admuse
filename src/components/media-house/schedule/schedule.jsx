import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dashboard from './../../common/dashboard';
import { MDBDataTable } from 'mdbreact';
import { getSchedules, deleteSchedule } from './../../../services/mediaHouseService';
import { toast } from 'react-toastify';

class Schedule extends Component {
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
            const {data} = await getSchedules();
            let schedules = [];
            schedules = data.result.map((type, index) => {
               return {
                    name: type.name,
                    edit: <Link to={`/schedule/edit/${type.name}`} className="btn btn-primary btn-sm"><i className="fas fa-edit"></i></Link>,
                    remove: <button value={type.name} data-index={index} onClick={this.removeSchedule} className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                };
            })
            const stateObj = {...this.state.data};
            stateObj['rows'] = schedules;
            this.setState({ data: stateObj });
        } catch (e) {
            return null;
        }
    }

    removeSchedule = async (ev) => {
        let response = window.confirm("Are you sure you want to remove "+ev.currentTarget.value+"?");
        if(response) {
            const val = ev.currentTarget.value;
            const index =  ev.currentTarget.dataset.index;
            const data = await deleteSchedule(val);
            if(data.status === 200){
                const stateObj = {...this.state.data};
                delete stateObj.rows[index];
                this.setState({ data: stateObj });
                toast.success('Level deleted');
            }
        }
    }

    render() { 
        return ( 
            <Dashboard>
                <div className="white-bg">
                            <h2 className="section-title">Manage Schedules</h2>
                            <Link to="/schedule/create" className="btn abtn abtn-2" style={{padding: '10px' }}>Create Schedule</Link>
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
 
export default Schedule;