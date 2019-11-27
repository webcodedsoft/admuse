import React from 'react';


const Profile = (props) => {
    const {data} = props;
    return (
                <div>
                    <h4 className="l-title">My Profile</h4><br/>
                    <table className="table table-striped">
                        <tbody>
                            <tr><td>Name</td><td>{ data.name }</td></tr>
                            <tr><td>Email</td><td>{ data.email }</td></tr>
                            <tr><td>Account Type</td><td>{ data.type }</td></tr>
                            <tr><td>Wallet Balance</td><td>N{ data.balance }</td></tr>
                        </tbody>
                    </table>
                </div>);
}
 
export default Profile;
