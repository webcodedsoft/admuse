import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { getSlots } from '../../../services/mediaHouseService';
import { Link } from 'react-router-dom';
import Dashboard from './../../common/dashboard';

class Slots extends Component {
    state = { 
        data:{
            columns : [
                {label: 'Name',field: 'name',sort: 'asc',width:150},
                {label: 'Type',field: 'type',sort: 'asc',width:120},
                {label: 'Size',field: 'size',sort:'asc',width:150},
                {label: 'Price',field: 'price',sort: 'asc',width:130},
                {label: 'Available',field: 'available',sort: 'asc',width:120},
                {label: 'Media Type',field: 'media_type',sort:'asc',width:200},
              ],
            rows: [],
        },
        media_house_id:this.props.match.params.shortname,
        program_name:this.props.match.params.programname,
        
    };

    async componentDidMount() {
        const media_house_id = this.props.match.params.shortname;
        const program_name = this.props.match.params.programname;
        try{
            const {data} = await getSlots(media_house_id,program_name);
            let slots = data.result.data.map((slot) => {
               return {
                    name: slot.name,
                    type: slot.type,
                    size: slot.size.text,
                    price: slot.price,
                    available: slot.available ? <span className="badge badge-success active">Yes</span> : <span className="badge badge-warning active">No</span>,
                    media_type: slot.media_type,
                };
            });
            const stateObj = {...this.state.data};
            stateObj['rows'] = slots;
            this.setState({ data: stateObj, media_house_id: media_house_id });
        } catch (e) {
            return null;
        }
        
    }

    render() { 
        return ( 
            <Dashboard>
                <div className="white-bg">
                        <h2 className="section-title">Slots</h2>
                        <Link to={`/media-house/${this.state.media_house_id}/program/${this.state.program_name}/slot/create`} className="btn abtn abtn-2" style={{padding: '10px' }}>Create New Slot</Link>
                        <Link to={`/media-house/${this.state.media_house_id}/program/${this.state.program_name}/slot/upload`} className="btn abtn abtn-2" style={{padding: '10px' }}>Bulk Upload</Link>
                        <div className="table-responsive">
                        <MDBDataTable striped bordered hover
                                       data={this.state.data}
                                       paging={false} /> 
                        </div>
                        </div>
            </Dashboard>
         );
    }
}
 
export default Slots;