import React from 'react';
import IconCard from './../common/IconCard';
const HomeChannels = ({data}) => {
    return ( 
        <div className="container mt-50"><br/><br />
                        <div className="row justify-content-center">
                        {
                            data.map((channel) => {
                                return (
                                    <div className="col-sm-4" key={channel.link}>
                                        <IconCard link={channel.link} image={channel.image} title={channel.title} />
                                    </div>
                                )
                            })
                        }
                        </div>
        </div>
     );
}
 
export default HomeChannels; 