import React, { Component } from 'react';
import { getOwnMediaHouses } from './../../services/mediaHouseService';
import SingleMediaHouse from './singleMediaHouse';
import Dashboard from './../common/dashboard';

class MediaHouse extends Component {
    state = { 
        house:{}
    };

    async componentDidMount() {
        try{
            const {data} = await getOwnMediaHouses(1);
            console.log(data);
            this.setState({ house:data.result });
        } catch (e) {
            return null;
        }
    }

    render() { 
        return ( 
            <Dashboard>
                <div className="white-bg">
                            <h2 className="section-title">Media House Information</h2>
                            <SingleMediaHouse data={this.state.house} />
                </div>
            </Dashboard>
         );
    }
}
 
export default MediaHouse;