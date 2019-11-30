import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div>
            <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    <a href="javascript:void(0)"><img src="/images/advertise-icon.png" height="40" width="40" alt=""/></a>
                    <p className="mt-4">At vero eos et accusamus et iusto odio dignissim os ducimus qui blanditiis praesentium <br/>
                    At vero eos et accusamus et iusto odio dignissim os ducimus qui blanditiis praesentium</p>
                </div>
                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <p className="text-white mb-4 footer-list-title">Company</p>
                    <ul className="list-unstyled footer-list">
                        <li><a href="#" className="text-foot"><i className="fas fa-arrow-right"></i> About Us</a></li>
                        <li><a href="#" className="text-foot"><i className="fas fa-arrow-right"></i> Media & Press</a></li>
                        <li><a href="#" className="text-foot"><i className="fas fa-arrow-right"></i> Career</a></li>
                        <li><a href="#" className="text-foot"><i className="fas fa-arrow-right"></i> Blog</a></li>
                        <li><a href="#" className="text-foot"><i className="fas fa-arrow-right"></i> Pricing</a></li>
                        <li><a href="/media-house/slot/choose" className="text-foot"><i className="fas fa-arrow-right"></i> Use our name your price tool</a></li>
                        
                    </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <p className="text-white mb-4 footer-list-title">Resources</p>
                    <ul className="list-unstyled footer-list">
                        <li><a href="#" className="text-foot"><i className="fas fa-arrow-right"></i> Support</a></li>
                        <li><a href="#" className="text-foot"><i className="fas fa-arrow-right"></i> Privacy Policy</a></li>
                        <li><a href="#" className="text-foot"><i className="fas fa-arrow-right"></i> Terms</a></li>
                        <li><a href="#" className="text-foot"><i className="fas fa-arrow-right"></i> Accounting </a></li>
                        <li><a href="#" className="text-foot"><i className="fas fa-arrow-right"></i> Billing</a></li>
                        <li><a href="#" className="text-foot"><i className="fas fa-arrow-right"></i> F.A.Q.</a></li>
                    </ul>
                </div>
            
                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <p className="text-white mb-4 footer-list-title f-17">Business Hours</p>
                    <ul className="list-unstyled text-foot mt-4 mb-0">
                        <li>Monday - Friday : 9:00 to 17:00</li>
                        <li className="mt-2">Saturday : 10:00 to 15:00</li>
                        <li className="mt-2">Sunday : Day Off (Holiday)</li>
                    </ul>
                </div>
            </div>
        </div>
</footer>
            
            <footer className="footer footer-bar">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="">
                                <p className="mb-1">© 2019 Admuse.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
     );
}
 
export default Footer;