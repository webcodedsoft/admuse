import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import Dashboard from './../common/dashboard';
/*import { Calendar } from 'react-calendar-component';
import moment from 'moment';
import 'moment/locale/nb';*/
import CalendarMonthView from 'react-calendar-month-view';
class CampaigneDashboard extends Component {

    _renderDay = (date, isSmallCalendar) => {
    // return a component to render for the given date
  };
  
    state = { 
        //date: moment(),

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
        
    }

    render() { 
        return ( 
            <Dashboard>
                <div className="white-bg">
                        <h2 className="section-title">Dashboard</h2>
                        <div className="media-house-stat">
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="row">
                                        
                                        <div className="col-sm-3">
                                            <Link to="/all-data">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-tv"></i>
                                                    <h4>25 Programmes</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-3">
                                            <Link to="/slots/all">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-box"></i>
                                                    <h4>25 Slots</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-3">
                                            <Link to="/all-data">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-cogs"></i>
                                                    <h4>28 Materials</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-3">
                                            <Link to="/user/wallet-history">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-dollar-sign"></i>
                                                    <h4>N260000 Budget</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-3">
                                            <Link to="/all-data">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-clock"></i>
                                                    <h4>29 Running Campaigns</h4>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="col-sm-3">
                                            <Link to="/all-data">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-clock"></i>
                                                    <h4>4 Scheduled</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-3">
                                            <Link to="/all-data">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-bullhorn"></i>
                                                    <h4>10 Publisher</h4>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className="col-sm-3">
                                            <Link to="/user/wallet-history">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-shopping-cart"></i>
                                                    <h4>3000 Spent</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-3">
                                            <Link to="/all-data">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-times"></i>
                                                    <h4>30 Closed Campaigns</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        
                                        <div className="col-sm-3">
                                            <Link to="/all-data">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-stamp"></i>
                                                    <h4>20 Published</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-3">
                                            <Link to="/all-data">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-ruler"></i>
                                                    <h4>25 in Audience Size</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-3">
                                            <Link to="/user/wallet-history">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-wallet"></i>
                                                    <h4>2500 Balance</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <h4>Calendar</h4>
                                    {/*<Calendar
                                        onChangeMonth={date => this.setState({ date })}
                                        date={this.state.date}
                                        onPickDate={date => console.log(date)}
                                    />*/}
                                    <CalendarMonthView renderDay={this._renderDay} />
                                </div>
                            </div>
                        </div>

                        <div className="offset-6 col-sm-6" style={{ textAlign: 'right'}}>
                            <br />
                            <Link to="/media-house/slot/list" className="btn abtn abtn-2">Buy Slots </Link>
                        </div>
                        <br/>
                        
                        <h4>Booking History</h4>
                        <div className="table-responsive">
                        <MDBDataTable striped bordered hover
                                            data={this.state.bookings}
                                            paging={false} />
                        </div>

                        <div className="offset-6 col-sm-6" style={{ textAlign: 'right'}}>
                            <br />
                            <button className="btn abtn abtn-2">Export as PDF</button>
                        </div>
                        <br/>
                        </div>
            </Dashboard>
         );
    }
}
 
export default CampaigneDashboard;