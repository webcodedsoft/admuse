import React from 'react';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from './../common/form';
import { getBanks, createBankAccount } from '../../services/userService';
import Input from './../common/input';
import { getNameOnBank } from './../../services/userService';

class BankDetailsForm extends Form {
    state = { 
        data: {
                name : "",
                number : "",
                bank_code : "",
        },
        errors: {},
        banks:[],
        user_id:''
     }

     schema = {
        name:Joi.string().required().label("Full Name"),
        number:Joi.string().required().label("Account Number"),
        bank_code:Joi.string().label("Bank"),
    }
    
    async componentDidMount() {
       const { data } = await getBanks();
       const banks = data.data.map( bank => {
            return { key: bank.code, value: bank.name }
       });
       this.setState({ banks });
    }
    async doSubmit() {
        try{
            const { data } = await createBankAccount(this.state.data);
            console.log(data);
            if(data.statusText === "error") {
                toast.error(`Error: ${data.result.errors.message}:`);
            } else {
                toast.success(`Bank account created`);
            }
        } catch(ex) {
            console.log(ex);
        }
        
    }

    renderButton(label) {
        return (
                <button disabled={this.validate()} className="btn abtn abtn-2">
                    {label}
                </button>
                );
    }

    renderName(name, label, options = []) {
        const {data, errors} = this.state;
        return (
            <Input
                value={data[name]}
                error={errors[name]}
                name={name}
                label={label}
                onChange={this.handleChange}
                onBlur={ this.handleGetName }
            />
            
        );
    }

    handleGetName = async ({currentTarget: input}) => {
        const data = {...this.state.data};
        const account = await getNameOnBank(data.bank_code, data.number);
        data['name'] = account.data.result.account_name;
        this.setState({ data } );
    }

    render() { 
        return ( 
                <form onSubmit={this.handleSubmit}>
                        <div className="container">
                            <div className="row">
                                        <div className="row">
                                            <div className="col-sm-6 clearfix">
                                                {this.renderSelect('bank_code', 'Bank Name',this.state.banks)}
                                            </div>
                                            <div className="col-sm-6 clearfix">
                                                {this.renderName('number', 'Account Number')}
                                            </div>
                                            <div className="col-sm-6 clearfix">
                                                {this.renderInput('name', 'Account Name')}
                                            </div>

                                            <div className="col-sm-12">
                                                <br />
                                                { this.renderButton((!this.state.user_id) ? 'Add Bank Details' : 'Edit Bank Details') }
                                                <br /><br />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </form>
         );
    }
}
 
export default BankDetailsForm;