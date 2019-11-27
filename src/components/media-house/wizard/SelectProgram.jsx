import React, { Component } from 'react';
import { getPrograms } from '../../../services/mediaHouseService';
import { NavLink } from 'react-router-dom';
import Dashboard from './../../common/dashboard';

class SelectProgram extends Component {
    state = { 
        programs:[],
        media_house_id:this.props.match.params.shortname,
        links:""
    };

    async componentDidMount() {
        const media_house_id = this.props.match.params.shortname
        try{
            const {data} = await getPrograms(media_house_id);
            let programs = data.result.data;
            this.setState({ programs, media_house_id: media_house_id, links:data.result.links });
        } catch (e) {
            return null;
        }
    }

    render() { 
        const {links} = this.state;
        return ( 
            <Dashboard>
                <div className="white-bg">
                        <h2 className="section-title">Select a Program from List</h2>
                        <div className="row">
                        <div className="col-sm-6">
                            <ul className="list-group">
                                {
                                    this.state.programs.map((program) => {
                                        return(<NavLink 
                                                className="list-group-item list-group-item-action" 
                                                to={ `/media-house/${this.state.media_house_id}/program/${program.short_name}/slot/create` }>{program.name}</NavLink>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <br />
                    <ul className="pagination">
                        <li className="page-item"><button className="page-link" data-href={`${links.first_page}`} onClick={this.handlePageChange}>&laquo;</button></li>
                        <li className="page-item"><button className="page-link" data-href={`${links.prev_page}`} onClick={this.handlePageChange}>Prev</button></li>
                        <li className="page-item"><button className="page-link" data-href={`${links.next_page}`} onClick={this.handlePageChange}>Next</button></li>
                        <li className="page-item"><button className="page-link" data-href={`${links.last_page}`} onClick={this.handlePageChange}>&raquo;</button></li>
                    </ul>   
                    <br />
                    <button onClick={this.props.history.goBack} className="btn abtn abtn-2">&laquo; Go Back</button>            
                    <br />
                </div>
            </Dashboard>
         );
    }
}
 
export default SelectProgram;