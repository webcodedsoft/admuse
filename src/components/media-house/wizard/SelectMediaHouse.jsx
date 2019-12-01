import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import { getMediaHouses } from '../../../services/mediaHouseService';
import Dashboard from '../../common/dashboard';

import auth from '../../../services/authService';
import { getOwnMediaHouses } from './../../../services/mediaHouseService';

class SelectMediaHouses extends Component {
    state = { 
        houses:[],
        links:"",
        action: ""
    };

    async componentDidMount() {
        this.setState({action: this.props.match.params.action});
        const user = auth.getCurrentUserObject();
        try{
            const {data} = (user.type === 'publisher') ? await getOwnMediaHouses() : await getMediaHouses();            
            const houses = data.result.data;
            if(user.type === 'publisher' && this.state.action==='slot') {
               return <Redirect to={`/wizard/select/program/${houses.short_name}`} />
            } else {
                this.setState({ houses, links:data.result.links });
            }
        } catch (e) {
            return null;
        }
    }

    handlePageChange = async (ev) => {
        try{
            const page = ev.currentTarget.dataset.href;
            const {data} = await getMediaHouses(page);
            const houses = data.result.data;
            this.setState({ houses, links:data.result.links });
        } catch (e) {
            return null;
        }
    }

    render() { 
        const { links,action } = this.state;
        return ( 
           <Dashboard>
                <div className="white-bg">
                    <h3 className="section-title">Select a Media House.</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="list-group">
                                {
                                    this.state.houses.map((house) => {
                                        let media_house = "";
                                        if(action === 'slot') {
                                            media_house = (<NavLink 
                                                className="list-group-item list-group-item-action" 
                                                to={`/wizard/select/program/${house.short_name}`}>{house.name}</NavLink>)
                                        } else if(action === 'program') {
                                            media_house = (<NavLink 
                                                className="list-group-item list-group-item-action" 
                                                to={`/media-house/${house.short_name}/program/create`}>{house.name}</NavLink>);
                                        } else if (action === 'share-rate') {
                                            media_house = <NavLink 
                                                className="list-group-item list-group-item-action" 
                                                to={`/wizard/select/slot/${house.short_name}`}>{house.name}</NavLink>;
                                        } else {
                                            media_house = "";
                                        }
                                        return(media_house);
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
 
export default SelectMediaHouses;