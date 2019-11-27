import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const DealCard = ({link, image, title, price, reach, onAction}) => {
    return ( 
        <div className="card deal-card">
            <div className="card-media" style={{background:"url("+image+") no-repeat center",backgroundSize:"100%"}}>
                <div className="content">
                    <a href={(link) ? link : ""}><h3 className="">{title}</h3></a>
                    <span className="reach">This advert will reach {reach} people @</span> <span className="price">N{price}</span> <br /><br />
                    <button className="btn abtn btn-sm" onClick={ onAction }><span className="fas fa-shopping-cart"></span> &nbsp;<span>Buy now!</span></button>
                </div>
            </div>
            <div className="card-footer">
                <div className="stars">
                    <i className="fas fa-star"></i> 
                    <i className="fas fa-star"></i> 
                    <i className="fas fa-star"></i> 
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>  
                </div>
            </div>
        </div>
     );
}
 
export default DealCard;