import React, {Component} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { getCurrentUserObject } from '../../services/authService';
import { verifyPayment } from '../../services/userService';
import { fundWallet } from './../../services/userService';

class FundWalletForm extends Component {
    state = { 
        data: {
                amount:0,
        },
        user: {email:''}
     }
    
    async componentDidMount() {
        const userData = getCurrentUserObject();
        const user = {...this.state.user};
        user['email'] = userData.email;
        this.setState({user});
    }

    handleChange = ({currentTarget: input}) => {
        const data = {...this.state.data}
        data[input.name] = input.value;
        this.setState({data});
    }

    // callback = async (response) => {
    //     if(response.message === "Approved") {
    //         const reference = response.reference;
    //         const {data} = await verifyPayment(reference);
    //         if(data.statusText === "error") {
    //             toast.error('Error: payment failed, unable to verify transaction reference!');
    //         } else {
    //             const {data} = await fundWallet(this.state.data);
    //             if(data.statusText === "error") {
    //                 toast.error('Error: Unable to fund wallet, please contact the administrator');
    //             } else {
    //                 toast.success('Success: Wallet funding successful');
    //                 this.props.history.push('/user/account');
    //             }
    //         }
    //         console.log(data);
    //     } else {
    //         toast.error('Error: payment failed');
    //     }
    // }

    // close = () => {
    //     console.log("Payment closed");
    // }

    fund = async (e) => {
        e.preventDefault()
        const {data} = await fundWallet(this.state.data);
        if(data.statusText === "error") {
            toast.error('Error: Unable to fund wallet, please contact the administrator');
        } else {
            console.log(data);
            window.location = data.result.url;
            toast.success('Success: Wallet funding successful');
            // this.props.history.push('/user/account');
        }
    }

    // getReference = () => {
    //     //you can put any unique reference implementation code here
    //     let text = "";
    //     let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    //     for( let i=0; i < 15; i++ )
    //         text += possible.charAt(Math.floor(Math.random() * possible.length));

    //     return text;
    // }

    render() { 
        return (
            <React.Fragment>
                
                        <div className="container">
                            <div className="row">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <label>Amount</label>
                                                <input type='text' className="form-control" placeholder="amount" value={this.state.data.amount} name='amount' id='amount' onChange={this.handleChange} />
                                            </div>

                                            <div className="col-sm-12">
                                                <br />
                                                <button className="btn abtn abtn-2" onClick={this.fund}>{`Fund wallet with (N${this.state.data.amount})`}</button>
                                                {/* <PaystackButton
                                                    text={`Fund wallet with (N${this.state.data.amount})`}
                                                    className="btn abtn abtn-2"
                                                    callback={this.callback}
                                                    close={this.close}
                                                    disabled={false}
                                                    embed={false}
                                                    reference={this.getReference()}
                                                    email={this.state.user.email}
                                                    amount={this.state.data.amount*100}
                                                    paystackkey={paystack_public_key}
                                                    tag="button"
                                                /> */}
                                                <br />
                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
            </React.Fragment> 
         );
    }
}
 
export default FundWalletForm;