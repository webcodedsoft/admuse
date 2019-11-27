import React, { Component } from 'react';
import _ from 'lodash';
import FrontPage from '../common/frontPage';
import { getCart, saveBooking, emptyCart } from './../../services/cartService';
import {toast} from 'react-toastify';

class ConfirmBooking extends Component {
    state = { 
        cart_total: "",
     }

    componentDidMount() {
        const cartdata = getCart();
        const sub_total = _.sumBy(cartdata, (o) => parseInt(o.total));
        this.setState({cart_total: sub_total});
    }
    checkout = async () => {
        const cartdata = getCart();
        let items = [];
        cartdata.map((item, index) => {
                return items.push(item.id);
        });
        const { data } = await saveBooking({items: items});
        if (data.statusText === "error") {
            toast.error(data.result.message);
        } else {
            emptyCart();
            this.props.history.push('/');
            toast.success('Your booking has been saved');
        }
    }
    render() { 
        return ( 
            <FrontPage>
                <div className="container mt-150">
                    <h3 className="section-title">Confirm Booking</h3>

                    <p className="alert alert-info">You will pay N{this.state.cart_total.toLocaleString()} for this order, do you wish to proceed with booking</p>

                    <div className="row">
                        <div className="col-sm-6">
                            <button onClick={this.checkout} className="btn abtn abtn-2">Submit Booking</button>
                        </div>
                        
                    </div>
                </div>
            </FrontPage>
         );
    }
}
 
export default ConfirmBooking;