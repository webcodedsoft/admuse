import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import Dashboard from './../../common/dashboard';

class AllPrograms extends Component {
    state = { 
        data:{
            columns : [
                {label: 'Name',field: 'name',sort: 'asc',width:150},
                {label: 'Type',field: 'type',sort: 'asc',width:150},
                {label: 'Channel',field: 'channel',sort: 'asc',width:120},
                {label: 'Focus',field: 'focus',sort: 'asc',width:120},
                {label: 'Duration',field: 'duration',sort: 'asc',width:120},
                {label: 'Dist. State',field: 'state',sort: 'asc',width:120},
                {label: 'Host',field: 'host',sort: 'asc',width:180},
                {label: 'Cost Factor',field: 'cost_factor',sort: 'asc',width:120},
                {label: 'Schedules',field: 'schedule',sort:'asc',width:120},
                {label: 'Est. Reach',field: 'reach',sort: 'asc',width:100},
                {label: 'Age Group',field: 'age_group',sort: 'asc',width:100},
                {label: 'Interest',field: 'interest',sort: 'asc',width:100},
                {label: 'Gender',field: 'gender',sort: 'asc',width:100},
                {label: 'Social Class',field: 'social_class',sort: 'asc',width:120},
                {label: 'Image',field: 'image',sort: 'asc',width:120},
                {label: 'Add Slot',field: 'add_slot',sort: 'asc',width:120},
                {label: 'View Slots',field: 'view_slot',sort: 'asc',width:120},
              ],
            rows: [{
                name: <Link to={`/program/faaji_lawa/faaji_lawa`}>Faaji Lawa</Link>,
                type:'Multimedia',
                channel: 'Radio',
                focus:'Teenagers',
                duration:'2hrs',
                state:'Ogun State',
                host:'Akomoje Chinedu Musa',
                cost_factor: 'Per Publication',
                schedule: 'Mondays',
                reach: 20000,
                age_group: 20000,
                interest: 20000,
                gender: 'AIT',
                social_class: 'Laravel',
                image: '',
                add_slot: <Link to={`/media-house/guardian_ng/program/faaji_lawa/slot/create`} className="btn abtn">Add Slot</Link>,
                view_slot: <Link to={`/media-house/guardian_ng/program/faaji_lawa/slot/list`} className="btn abtn">View Slots</Link>,
            }],
        }
        
    };

    async componentDidMount() {
    }

    render() { 
        return ( 
            <Dashboard>
                <div className="white-bg">
                        <h2 className="section-title">All Programs</h2>
                        
                        <MDBDataTable scrollX striped bordered hover
                                       data={this.state.data}
                                       paging={false} />
                        
                </div>
            </Dashboard>
         );
    }
}
 
export default AllPrograms;