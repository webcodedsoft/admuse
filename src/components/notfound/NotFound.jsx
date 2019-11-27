import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="container">
            <div className="row justify-content-center mt-100">
                <div className="col-sm-3">
                    <img src="./images/not-found.jpg" className="img-fluid" alt="not-found" />
                </div>
                <div className="col-sm-6">
                    <br/><br/>
                    <h1>Oops! Page not found</h1>
                    <p>Sorry the page you're looking for could not be found.</p>
                    <Link to="/" className="btn abtn">Go to homepage</Link>
                </div>
            </div>
        </div>
     );
}
 
export default NotFound;