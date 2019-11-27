import React from 'react';

const IconCard = ({link, image, title}) => {
    return ( 
        <a href={(link) ? link : ""} className="icon-card-link">
            <div className="icon-card" style={{background: "url("+image+") center no-repeat",backgroundSize:"100%"}}>
                <h5 className="card-title">{title}</h5>    
            </div>
        </a>
     );
}
 
export default IconCard;