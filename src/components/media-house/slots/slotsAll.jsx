import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import Dashboard from './../../common/dashboard';

class SlotsAll extends Component {
    state = { 
        data:{
            columns : [
                {label: 'Name',field: 'name',sort: 'asc',width:200},
                {label: 'Type',field: 'type',sort: 'asc',width:150},
                {label: 'Program',field: 'program',sort: 'asc',width:150},
                {label: '# in a Prog.',field: 'no_in_program',sort: 'asc',width:150},
                {label: 'Frequency',field: 'frequency',sort: 'asc',width:150},
                {label: 'Est. Reach',field: 'reach',sort: 'asc',width:150},
                {label: 'Focus',field: 'focus',sort: 'asc',width:150},
                {label: 'Dist. State',field: 'dist_state',sort: 'asc',width:150},
                {label: 'Dist LGA.',field: 'dist_lga',sort: 'asc',width:150},
                {label: 'Age Group',field: 'age_group',sort: 'asc',width:150},
                {label: 'Interest',field: 'interest',sort: 'asc',width:150},
                {label: 'Gender',field: 'gender',sort: 'asc',width:150},
                {label: 'Media Type',field: 'media_type',sort: 'asc',width:150},
                {label: 'Size',field: 'size',sort: 'asc',width:150},
                {label: 'Unit',field: 'unit',sort: 'asc',width:150},
                {label: 'Amount',field: 'amount',sort: 'asc',width:150},
                {label: 'Discount',field: 'discount',sort: 'asc',width:150},
                {label: 'Min Frequency',field: 'min_frequency',sort: 'asc',width:150},
                {label: 'Vol Discount',field: 'vol_discount',sort: 'asc',width:150},
                {label: 'Min Volume',field: 'min_vol',sort:'asc',width:150},
                {label: 'Min Bid Amount',field: 'min_bid_amount',sort:'asc',width:150},
                {label: 'Image',field: 'image',sort:'asc',width:150}
              ],
            rows: [
                    {name: <Link to="/media-house/slot/view/faaji_lawa">Fullpage Ad on the Guardian</Link>,
                     type: "Text",
                     program:'Good Morning Lagos',
                     no_in_program: 4,
                     frequency: 100.5,
                     reach: 200000,
                     focus: 'old people',
                     dist_state: 'Lagos State',
                     dist_lga:'Eti Osa',
                     age_group:'20 - 80',
                     interest: 'Gist',
                     gender:'Male/Female',
                     media_type:'Audio',
                     size:'2.5 in',
                     unit: 5,
                     amount: '#200000',
                     discount: '0',
                     min_frequency: '-',
                     vol_discount: '0',
                     min_vol: '0',
                     min_bid_amount: '1000',
                     image: 'No Image'},

                     {name: <Link to="/media-house/slot/view/faaji_lawa">Half page Ad on the Guardian</Link>,
                     type: "Text + Audio",
                     program:'Good Evening Lagos',
                     no_in_program: 1,
                     frequency: 100.5,
                     reach: 2000000,
                     focus: 'old people',
                     dist_state: 'Lagos State',
                     dist_lga:'Eti Osa',
                     age_group:'20 - 80',
                     interest: 'Gist',
                     gender:'Male/Female',
                     media_type:'Audio',
                     size:'2.5 in',
                     unit:5,
                     amount: '#200000',
                     discount: '0',
                     min_frequency: '-',
                     vol_discount: '0',
                     min_vol: '0',
                     min_bid_amount: '1000',
                     image: 'No Image'}
                ],
        }
    };

    async componentDidMount() {
        
    }

    render() { 
        return ( 
            <Dashboard>
                <div className="white-bg">
                        <h2 className="section-title">All Slots</h2>
                        {/*striped bordered hover*/}
                        <div className="table-responsive">
                            <MDBDataTable scrollX-250px responsive striped bordered hover
                                       data={this.state.data}
                                       paging={true} /> 
                        </div>
                </div>
                        <Link to={`/`} className="btn abtn abtn-2 pull-sm-right" style={{padding: '10px' }}>Go Back</Link>
                        
            </Dashboard>
         );
    }
}
 
export default SlotsAll;