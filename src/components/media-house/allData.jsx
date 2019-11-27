import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import Dashboard from './../common/dashboard';

class AllData extends Component {
    state = { 
        data:{
            columns : [
                {label: 'Date',field: 'date',sort: 'asc',width:150},
                {label: 'Campaign',field: 'campaign',sort: 'asc',width:200},
                {label: 'Slot Name',field: 'slot',sort: 'asc',width:200},
                {label: 'Slot Type',field: 'type',sort: 'asc',width:120},
                {label: 'Slot Size',field: 'size',sort: 'asc',width:100},
                {label: 'Media Channel',field: 'channel',sort: 'asc',width:180},
                {label: 'Publisher',field: 'publisher',sort: 'asc',width:180},
                {label: 'Date Scheduled',field: 'date_scheduled',sort: 'asc',width:150},
                {label: 'Date Published',field: 'date_published',sort: 'asc',width:150},
                {label: 'Material',field: 'material',sort: 'asc',width:200},
                {label: 'APCON #',field: 'apcon_no',sort: 'asc',width:200},
                {label: 'Publication Proof',field: 'proof',sort: 'asc',width:150},
                {label: 'Estimated Reach',field: 'reach',sort:'asc',width:150},
                {label: 'Audience Age Group',field: 'age_group',sort:'asc',width:150},
                {label: 'Audience Interest',field: 'interest',sort:'asc',width:150},
                {label: 'Audience Gender',field: 'gender',sort:'asc',width:150},
                {label: 'Social Class',field: 'social_class',sort:'asc',width:150},
                {label: 'Rating',field: 'rating',sort:'asc',width:200},
                {label: 'Comments',field: 'comment',sort:'asc',width:200}
              ],
            rows: [
                    {date:'20/11/2019',
                     campaine:'Good Morning Lagos',
                     slot: "Fullpage Ad on the Guardian",
                     type: "Text",
                     size: '2.5 in',
                     channel:'Newspaper',
                     publisher:'Guardian',
                     data_scheduled:'12/11/2019',
                     date_published: '15/11/2019',
                     material:'I dont know',
                     apcon_no:2000,
                     proof:'affidavit',
                     reach:'200000',
                     age_group: 'teenagers',
                     interest:'Entertainment',
                     gender:'straight male',
                     social_class:'elites',
                     rating: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
                     comment:'Nice one'
                    },
                    {date:'19/08/2019',
                     campaine:'Faaji Kelele',
                     slot: "30 secs advert",
                     type: "audio",
                     size: '30 sec',
                     channel:'Radio',
                     publisher:'Faaji FM',
                     data_scheduled:'12/09/2019',
                     date_published: '15/09/2019',
                     material:'Audio record',
                     apcon_no:299000,
                     proof:'affidavit',
                     reach:'200000',
                     age_group: 'Parents',
                     interest:'Entertainment',
                     gender:'straight everybody',
                     social_class:'everybody',
                     rating: <span><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>,
                     comment:'Nice one'
                    }
                ],
        }
    };

    async componentDidMount() {
        
    }

    render() { 
        return ( 
            <Dashboard>
                <div className="white-bg">
                        <h2 className="section-title">All Data</h2>
                        <MDBDataTable scrollX striped bordered hover
                                       data={this.state.data}
                                       paging={false}
                                       ordering={true} /> 
                        <Link to={`/`} className="btn abtn abtn-2 pull-sm-right" style={{padding: '10px' }}>Go Back</Link>
                        </div>
            </Dashboard>
         );
    }
}
 
export default AllData;