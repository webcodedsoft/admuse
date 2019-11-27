import React, { Component } from 'react';
import Dashboard from '../common/dashboard';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import { getAllUsers } from '../../services/userService';

class UserList extends Component {
    state = { 
        data:{
            columns : [
                {label: 'Name',field: 'name',sort: 'asc',width:280},
                {label: 'Email',field: 'email',sort: 'asc',width:280},
                {label: 'Type',field: 'type',sort: 'asc',width:100},
                {label: 'Edit',field: 'edit',sort: 'asc',width:100},
              ],
            rows: []
        },
        links:""
     }

    async componentDidMount() {
        try{
            const {data} = await getAllUsers();
            const users = this.mapToViewModel(data);
            const stateObj = {...this.state.data};
            stateObj['rows'] = users;
            this.setState({ data: stateObj, links:data.result.links });
        } catch (e) {
            return null;
        }
    }
    handlePageChange = async (ev) => {
        try{
            const page = ev.currentTarget.dataset.href;
            const {data} = await getAllUsers(page);
            const users = this.mapToViewModel(data);
            const stateObj = {...this.state.data};
            stateObj['rows'] = users;
            this.setState({ data: stateObj, links:data.result.links });
        } catch (e) {
            return null;
        }
    }
    mapToViewModel = (data) => {
        const users = [];
            data.result.data.map((user) => {
               return users.push({
                   name: user.name, 
                   email:user.email,
                   type:user.type, 
                   edit:<Link to={`/users/edit/${user.id}`} className="btn abtn">Edit</Link>});
            });
        return users;
    }

    render() { 
        const { links } = this.state;
        return ( 
            <Dashboard>
                <div className="white-bg">
                    <h3 className="section-title">Manage Users</h3>
                    <Link to="/users/create" className="btn abtn abtn-2" style={{padding: '10px' }}>Create User</Link>
                   
                        <MDBDataTable scrollX striped bordered hover
                                            data={this.state.data}
                                            paging={false} />
                    <br />
                    <ul className="pagination">
                        <li className="page-item"><button className="page-link" data-href={`${links.first_page}`} onClick={this.handlePageChange}>&laquo;</button></li>
                        <li className="page-item"><button className="page-link" data-href={`${links.prev_page}`} onClick={this.handlePageChange}>Prev</button></li>
                        <li className="page-item"><button className="page-link" data-href={`${links.next_page}`} onClick={this.handlePageChange}>Next</button></li>
                        <li className="page-item"><button className="page-link" data-href={`${links.last_page}`} onClick={this.handlePageChange}>&raquo;</button></li>
                    </ul>               
                </div>
            </Dashboard>
         );
    }
}
 
export default UserList;