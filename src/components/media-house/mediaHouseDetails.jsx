import React, { Component } from 'react';
import FrontPage from '../common/frontPage';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import DealCard from './../common/DealCard';
import { Link } from 'react-router-dom';

class MediaHouseDetails extends Component {
    state = { 
        images: [
            <img src="/images/carousel/1.jpg" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />,
            <img src="/images/carousel/2.jpg" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />,
            <img src="/images/carousel/1.jpg" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />,
        ],
        slots:[
            {link:"/",image:"/images/carousel/1.jpg",name:"Morning Slot",price:"20000",reach:"20"},
            {link:"/",image:"/images/carousel/2.jpg",name:"Morning Slot",price:"20000",reach:"20"},
            {link:"/",image:"/images/carousel/1.jpg",name:"Morning Slot",price:"20000",reach:"20"},
            {link:"/",image:"/images/carousel/2.jpg",name:"Morning Slot",price:"20000",reach:"20"},
        ]
     };
    responsive = {
        0: { items: 1 },
        1024: { items: 2 },
      }

    handleOnDragStart = e => {
        e.preventDefault()
    }
     
    render() { 
        const {slots, images} = this.state;
        return ( 
            <FrontPage>
                <div className="container mt-150">
                    <h1 className="section-title">Media House Information</h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <div style={{border:'1px solid #ddd'}}>
                                <AliceCarousel 
                                    items={images}
                                    mouseDragEnabled={true} 
                                    buttonsDisabled={true}
                                    autoPlay={true}
                                    autoPlayInterval={4000}
                                />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <h4>Guardian Newspaper</h4>
                            <table className="table table-striped details-table">
                                <tbody>
                                    <tr><td colSpan="2"><h5>Basic Information</h5></td></tr>
                                    <tr><td><p>Name</p><span>Guadian Newspaper</span></td>
                                    <td><p>Channel</p><span>Radio</span></td><td></td></tr>
                                    <tr><td><p>Sub-Channel</p><span>Online Radio</span></td>
                                    <td><p>Contact Person</p><span>Adeyeye Olusegun</span></td></tr>

                                    <tr><td colSpan="2"><h5>Programmes/Publications</h5></td></tr>
                                    <tr><td><p>Programme Name</p><span><Link to="/program/faaji-lawa">Faaji Lawa lori eto yi</Link></span></td>
                                    <td><p>Focus</p><span>Illitrates</span></td></tr>

                                    <tr><td><p>Programme Name</p><span><Link to="/program/faaji-lawa">Stand up comedy show</Link></span></td>
                                    <td><p>Focus</p><span>Youths</span></td></tr>

                                    <tr><td colSpan="2"><h5>Other Information</h5></td></tr>
                                    <tr><td><p>Vision</p><span>To be the best media house</span></td>
                                    <td><p>Mission</p><span>To deliver quality information</span></td></tr>
                                    
                                    <tr><td colSpan="2"><h5>Contact List</h5></td></tr>
                                    <tr><td><p>Name</p><span>Adekunle Shoyoye</span></td>
                                    <td><p>Mobile Number</p><span>08109393838</span></td></tr>
                                    <tr><td><p>Name</p><span>Ogbuji Chibuzor</span></td>
                                    <td><p>Mobile Number</p><span>08109393838</span></td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-sm-12">
                            <h4>Available Slots</h4>
                            <div className="row">
                                {
                                    slots.map((slot) => {
                                        return (
                                            <div className="col-sm-3" key={slot.link}>
                                                <DealCard link="#" image={slot.image} title={slot.name} price={slot.price} reach={slot.reach} />
                                                <br />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </FrontPage>
         );
    }
}
 
export default MediaHouseDetails;