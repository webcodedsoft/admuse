import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dashboard from '../../common/dashboard';
import { MDBDataTable } from 'mdbreact';
import { getChannels, deleteChannel } from '../../../services/mediaHouseService';
import { toast } from 'react-toastify';

class Channels extends Component {
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
            const {data} = await getChannels();
            let channels = [];
            channels = data.result.map((type, index) => {
               return {
                    name: <Link to={`/channels/subchannels/list/${type.name}`} >{type.name}</Link>,
                    edit: <Link to={`/channels/edit/${type.name}`} className="btn btn-primary btn-sm"><i className="fas fa-edit"></i></Link>,
                    remove: <button value={type.name} data-index={index} onClick={this.removeChannel} className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                };
            })
            const stateObj = {...this.state.data};
            stateObj['rows'] = channels;
            this.setState({ data: stateObj });
        } catch (e) {
            return null;
        }
        
    }

    removeChannel = async (ev) => {
        let response = window.confirm("Are you sure you want to remove "+ev.currentTarget.value+"?");
        if(response) {
            const channel = ev.currentTarget.value;
            const index =  ev.currentTarget.dataset.index;
            const data = await deleteChannel(channel);
            if(data.status === 200){
                const stateObj = {...this.state.data};
                delete stateObj.rows[index];
                this.setState({ data: stateObj });
                toast.success('Channel deleted');
            }
        }
    }

    render() { 
        return ( 
            <Dashboard>
                <div className="white-bg">
                            <h2 className="section-title">Manage Channels</h2>
                            <Link to="/channels/create" className="btn abtn abtn-2" style={{padding: '10px' }}>Create Channel</Link>
                            <div className="table-responsive">
                            <MDBDataTable scrollX striped bordered hover
                                       data={this.state.data}
                                       paging={true} />
                            </div>
                        </div>
            </Dashboard>
         );
    }
}
 
export default Channels;