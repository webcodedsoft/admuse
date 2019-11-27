import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import Dashboard from './../common/dashboard';

class ManageBids extends Component {
    state = { 
        bids:{
            columns : [
                {label: 'Date',field: 'date',sort: 'asc',width: 180},
                {label: 'Slot',field: 'slot',sort: 'asc',width: 180},
                {label: 'Start/End Date',field: 'start_end_date',width: 180},
                {label: 'Amount',field: 'amount',sort: 'asc',width: 180},
                {label: 'Vol',field: 'vol',sort: 'asc',width: 180},
                {label: 'Total',field: 'total',sort:'asc',width: 180},
                {label: 'Bid Value',field: 'bid_value',sort: 'asc',width: 180},
                {label: 'Action ',field: 'action',sort: 'asc',width: 180}
              ],
            rows: [
                {item: "60 Seconds Sunrise Dail", 
                date: '02-09-2019', 
                slot:"Newspaper ",
                start_end_date:"20-01-2019 - 30-01-2019",
                amount: '20000', 
                vol: '1', 
                total: '20000', 
                bid_value: '10000',
                action:<div><button className="btn abtn">accept</button> &nbsp; <button className="btn abtn">decline</button></div>},
                
                {item: "60 Seconds Sunrise Dail", 
                date: '02-09-2019', 
                slot:"Newspaper ",
                start_end_date:"20-01-2019 - 30-01-2019",
                amount: '20000', 
                vol: '1', 
                total: '20000', 
                bid_value: '10000',
                action:<div><button className="btn abtn">accept</button> &nbsp; <button className="btn abtn">decline</button></div>}
            ]
        },
     }

    componentDidMount() {
       
    }

    render() { 
        const {bids} = this.state;
        return ( 
            <Dashboard>
                <div className="white-bg">
                        <h3 className="section-title">Review Bids</h3>
                        
                            <MDBDataTable responsive striped bordered hover
                                            data={bids}
                                            paging={true} />
                        
                </div>
            </Dashboard>
         );
    }
}
 
export default ManageBids;