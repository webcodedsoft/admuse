import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import Dashboard from '../common/dashboard';
// import { Calendar } from 'react-big-calendar';
import { Calendar } from 'react-calendar-component';
import moment from 'moment';
import 'moment/locale/nb';


class MediaHouseDashboard extends Component {
    state = { 
         date: moment(),

        bookings:{
            columns : [
                {label: 'Slot',field: 'slot',sort: 'asc',width:180},
                {label: 'Materials',field: 'material',width:120},
                {label: 'Amount',field: 'amount',sort: 'asc',width:150},
                {label: 'Schedule',field: 'schedule',sort: 'asc',width:100},
                {label: 'Comment',field: 'comment',sort: 'asc',width:120},
                {label: 'Ad Executive',field: 'ad_executive',sort: 'asc',width:120},
                {label: 'Action',field: 'action',sort:'asc',width:180},
                {label: 'Publication Status',field: 'publication_status',sort: 'asc',width:120},
             ],
            rows: [
                {item: "60 Seconds Sunrise Daily", 
                 slot: "Fullpage Ad on the Guardian",
                 material: <Link to='/'>Click to view</Link>, 
                 amount: '20000', 
                 schedule: '01.09.2019', 
                 comment: 'Scheduled',
                 ad_executive: 'NA',
                 action: <div className="col-sm-12" style={{textAlign:'center' }}>
                            <Link to="#" className="btn abtn">Approve</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="#" className="btn abtn">Decline</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="#" className="btn abtn">Reschedule</Link>
                            </div>,
                           
                 publication_status: <div className="col-sm-12" style={{textAlign:'center' }}>
                            <Link to="#" className="btn abtn">Mark as Published</Link> 
                            </div>,
            
                },

                {item: "60 Seconds on Radio Nigeria", 
                 slot: "Fullpage Ad on the Guardian",
                 material: <Link to={`/media-house/edit/1`}>Click to view</Link>, 
                 amount: 120000, 
                 schedule: '01.09.2019', 
                  comment: 'Scheduled',
                 ad_executive: 'NA',
                action: <div className="col-sm-12" style={{textAlign:'center' }}>
                            <Link to="#" className="btn abtn">Approve</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="#" className="btn abtn">Decline</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="#" className="btn abtn">Reschedule</Link>
                            </div>,
                           
                 publication_status: <div className="col-sm-12" style={{textAlign:'center' }}>
                            <Link to="#" className="btn abtn">Mark as Published</Link> 
                            </div>,
                }
            ]
        },
        data: {
            columns : [
                {label: 'Name',field: 'name',sort: 'asc',width:150},
                {label: 'Program',field: 'program',sort: 'asc',width:130},
                {label: 'Type',field: 'type',sort: 'asc',width:120},
                {label: 'Size',field: 'size',sort: 'asc',width:120},
                {label: 'Price',field: 'price',sort: 'asc',width:130},
                {label: 'Available',field: 'available',sort: 'asc',width:120},
                {label: 'Media Type',field: 'media_type',sort:'asc',width:200}
              ],
            rows: [
                    {name: "Fullpage Ad on the Guardian",program: "Time na Money", type: "Text",size:'N/A',price: 2000, available: <span className="badge badge-success active">Yes</span>,media_type: "text + pdf"},
                    {name: "Fullpage Ad on the Guardian",program: "Time na Money",type: "Text",size:'N/A',price: 2000, available: <span className="badge badge-success active">Yes</span>,media_type: "text + pdf"},
                    {name: "Fullpage Ad on the Guardian",program: "Time na Money",type: "Text",size:'N/A',price: 2000, available: <span className="badge badge-danger active">No</span>,media_type: "text + pdf"},
                    
                ],
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
                                        <div className="col-sm-4">
                                            <Link to="/all-programs">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-tv"></i>
                                                    <h4>25 Programmes</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-4">
                                            <Link to="/user/bookings">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-clock"></i>
                                                    <h4>Booked vs Scheduled</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="item">
                                                <i className="fas fa-2x fa-dollar-sign"></i>
                                                <h4>N2500000 Sales</h4>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <Link to="/slots/all">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-box"></i>
                                                    <h4>30 Slots</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-4">
                                            <Link to="/campaigns">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-bullhorn"></i>
                                                    <h4>60 Published Ads</h4>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-sm-4">
                                            <Link to="/bids/manage">
                                                <div className="item">
                                                    <i className="fas fa-2x fa-clock"></i>
                                                    <h4>2340 Bids</h4>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <h4>Calendar</h4>
                                     <Calendar
                                        onChangeMonth={date => this.setState({ date })}
                                        date={this.state.date}
                                        onPickDate={date => console.log(date)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="offset-0 col-sm-12" style={{textAlign:'right'}}>
                            <br />
                            <Link to="/bids/manage" className="btn abtn abtn-2">Review Bid</Link>
                            <Link to="/wizard/share-rate/select/media-house" className="btn abtn abtn-2">Share Rate Card</Link>
                            <Link to="/media-house/faaji-lawal/program/create" className="btn abtn abtn-2">Create New Programme</Link>
                            <Link to="/media-house/faaji-lawal/program/time-na-money/slot/create" className="btn abtn abtn-2">Create New Slot</Link> 
                            <Link to="/user/account" className="btn abtn abtn-2">Profile</Link>
                        </div>
                        <h4>Recent Bookings</h4>
                        <div className="table-responsive">
                        <MDBDataTable striped bordered hover
                                            data={this.state.bookings}
                                            paging={false} />
                        </div>
                        <br/>
                        <h4>Recent Slots</h4>
                        <MDBDataTable striped bordered hover
                                       data={this.state.data}
                                       paging={false} /> 
                        <Link to={`/`} className="btn abtn abtn-2 pull-sm-right" style={{padding: '10px' }}>Go Back</Link>
                        </div>
            </Dashboard>
         );
    }
}
 
export default MediaHouseDashboard;