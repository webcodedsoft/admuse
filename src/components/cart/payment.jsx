import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FrontPage from '../common/frontPage';

class Payment extends Component {
    state = { 
        lists:{
            
        }
     }

    componentDidMount() {
    }

    render() { 
        return ( 
            <FrontPage>
                <div className="container mt-150">
                    <h3 className="section-title">Checkout</h3>
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
 
export default Payment;