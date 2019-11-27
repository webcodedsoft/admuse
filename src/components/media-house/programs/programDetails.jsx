import React, { Component } from 'react';
import FrontPage from '../../common/frontPage';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import DealCard from './../../common/DealCard';
import { Link } from 'react-router-dom';
import { getProgram } from './../../../services/mediaHouseService';

class ProgramDetails extends Component {
    state = { 
        images: [<img src="/images/carousel/1.jpg" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />],
        slots:[
            {link:"/media-house/slot/view/full-page-ad-1",image:"/images/carousel/1.jpg",name:"Morning Slot",price:"20000",reach:"20"},
            {link:"/media-house/slot/view/full-page-ad-2",image:"/images/carousel/2.jpg",name:"Morning Slot",price:"20000",reach:"20"},
            {link:"/media-house/slot/view/full-page-ad-3",image:"/images/carousel/1.jpg",name:"Morning Slot",price:"20000",reach:"20"},
            {link:"/media-house/slot/view/full-page-ad-4",image:"/images/carousel/2.jpg",name:"Morning Slot",price:"20000",reach:"20"},
        ],
        program: "",
        program_id: "",
        media_house: ""
     };
    responsive = {
        0: { items: 1 },
        1024: { items: 2 },
      }

    handleOnDragStart = e => {
        e.preventDefault()
    }

    async componentDidMount() {
        const media_house = this.props.match.params.media_house;
        const program_id = this.props.match.params.shortname;
        this.setState({media_house, program_id});
        const { data } = await getProgram(media_house, program_id);
        let images = [];
        data.result.images.map((img) => {
            return images.push(<img src={`${img.path}`} alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />)
        })
        this.setState({program: data.result, images});
        console.log(data);
    }
     
    render() { 
        const {slots, images, program} = this.state;
        return ( 
            <FrontPage>
                <div className="container mt-150">
                    <h1 className="section-title">Faaji Lawa Lori eto yi</h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <div style={{border:'1px solid #ddd',height:'600px',overflow:'hidden'}}>
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
                                    <tr><td colSpan="2"><h5>Media House</h5></td></tr>
                                    <tr><td><p>Name</p><span><Link to={``}>{ (program.media) ? program.media.name : '' }</Link></span></td>
                                    <td><p>Channel</p><span>{ (program.channel) ? program.channel.name : '' }</span></td><td></td></tr>

                                    <tr><td colSpan="2"><p>Sub-Channel</p><span>Online Radio</span></td></tr>

                                    <tr><td colSpan="2"><h5>Audience Demography</h5></td></tr>
                                    <tr><td><p>Age Range</p>{ (program) ? program.age_group.map((age) => {
                                        return <span key={age.id}> {age.name}, </span>;
                                    }) : '' }</td>
                                    <td><p>Interest</p>{ (program) ? program.interest.map((item) => {
                                        return <span key={item.id}> {item.name}, </span>;
                                    }) : '' }</td></tr>

                                    <tr><td><p>Gender</p><span>{ (program) ? program.genders.map((item) => {
                                        return <span key={item.id}> {item.name}, </span>;
                                    }) : '' }</span></td>
                                    <td><p>Social Class</p><span>{ (program) ? program.social_class.map((item) => {
                                        return <span key={item.id}> {item.name}, </span>;
                                    }) : '' }</span></td></tr>

                                    <tr><td colSpan="2"><h5>Specification</h5></td></tr>
                                    <tr><td><p>Programme Schedule</p><span>Mondays</span></td>
                                    <td><p>Estimated Reach</p><span>{ (program.reach) ? program.reach.max : '' } people</span></td></tr>
                                    <tr><td><p>Programme Type</p><span>{ (program.type) ? program.type.name : '' } </span></td>
                                    <td><p>Programme Focus</p><span>Youths</span></td></tr>
                                    <tr><td><p>Programme Host</p><span>Adigun Adebutu</span></td></tr>
                                    <tr><td colSpan="2"><p>Number of Ad Slots Available</p><span>4 Slots</span></td></tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-sm-12">
                            <br />
                            <h4>Available Slots</h4>
                            <hr />
                            <div className="row">
                                {
                                    slots.map((slot) => {
                                        return (
                                            <div className="col-sm-3" key={slot.link}>
                                                <DealCard link={slot.link} image={slot.image} title={slot.name} price={slot.price} reach={slot.reach} />
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
 
export default ProgramDetails;