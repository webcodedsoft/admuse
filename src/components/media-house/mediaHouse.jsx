import React, { Component } from 'react';
import { getMediaHouse } from './../../services/mediaHouseService';
import SingleMediaHouse from './singleMediaHouse';
import Dashboard from './../common/dashboard';

class MediaHouse extends Component {
    state = { 
        house:{},
    };

    async componentDidMount() {
        const shortname = this.props.match.params.shortname;
        try{
            const {data} = await getMediaHouse(shortname);
            this.setState({ house:data.result });
            console.log(data);
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