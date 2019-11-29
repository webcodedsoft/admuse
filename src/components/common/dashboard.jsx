import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../../services/authService';


class Dashboard extends Component {
    state = {
        sidebarOpen: true,
        user:""
    }
    constructor() {
        super();
        this._handleOpen = this._handleOpen.bind(this);
    }

    componentDidMount() {
        const user = auth.getCurrentUserObject();
        // this._handleSidebarOpen();
        this.setState({user});
    }

    _handleSidebarOpen() {
        const mmenu = sessionStorage.getItem('admuse_mmenu');
        const ul = document.getElementsByClassName('param');
        (!mmenu) ? ul[0].classList.add('active') : ul[0].classList.remove('active');
    }

    _handleOpen(e) {
        e.preventDefault();
        const mmenu = sessionStorage.getItem('admuse_mmenu');
        const ul = e.target.nextSibling;
        ul.classList.toggle('active');
        const newmmenu = !mmenu;
        sessionStorage.setItem('admuse_mmenu',newmmenu);
    }

    toggleSideBar = () => {
        this.setState({sidebarOpen: !this.state.sidebarOpen});
    }
    render() {
        const {children} = this.props;
        const {user} = this.state;
        return ( 
            <React.Fragment>
                <ToastContainer />
                    <div className="dashboard">
                        <div className="container-fluid p-0">
                        <button onClick={this.toggleSideBar} 
                                className="sidebar-toggler">
                                <span className="fas fa-bars"></span> &nbsp;  
                                { (this.state.sidebarOpen) ? 'OPEN SIDEBAR' : 'CLOSE SIDEBAR'}
                        </button>

                            <div className="d-flex flex-row">
                                <div className={ this.state.sidebarOpen ? 'firstcolumn hide-xs' : 'firstcolumn' }>
                                    <div className="sidebar">
                                        <ul>
                                            
                                            
                                            
                                            { user.type !== "advertiser" 
                                             && 
                                             <React.Fragment>
                                                 <li><Link className="nav-link" to="/media-house/dashboard"><i className="fas fa-clock"></i> &nbsp; Dashboard</Link></li>
                                                 <li><Link className="nav-link" to="/all-programs"><i className="fas fa-tv"></i> &nbsp; All Programs</Link></li>
                                                 <li><Link className="nav-link" to="/slots/all"><i className="fas fa-box"></i> &nbsp; All Slots</Link></li>
                                                 <li><Link className="nav-link" to="/all-data"><i className="fas fa-list"></i> &nbsp; All Data</Link></li>
                                            </React.Fragment>
                                             }
                                            { user.type === "advertiser" && 
                                             <React.Fragment>
                                             <li><Link className="nav-link" to="/campaigns-dashboard"><i className="fas fa-tv"></i> &nbsp; Dashboard</Link></li>
                                             <li><Link className="nav-link" to="/all-data"><i className="fas fa-list"></i> &nbsp; All Data</Link></li>
                                             </React.Fragment>
                                            }
                                            
                                            { user.type === "administrator" && <li>
                                                <Link onClick={ this._handleOpen } className="nav-link" to="#"><i className="fas fa-home"></i> &nbsp; Media House &nbsp;&nbsp; <i className="fas fa-caret-down pull-right"></i></Link>
                                                <ul className="param">
                                                    <li><Link className="nav-link" to="/age-group/list"><i className="fas fa-users"></i> &nbsp; Age Groups</Link></li>
                                                    <li><Link className="nav-link" to="/cost-factor/list"><i className="fas fa-dollar-sign"></i> &nbsp; Cost Factors</Link></li>
                                                    <li><Link className="nav-link" to="/interest/list"><i className="fas fa-heart"></i> &nbsp; Interests</Link></li>
                                                    <li><Link className="nav-link" to="/literacy-level/list"><i className="fas fa-book"></i> &nbsp; Literacy Level</Link></li>
                                                    <li><Link className="nav-link" to="/professional-level/list"><i className="fas fa-cogs"></i> &nbsp; Professional Level</Link></li>
                                                    <li><Link className="nav-link" to="/schedule/list"><i className="fas fa-clock"></i> &nbsp; Schedule</Link></li>
                                                    <li><Link className="nav-link" to="/sizes/list"><i className="fas fa-ruler"></i> &nbsp; Size Metrics</Link></li>
                                                    <li><Link className="nav-link" to="/social-class/list"><i className="fab fa-twitter"></i> &nbsp; Social Classes</Link></li>
                                                    <li><Link className="nav-link" to="/channels/list"><i className="fas fa-home"></i> &nbsp; Channels</Link></li>
                                                    <li><Link className="nav-link" to="/types/list"><i className="fas fa-check"></i> &nbsp; Types</Link></li>
                                                    <li><Link className="nav-link" to="/contacts"><i className="fas fa-check"></i> &nbsp; Contacts</Link></li>
                                                </ul>
                                            </li>}
                                            <li><Link className="nav-link" to="/bookings/manage"><i className="fas fa-book"></i> &nbsp; Bookings</Link></li>
                                            { user.type === "administrator" && <li><Link className="nav-link" to="/users"><i className="fas fa-users"></i> &nbsp; Manage Users</Link></li>}
                                            <li><Link className="nav-link" to="/logout"><i className="fas fa-arrow-left"></i> &nbsp; Logout</Link></li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="secondcolumn">
            
                                    {children}
                                    
                                </div>
                            </div>
                        </div>
                       </div>
                    </React.Fragment>
);
}
}
export default Dashboard;
