import React from 'react';

const Stats = ({stats}) => {
    return ( 
        <div className="stats-div">
            <div className="container">
            {stats.map((stat) => {
             return (<div className="stat-item" key={stat.label}>
                        <h3>{stat.value}</h3>
                        <span>{stat.label}</span>
                    </div>);
            })}
            <div className="clearfix"></div>
            </div>
        </div>
     );
}
 
export default Stats;