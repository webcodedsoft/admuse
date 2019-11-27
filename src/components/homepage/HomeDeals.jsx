import React from 'react';
import DealCard from './../common/DealCard';
const HomeDeals = ({data}) => {
    return ( 
        <div className="container mt-150">
                        <div className="row justify-content-center">
                        {
                            data.map((deal) => {
                                return (
                                    <div className="col-sm-4" key={deal.link}>
                                        <DealCard link={deal.link} image={deal.image} title={deal.title} price={deal.price} reach={deal.reach} />
                                        <br />
                                    </div>
                                )
                            })
                        }
                        </div>
        </div>
     );
}
 
export default HomeDeals;