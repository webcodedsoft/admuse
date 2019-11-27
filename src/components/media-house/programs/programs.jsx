import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { getPrograms } from '../../../services/mediaHouseService';
import { Link } from 'react-router-dom';
import Dashboard from './../../common/dashboard';

class Programs extends Component {
    state = { 
        data:{
            columns : [
                {label: 'Name',field: 'name',sort: 'asc',width:150},
                {label: 'Channel',field: 'channel',sort: 'asc',width:120},
                {label: 'Cost Factor',field: 'cost_factor',sort: 'asc',width:120},
                {label: 'Schedules',field: 'schedule',sort:'asc',width:120},
                {label: 'Min Reach',field: 'reach_min',sort: 'asc',width:100},
                {label: 'Max Reach',field: 'reach_max',sort: 'asc',width:100},
                {label: 'Media House',field: 'media_house',sort: 'asc',width:120},
                {label: 'Created By',field: 'created_by',sort: 'asc',width:120},
                {label: 'Add Slot',field: 'add_slot',sort: 'asc',width:80},
                {label: 'View Slots',field: 'view_slot',sort: 'asc',width:80},
              ],
            rows: [],
        },
        media_house_id:this.props.match.params.shortname,
        
    };

    async componentDidMount() {
        const media_house_id = this.props.match.params.shortname
        try{
            const {data} = await getPrograms(media_house_id);
            let programs = data.result.data.map((program) => {
               return {
                    name: <Link to={`/program/${media_house_id}/${program.short_name}/`}>{program.name}</Link>,
                    channel: program.channel.name,
                    cost_factor: program.cost_factor.name,
                    schedule: program.schedule.name,
                    reach_min: program.reach.min,
                    reach_max: program.reach.max,
                    media_house: program.media.name,
                    created_by: program.media.user.name,
                    add_slot: <Link to={`/media-house/${this.state.media_house_id}/program/${program.short_name}/slot/create`} className="btn abtn">Add Slot</Link>,
                    view_slot: <Link to={`/media-house/${this.state.media_house_id}/program/${program.short_name}/slot/list`} className="btn abtn">View Slots</Link>,
                };
            });
            const stateObj = {...this.state.data};
            stateObj['rows'] = programs;
            this.setState({ data: stateObj, media_house_id: media_house_id });
        } catch (e) {
            return null;
        }
        
    }

    render() { 
        return ( 
            <Dashboard>
                <div className="white-bg">
                        <h2 className="section-title">Programs List</h2>
                        <Link to={`/media-house/${this.state.media_house_id}/program/create`} className="btn abtn abtn-2" style={{padding: '10px' }}>Create Program</Link>
                        <MDBDataTable scrollX striped bordered hover
                                       data={this.state.data}
                                       paging={false} />
                </div>
            </Dashboard>
         );
    }
}
 
export default Programs;