import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import Form from './../common/form';
import Dashboard from './../common/dashboard';
import { getBookings } from './../../services/cartService';

class Bookings extends Component {
    state = { 
        bookings:{
            columns : [
                {label: 'Slot',field: 'slot',sort: 'asc',width:180},
                {label: 'Materials',field: 'material',width:120},
                {label: 'Amount',field: 'amount',sort: 'asc',width:150},
                {label: 'Schedule',field: 'schedule',sort: 'asc',width:100},
                {label: 'Approval Status',field: 'approval_status',sort:'asc',width:180},
                {label: 'Publication Status',field: 'publication_status',sort: 'asc',width:120},
                {label: 'Comment',field: 'comment',sort: 'asc',width:120},
                {label: 'Ad Executive',field: 'ad_executive',sort: 'asc',width:120},
                {label: 'Rating',field: 'rating',sort: 'asc',width:100}
              ],
            rows: [
                {item: "60 Seconds Sunrise Daily", 
                 material: <Link to={`/media-house/edit/1`}>Click to view</Link>, 
                 amount: 20000, 
                 schedule: '01.09.2019', 
                 approval_status: 'Approval', 
                 publication_status: 'Published',
                 comment: 'Scheduled',
                 ad_executive: 'NA',
                rating:<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>},

                {item: "60 Seconds on Radio Nigeria", 
                 material: <Link to={`/media-house/edit/1`}>Click to view</Link>, 
                 amount: 120000, 
                 schedule: '01.09.2019', 
                 approval_status: 'Approval', 
                 publication_status: 'Published',
                 comment: 'Scheduled',
                 ad_executive: 'NA',
                rating:<span><i className="fas fa-star"></i><i className="fas fa-star"></i></span>}
            ]
        },
     }

    async componentDidMount() {
       const { data } = await getBookings();
       //console.log(data);
    }

    render() { 
        const {bookings} = this.state;
       
        return ( 
            <Dashboard>
                <div className="container mt-150">
                        <h3 className="section-title">My Bookings</h3>

                <h5>Filter</h5>      
                <select  className="form-control ad-input col-md-3">
                    <option disabled selected>Choose Option...</option>
                     <option value="paid" >Paid</option>
                     <option value="unpaid" >Unpaid</option>
                </select>
                            <MDBDataTable scrollX-250px responsive striped bordered hover
                                            data={bookings}
                                            paging={true} />
                       
                    <div className="row">
                        <div className="offset-10 col-sm-2">
                            <Link to="/" className="btn abtn abtn-2 ">Go Back</Link>
                        </div>
                    </div>
                </div>
            </Dashboard>
         );
    }
}
 
export default Bookings;