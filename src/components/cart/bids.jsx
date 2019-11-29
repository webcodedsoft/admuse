import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import FrontPage from '../common/frontPage';

class Bids extends Component {
    state = { 
        publisher_bid:{
            columns : [
                {label: 'Date',field: 'date',sort: 'asc',width:180},
                {label: 'Slot',field: 'slot',sort: 'asc',width:180},
                {label: 'Start/End Date',field: 'start_end_date',width:120},
                {label: 'Amount',field: 'amount',sort: 'asc',width:150},
                {label: 'Vol',field: 'vol',sort: 'asc',width:100},
                {label: 'Total',field: 'total',sort:'asc',width:180},
                {label: 'Bid Value',field: 'bid_value',sort: 'asc',width:120},
                {label: 'Action',field: 'action',sort: 'asc',width:50}
              ],
            rows: [
                {item: "60 Seconds Sunrise Dail", time: '', amount: 20000, vol: 1, total: 20000, bid_value: 10000,
                date: "02-09-2019",
                slot:"Newspaper ",
                start_end_date:"20-01-2019 - 30-01-2019",
                amount:"20000",
                vol:"N/A",
                total:"N/A",
                baid_value:"50000",
                action:<div className="col-sm-12" style={{textAlign:'center' }}>
                            <Link to="#" className="btn abtn ">Accept</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="#" className="btn abtn ">Decline</Link>
                            </div>,
            }
            ]
        },


         advertiser_bid:{
            columns : [
                {label: 'Date',field: 'date',sort: 'asc',width:180},
                {label: 'Slot',field: 'slot',sort: 'asc',width:180},
                {label: 'Start/End Date',field: 'start_end_date',width:120},
                {label: 'Amount',field: 'amount',sort: 'asc',width:150},
                {label: 'Vol',field: 'vol',sort: 'asc',width:100},
                {label: 'Total',field: 'total',sort:'asc',width:180},
                {label: 'Bid Value',field: 'bid_value',sort: 'asc',width:120},
                {label: 'Status',field: 'status',sort: 'asc',width:50}
              ],
            rows: [
                {item: "60 Seconds Sunrise Dail", time: '', amount: 20000, vol: 1, total: 20000, bid_value: 10000,
                date: "02-09-2019",
                slot:"Newspaper ",
                start_end_date:"20-01-2019 - 30-01-2019",
                amount:"20000",
                vol:"N/A",
                total:"N/A",
                baid_value:"50000",
                status:"Accepted",
            }
            ]
        },

     }

    componentDidMount() {
       
    }

    render() { 
        const {publisher_bid} = this.state;
        const {advertiser_bid} = this.state;
        const {user} = this.props;
        let bid_list_table ='';

        if(user && user.type === "publisher") {
        bid_list_table = <MDBDataTable striped bordered hover data={publisher_bid} paging={false} />
        }else{
        bid_list_table = <MDBDataTable striped bordered hover data={advertiser_bid} paging={false} />
        }

        return ( 
            <FrontPage>
                <div className="container mt-150">
                        <h3 className="section-title">Bids</h3>
                        
                        { bid_list_table }

                    <div className="row">
                        <div className="col-sm-7">

                        </div>
                        <div className="col-sm-3">
                            
                        </div>
                        <div className="col-sm-2">
                            <Link to="/campaigns-dashboard" className="btn abtn abtn-2 btn-block">Go Back</Link>
                        </div>
                    </div>
                </div>
            </FrontPage>
         );
    }
}
 
export default Bids;