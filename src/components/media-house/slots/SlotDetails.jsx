import React, { Component } from 'react';
import FrontPage from '../../common/frontPage';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import DealCard from './../../common/DealCard';
import { Link } from 'react-router-dom';
import { getSlot } from './../../../services/mediaHouseService';

class SlotDetails extends Component {
    state = { 
        images: [
            <img src="/images/carousel/1.jpg" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />,
            <img src="/images/carousel/2.jpg" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />,
            <img src="/images/carousel/1.jpg" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />,
        ],
        slots:[
            {id:1,link:"/",image:"/images/carousel/1.jpg",name:"Morning Slot",price:"20000",reach:"20"},
            {id:2,link:"/",image:"/images/carousel/2.jpg",name:"Morning Slot",price:"20000",reach:"20"},
            {id:3,link:"/",image:"/images/carousel/1.jpg",name:"Morning Slot",price:"20000",reach:"20"},
            {id:4,link:"/",image:"/images/carousel/2.jpg",name:"Morning Slot",price:"20000",reach:"20"},
        ],
        slot:{}
     };
    responsive = {
        0: { items: 1 },
        1024: { items: 2 },
      }

    handleOnDragStart = e => {
        e.preventDefault()
    }

    async componentDidMount() {
        const slot_id = this.props.match.params.slot_id;
        const {data} = await getSlot(slot_id);
        const slot = data.result;
        let images = [];
        slot.images.map((img) => {
            return images.push(<img src={`${img.path}`} alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />)
        })
        this.setState({ slot });
        console.log(slot);
    }
     
    render() { 
        const {slots, images, slot} = this.state;
        return ( 
            <FrontPage>
                <div className="container mt-150">
                    <h1 className="section-title">Slot Details</h1>
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
                            <table className="table table-striped details-table">
                                <tbody>
                                    <tr><td colSpan="2"><h5>Basic Information</h5></td></tr>
                                    <tr><td><p>Name</p><span>{ slot.name }</span></td>
                                    <td><p>Channel</p><span>{ (slot.program) ? slot.program.channel.name : '' }</span></td><td></td></tr>
                                    <tr><td><p>Sub-Channel</p><span>{ (slot.program) ? slot.program.sub_channel.name : '' }</span></td>
                                    <td><p>Media House</p><span><Link to="/media-house/info/2">{ (slot.program) ? slot.program.media.name : '' }</Link></span></td><td></td></tr>

                                    <tr><td colSpan="2"><h5>Audience Demography</h5></td></tr>
                                    <tr><td><p>Age Range</p><span>{ (slot.program) ? slot.program.age_group.map((age) => {
                                        return <span> {age.name} </span>;
                                    }) : '' }</span></td>
                                    <td><p>Interest</p><span>{ (slot.program) ? slot.program.interest.map((item) => {
                                        return <span> {item.name} </span>;
                                    }) : '' }</span></td></tr>

                                    <tr><td><p>Gender</p><span>{ (slot.program) ? slot.program.genders.map((item) => {
                                        return <span> {item.name} </span>;
                                    }) : '' }</span></td>
                                    <td><p>Social Class</p><span>{ (slot.program) ? slot.program.social_class.map((item) => {
                                        return <span> {item.name} </span>;
                                    }) : '' }</span></td></tr>

                                    <tr><td colSpan="2"><h5>Slot Information</h5></td></tr>
                                    <tr><td><p>Programme</p><span><Link to="/program/faaji-lawa/2">{ (slot.program) ? slot.program.name : '' }</Link></span></td>
                                    <td><p>Estimated Reach</p><span>{ (slot.program) ? slot.program.reach.max : '' } people</span></td></tr>
                                
                                    <tr><td><p>Slot Type</p><span>{ slot.type }</span></td>
                                    <td><p>Media Type</p><span>{ slot.type }</span></td></tr>

                                    <tr><td><p>Price</p><span>N{slot.price}</span></td>
                                    <td><p>Size</p><span>3 x 8 in</span></td></tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="col-sm-12">
                            <br/><br />
                            <h4>Similar to this Slot</h4>
                            <hr />
                            <div className="row">
                                {
                                    slots.map((slot) => {
                                        return (
                                            <div className="col-sm-3" key={slot.id}>
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
 
export default SlotDetails;