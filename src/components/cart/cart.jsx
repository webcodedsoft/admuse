import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import FrontPage from '../common/frontPage';
import { getCart, removeCartItem } from './../../services/cartService';

class Cart extends Component {
    state = { 
        cart:{
            columns : [
                {label: 'Item',field: 'item',sort: 'asc',width:180},
                {label: 'Reach',field: 'reach',width:120},
                {label: 'Amount',field: 'amount',sort: 'asc',width:150},
                {label: 'Quantity',field: 'quantity',sort: 'asc',width:100},
                {label: 'Discount',field: 'discount',sort: 'asc',width:120},
                {label: 'Total',field: 'total',sort:'asc',width:180},
                {label: ' ',field: 'remove',sort: 'asc',width:50}
              ],
            rows: []
        },
        cart_total: "",
     }

    componentDidMount() {
        const cartdata = getCart();
        let items = [];
        cartdata.map((item, index) => {
                return items.push({ item: item.name, 
                         reach: (item.reach).toLocaleString(), 
                         amount: (item.price).toLocaleString(), 
                         quantity: item.quantity, 
                         discount: item.discount, 
                         total: (item.total).toLocaleString(),
                         remove:<button className="btn abtn" data-index={index} onClick={this.handleCartDelete}><i className="fas fa-trash"></i></button>
                       });
        });
        const reach_sum = _.sumBy(cartdata, (o) => parseInt(o.reach));
        const sub_total = _.sumBy(cartdata, (o) => parseInt(o.total));
        const total_row = {item: "", reach: (reach_sum).toLocaleString() + ' People', amount: '', vol: '', discount: '', total: 'NGN '+(sub_total).toLocaleString(), remove:''};
        const data = {...this.state.cart};
        data['rows'] = (items);
        data.rows.push(total_row);
        this.setState({cart: data, cart_total: sub_total});
    }

    handleCartDelete = (e) => {
        const index = e.currentTarget.dataset.index;
        let cart = {...this.state.cart}
        removeCartItem(index);
        cart['rows'].splice(index,1);
        this.setState({cart});
    }
    render() { 
        const {cart} = this.state;
        return ( 
            <FrontPage>
                <div className="container mt-150">
                        <h3 className="section-title">Cart Items</h3>
                        <MDBDataTable striped bordered hover
                                            data={cart}
                                            paging={true} />

                    <div className="row">
                        <div className="col-sm-6">
                            <Link to="media-house/slot/list" className="btn abtn abtn-2">Add more items</Link>&nbsp;
                            <Link to="/cart/checkout" className="btn abtn abtn-2">Confirm Booking</Link>
                        </div>
                        
                        <div className="col-sm-3 offset-3">
                            <p style={{marginTop: '10px', fontWeight: 'bold'}}>TOTAL: NGN <span>{this.state.cart_total.toLocaleString()}</span></p>
                        </div>
                    </div>
                </div>
            </FrontPage>
         );
    }
}
 
export default Cart;