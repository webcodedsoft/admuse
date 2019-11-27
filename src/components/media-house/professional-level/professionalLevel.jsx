import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dashboard from './../../common/dashboard';
import { MDBDataTable } from 'mdbreact';
import { getProfessionalLevel, deleteProfessionalLevel } from './../../../services/mediaHouseService';
import { toast } from 'react-toastify';

class ProfessionalLevel extends Component {
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
            const {data} = await getProfessionalLevel();
            let levels = [];
            levels = data.result.map((type, index) => {
               return {
                    name: type.name,
                    edit: <Link to={`/professional-level/edit/${type.name}`} className="btn btn-primary btn-sm"><i className="fas fa-edit"></i></Link>,
                    remove: <button value={type.name} data-index={index} onClick={this.removeProfessionalLevel} className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                };
            })
            const stateObj = {...this.state.data};
            stateObj['rows'] = levels;
            this.setState({ data: stateObj });
        } catch (e) {
            return null;
        }
    }

    removeProfessionalLevel = async (ev) => {
        let response = window.confirm("Are you sure you want to remove "+ev.currentTarget.value+"?");
        if(response) {
            const level = ev.currentTarget.value;
            const index =  ev.currentTarget.dataset.index;
            const data = await deleteProfessionalLevel(level);
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
                <h2 className="section-title">Manage Professional Level</h2>
                            <Link to="/professional-level/create" className="btn abtn abtn-2" style={{padding: '10px' }}>Create Level</Link>
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
 
export default ProfessionalLevel;