import React, { Component } from 'react';
import { getUser } from '../../services/userService';
import Dashboard from './../common/dashboard';
import Profile from './Profile';
import BankDetailsForm from './BankDetailsForm';
import FundWalletForm from './FundWalletForm';

class Account extends Component {
    state = { 
        profile: {},
        activeItem: 1
     }

    async componentDidMount() {
        const response = await getUser();
        const { result: profile } = response.data;
        this.setState({ profile });
    }

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
          this.setState({
            activeItem: tab
          });
        }
      };

    render() { 
        const { profile } = this.state;
        return ( 
            <Dashboard>
                <div className="white-bg">
                            <h3 className="section-title">My Account</h3>


                            <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><i className="fas fa-user"></i> &nbsp; Home</a>
                                {/*<a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><i className="fas fa-home"></i> &nbsp; Bank Details</a> */}
                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><i className="fas fa-wallet"></i> &nbsp; My Wallet</a>
                            </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="p-5">
                                        <Profile data={ profile } />
                                    </div>
                                </div>
                                {/*<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="p-5">
                                        <h4 className="l-title">Bank Details</h4><br />
                                        <BankDetailsForm />
                                    </div>
                                </div> */}
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div className="p-5">
                                        <h4 className="l-title">&nbsp; Fund Wallet</h4> <br />
                                        <FundWalletForm />
                                    </div>
                                </div>
                            </div>    
                        </div>
            </Dashboard>
         );
    }
}
 
export default Account;