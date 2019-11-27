import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import FrontPage from '../common/frontPage';

class Wishlist extends Component {
    state = { 
        lists:{
            columns : [
                {label: 'Date',field: 'date',sort: 'asc',width:180},
                {label: 'Slot',field: 'slot',width:120},
                {label: 'Est Reach',field: 'reach',sort: 'asc',width:150},
                {label: 'Amount',field: 'amount',sort: 'asc',width:100},
                {label: 'Action',field: 'action',sort:'asc',width:180}
              ],
            rows: [
                {date: "20/08/2019", slot: "My first booking", reach: 20000, amount: 20000,
                action:<div className="col-sm-12" style={{textAlign:'center' }}>
                            <Link to="#" className="btn abtn">Remove</Link> &nbsp;&nbsp;|&nbsp;&nbsp;
                            <Link to="#" className="btn abtn">Buy</Link>
                            </div>},
                {date: "22/08/2019", slot: "My second booking", reach: 10000, amount: 25000,
                 action:<div className="col-sm-12" style={{textAlign:'center' }}>
                            <Link to="#" className="btn abtn">Remove</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="#" className="btn abtn">Buy</Link>
                            </div>},
            ]
        }
     }

    componentDidMount() {
    }

    handleDelete = (e) => {
        alert("delete button clicked");
    }

    render() { 
        const {lists} = this.state;
        return ( 
            <FrontPage>
                <div className="container mt-150">
                        <h3 className="section-title">Wish List</h3>
                        <MDBDataTable striped bordered hover
                                            data={lists}
                                            paging={false} />

                    <div className="row">
                        <div className="offset-10 col-sm-2">
                            <Link to="/" className="btn abtn abtn-2 btn-block">Go Home</Link>
                        </div>
                    </div>
                </div>
            </FrontPage>
         );
    }
}
 
export default Wishlist;