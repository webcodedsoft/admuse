import React, { Component } from 'react';
import { getWalletHistory } from '../../services/userService';
import Dashboard from './../common/dashboard';

class WalletHistory extends Component {
    state = { 
        data: {}
     }

    async componentDidMount() {
        const response = await getWalletHistory();
        const { result: data } = response.data;
        console.log(data);
        this.setState({ data });
    }

    render() { 
        // const { data } = this.state;
        return ( 
            <Dashboard>
                <div className="white-bg">
                            <h3 className="section-title">My Transactions</h3><br/>
                            
                        </div>
            </Dashboard>
         );
    }
}
 
export default WalletHistory;