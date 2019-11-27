import React from 'react';
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';

const FrontPage = ({children}) => {
    return ( 
        <React.Fragment>
            <ToastContainer />
                        {children}

                        <br /><br /><br /><br /><br /><br /><br /><br />
            <Footer></Footer>
        </React.Fragment>
     );
}
 
export default FrontPage;