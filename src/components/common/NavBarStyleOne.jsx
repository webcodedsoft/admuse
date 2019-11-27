import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import { getCartSize } from '../../services/cartService';
import { withRouter } from 'react-router-dom';

class NavBarStyleOne extends Component {


	state = {
		collapsed: false,
		cartSize: 0
	}
	toggleMenu = (e) => {
		this.setState({ collapsed: !this.state.collapsed })
	} 
	componentDidMount() {
		$('.nav-link').click(() => {
			this.setState({collapsed: false})
		});
		const cartSize = getCartSize();
		this.setState({cartSize});
	}

	


	render() {
		
		const {user} = this.props;
		const show = (this.state.collapsed) ? "show" : "" ;
		let mediaHouseLink = "";
		let booking_history = "";
		let dashboardLink = '/media-house/dashboard';
		let bid_link = "";
		let wishList_Lisk = "";
		/*let currentpath = "";
		let hostpath = "";

		currentpath = window.location.href;
		hostpath = window.location.host;*/
		

		if(user && user.type === "administrator") {

			mediaHouseLink = <li className="nav-item">
								<NavLink className="nav-link" to="/media-house">Media Houses</NavLink>
							 </li>;

		/*if(currentpath === 'http://'+hostpath+'/')
		{
				
		}*/

			

			dashboardLink = '/media-house/dashboard';
			
		} else {
			mediaHouseLink = <li className="nav-item"></li>;
			dashboardLink = '/campaigns-dashboard';
			booking_history = '/bookings/manage';
		}

		if (user && user.type === 'publisher') {

		bid_link = '/bids/manage';
			
		} else {
			bid_link = '/bids';
			wishList_Lisk = <li>
							<NavLink className="nav-link" to="/wishlist"><span style={{color: "#000"}}><i className="fas fa-heart"></i> &nbsp; Wishlist</span></NavLink>
							</li>
		}
		
		return ( 
			<nav className="navbar navbar-expand-lg navbar-static navbar-light navbar-admuse">
				<div className="container-fluid" style={{paddingLeft: '30px'}}>
					<a className="navbar-brand" href="/">Admuse</a>
					<button className="navbar-toggler" onClick={ this.toggleMenu } type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					
					<div className={"collapse navbar-collapse " + show} id="navbarNav">
								<ul className="navbar-nav m-auto mt-5">
									<li className="nav-item">
										<NavLink className="nav-link" to="/" exact>Home</NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link" to="/media-house/slot/list">Slots</NavLink>
									</li>
									{ mediaHouseLink }
									<li className="nav-item">
										<NavLink className="nav-link" to="/blog">Blog</NavLink>
									</li>
								</ul>
	
								{ user && <ul className="navbar-nav mr-auto mt-2">
									<li className="nav-item dropdown">
										<NavLink className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" to="#">{user.name}</NavLink>
											<ul className="dropdown-menu">
												<li className="nav-item">
													<NavLink className="nav-link" to={dashboardLink}><span style={{color: "#000"}}><i className="fas fa-home"></i> &nbsp; Dashboard</span></NavLink>
												</li>
												<li>
													<NavLink className="nav-link" to="/user/account"><span style={{color: "#000"}}><i className="fas fa-user"></i> &nbsp; My Account</span></NavLink>
												</li>
												<li>
													<NavLink className="nav-link" to="/user/wallet-history"><span style={{color: "#000"}}><i className="fas fa-wallet"></i> &nbsp; Wallet</span></NavLink>
												</li>
												<li>
													<NavLink className="nav-link" to={bid_link}><span style={{color: "#000"}}><i className="fas fa-clock"></i> &nbsp; Bids</span></NavLink>
												</li>
												
												{wishList_Lisk}
												
												<li>
													<NavLink className="nav-link" to={booking_history}><span style={{color: "#000"}}><i className="fas fa-clock"></i> &nbsp; Bookings</span></NavLink>
												</li>
											</ul>
									</li>
									<li>
									<NavLink className="nav-link" to="/cart"><span><i className="fas fa-shopping-cart"></i> &nbsp;	Cart </span><span className="badge badge-danger active">{this.state.cartSize}</span></NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link" to="/logout"><span className="btn btn-white" style={{marginTop:'-5px'}}><i className="fas fa-arrow-left"></i> &nbsp;	Sign Out</span></NavLink>
									</li>
								</ul>
								}
	
								{ !user && <ul className="navbar-nav mr-auto mt-2 mt-md-0">
									<li className="nav-item">
										<NavLink className="nav-link" to=""><i className="fas fa-list"></i> &nbsp; List your slots</NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link" to=""><i className="fas fa-question-circle"></i> &nbsp; Help</NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link" to="/register"><i className="fas fa-user-plus"></i> &nbsp; Sign Up</NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link" to="/login"><i className="fas fa-lock"></i> &nbsp; Log In</NavLink>
									</li>
								</ul>
								}
					</div>
				</div>
			</nav>
		 );
	}
}
export default NavBarStyleOne;