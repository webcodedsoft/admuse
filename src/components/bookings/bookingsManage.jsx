import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import Dashboard from './../common/dashboard';
import { getBookings } from './../../services/cartService';

class BookingsManage extends Component {
       state = { 
        bookings:{
            columns : [
                {label: 'Booking Name',field: 'booking_name',sort: 'asc',width:180},
                {label: 'Start - End Date',field: 'start_end_date',width:120},
                {label: 'Amount',field: 'amount',sort: 'asc',width:150},
                {label: 'Reach',field: 'reach',sort: 'asc',width:100},
                {label: 'Schedule',field: 'schedule',sort:'asc',width:180},
                {label: 'Material',field: 'material',sort: 'asc',width:120},
                {label: 'APCON #',field: 'apcon_num',sort: 'asc',width:120},
                {label: 'Status',field: 'status',sort: 'asc',width:120},
                {label: 'Colaborators',field: 'colaborators',sort: 'asc',width:100},
                {label: 'Rating',field: 'rating',sort: 'asc',width:100}
              ],
            rows: [
                {item: "60 Seconds Sunrise Daily", 
                 booking_name: 'On the move', 
                 start_end_date: '01.09.2019 - 05.09.2019', 
                 amount: '40000', 
                 reach: '10000', 
                 schedule: '02.09.2019',
                 material: <Link to={`/media-house/edit/1`}>Click to view</Link>,
                 apcon_num: '#5245',
                status:'Published',
                colaborators:'N/A',
                rating:<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>},

                {item: "60 Seconds on Radio Nigeria", 
                 booking_name: 'Time Na Money', 
                 start_end_date: '09.09.2019 - 20.09.2019', 
                 amount: '80000', 
                 reach: '50000', 
                 schedule: '10.09.2019',
                 material: <Link to={`/media-house/edit/1`}>Click to view</Link>,
                 apcon_num: '#5855',
                status:'Published',
                colaborators:'N/A',
                rating:<span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>}
            ]
        }
    };

    async componentDidMount() {
        const { data } = await getBookings();
        console.log(data);
    }

    render() { 
        const {bookings} = this.state;
        return ( 
            <Dashboard>
                <div className="white-bg">
                        <h3 className="section-title">Booking History</h3>
                        <MDBDataTable scrollX striped bordered hover
                                            data={bookings}
                                            paging={true} />


                        <div className="offset-6 col-sm-6" style={{ textAlign: 'right'}}>
                            <button className="btn abtn abtn-2 pull-sm-right" style={{marginLeft:'10px'}}>Export as PDF</button>
                        </div>
                        <br/>
                </div>
               

                        

                
            </Dashboard>
         );
    }
}
 
export default BookingsManage;