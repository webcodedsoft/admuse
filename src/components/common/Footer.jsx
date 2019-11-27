import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <h4>ADMUSE</h4>
                            <br/>
                            <p>Minima itaque commodi quibusdam earum doloremque ratione magni voluptate, nostrum hic architecto, voluptatem placeat et laboriosam blanditiis soluta ut nesciunt delectus cumque?</p>
                        </div>
                        <div className="col-sm-3">
                            <ul>
                                <li>Testcoba</li>
                                <li>Ateller coba</li>
                                <li>Shunti Mandy</li>
                                <li>Mello Sweet</li>
                                <li>Commodi earum</li>
                                <li><Link to="/media-house/slot/choose">Use our name your price tool</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <ul>
                                <li>Testcoba</li>
                                <li>Ateller coba</li>
                                <li>Shunti Mandy</li>
                                <li>Mello Sweet</li>
                                <li>Commodi earum</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <p>&copy; Copyright Admuse 2019, All rights reserved.</p>
                        </div>
                        <div className="col-sm-3">

                        </div>
                    </div>
                </div>
                        
            </div>
        </div>
     );
}
 
export default Footer;