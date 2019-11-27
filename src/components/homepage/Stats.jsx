import React from 'react';

const Stats = ({stats}) => {
    return ( 
       
            <div className="container">
            <div className="row" id="counter">
            {stats.map((stat) => {
             return (
                 
     
                 <div className="col-md-3 col-6">
                    <div className="home-counter pt-4 pb-4">
                        <div className="float-left counter-icon mr-3">
                            
                        </div>
                        <div className="counter-content overflow-hidden">
                            <h1 className="counter-value text-white mb-1" data-count="120"><b>{stat.value}</b></h1>
                            <p className="counter-name text-white text-uppercase mb-0"><b>{stat.label}</b></p>
                        </div>
                    </div>
                </div>
                 
              
                );
            })}
            <div className="clearfix"></div>
            </div></div>
        
     );
}
 
export default Stats;