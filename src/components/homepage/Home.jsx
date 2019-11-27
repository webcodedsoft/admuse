import React, { Component } from 'react';
import './Home.css';
import SearchForm from './SearchForm';
import Stats from './Stats';
import HomeChannels from './HomeChannels';
import HomeDeals from './HomeDeals';
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


class Home extends Component {
    state = { 
        searchFormData: {
            audience_location: '',
            social_class: '',
            age_range: ''
        },
        stats: [
                {label: "Media Channel", value: 5},
                {label: "Publishers", value: 150},
                {label: "Advert Slots", value: 20000},
                {label: "People Reached Daily", value: 10000000},
            ],
        channels: [
            {title: "Television Advertisement", link: "/channels/television", image: '/images/stock/tv.jpg'},
            {title: "Radio Advertisement", link: "/channels/radio", image: '/images/stock/radio.jpg'},
            {title: "Internet Adverts", link: "/channels/internet", image: '/images/stock/internet.jpg'},
            {title: "Newspaper  Advertisement", link: "/channels/newspaper", image: '/images/stock/newspaper.jpg'},
            {title: "Transit Advertisement", link: "/channels/transit", image: '/images/stock/bus.jpg'},
            {title: "Billboard Advertisement", link: "/channels/billboard", image: '/images/stock/billboard.jpg'},
        ],
        deals: [
            // {title: "The joy of the african child, vol 2", reach:5000, price: 5000, link: "/channels/television", image: 'images/stock/lady-paper.jpg'},
            // {title: "Spider man: The home coming movie", reach:5000, price: 5000, link: "/channels/radio", image: 'images/stock/ad.jpg'},
            // {title: "Good morning lagos, Good morning Nigeria", reach:5000, price: 5000, link: "/channels/internet", image: 'images/stock/billboard.jpg'},
            {title: "Oro to nlo, lori le ede yi, Ep 500", reach:5000, price: 5000, link: "/channels/newspaper", image: 'images/stock/bus.jpg'},
            {title: "Fuji House of commotion, Ep 150", reach:5000, price: 5000, link: "/channels/transit", image: 'images/stock/newspaper.jpg'},
            {title: "Full page advert in the Guardian", reach:5000, price: 5000, link: "/channels/billboard", image: 'images/stock/lady-paper.jpg'},
        ],
        partners: [
            <img src="/images/partner/1.png" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />,
            <img src="/images/partner/2.png" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />,
            <img src="/images/partner/3.png" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />,
            <img src="/images/partner/4.png" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />,
            <img src="/images/partner/5.png" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />,
            <img src="/images/partner/6.png" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />,
            <img src="/images/partner/7.png" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />,
            <img src="/images/partner/8.png" alt="" onDragStart={this.handleOnDragStart} className="yours-custom-class" />,
        ],
     }

     carousel_responsive = {
                            0: {
                                items: 1
                            },
                            1024: {
                                items: 4
                            }
                        }

    render() { 
        return ( 
                <div className="home">
                    <section className="book-slot">
                        <div className="container book-slot-content">
                            <div className="row justify-content-center text-center">
                                <div className="col-sm-10 mt-100"><br/>
                                    <h3 className="l-title">Book media slots that reach your target<br /> <strong>audience</strong></h3>
                                    <SearchForm history={this.props.history} searchFormData={this.state.searchFormData} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="channels text-center">
                        <br /><br />
                        <h3 className="page-title">Reach out to your targeted audience</h3>
                        <p className="sub-title">Get to your target audience through any of these channels.</p>

                        <HomeChannels data={this.state.channels} />
                    </section>                    

                    <section className="deals text-center"><br /><br />
                        <h3 className="page-title">Checkout today's amazing deals</h3>
                        <p className="sub-title">Get started quickly, checkout the amazing offers!</p><br/><br />
    
                        <HomeDeals data={this.state.deals} />
                    </section>

                    <section className="stats">
                        <div className="container mt-100 text-center">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img src="/images/stock/happy-cust.jpg" className="img img-fluid" alt=""/>
                                </div>
                                <div className="col-sm-6"><br />
                                    <h3 className="l-title">We backup facts with figures</h3>
                                    <Stats stats={this.state.stats} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="how">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-sm-12"><br /><br />
                                    <h3 className="page-title">How it works!</h3>
                                    <p className="sub-title">You can get started in 3 simple steps.</p><br/>
                                </div>

                                <div className="col-sm-4">
                                    <div className="box">
                                        <img src="/images/search-online.svg" className="img-fluid" alt=""/>
                                        <h4>Find Slots</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex laborum tempore ullam, quas eum nihil dolorum dicta.</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="box">
                                        <img src="/images/search-online.svg" className="img-fluid" alt=""/>
                                        <h4>Review Listing</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex laborum tempore ullam, quas eum nihil dolorum dicta.</p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="box">
                                        <img src="/images/search-online.svg" className="img-fluid" alt=""/>
                                        <h4>Book Slot</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ex laborum tempore ullam, dolores laboriosam tempora nisi</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>
                    <br /><br />

                    <section className="partners">
                        <div className="container text-center">
                                <div className="row">
                                    <div className="col-sm-12"><br /><br />
                                        <h3 className="page-title">Our Partners!</h3>
                                        <p className="sub-title">Fuga quidem corrupti perspiciatis nesciunt!</p><br/>
                                    </div>
                                    <div className="col-sm-12" style={{background:'#555',borderRadius:'8px'}}>
                                    <AliceCarousel 
                                        items={this.state.partners}
                                        responsive={this.carousel_responsive}
                                        mouseDragEnabled={true} 
                                        buttonsDisabled={true}
                                        autoPlay={true}
                                        autoPlayInterval={4000}
                                    />
                                    </div>
                                </div>
                        </div>
                    </section>
                    <br /><br />

                    <section className="blogs">
                        <div className="container text-center">
                                <div className="row">
                                    <div className="col-sm-12"><br /><br />
                                        <h3 className="page-title">Our Blogs!</h3>
                                        <p className="sub-title">Fuga quidem corrupti perspiciatis nesciunt!</p><br/>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="card">
                                            <div className="card-media">
                                                <img src="/images/stock/lady-paper.jpg" alt="" className="img-fluid" />
                                            </div>
                                            <div className="card-body">
                                                <p className="date">22 Nov, 2019</p>
                                                <h3 className="title">Influence of social media on sales</h3>
                                                <p className="date">perspiciatis provident ducimus delectus, odit, et ab, nisi porro laborum? Asperiores cumque enim aliquid aut.</p>
                                                <br />
                                                <Link to="" className="read">Read more <i className="fas fa-caret-right"></i></Link>
                                                <br />
                                            </div>
                                        </div>
                                    
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="card">
                                            <div className="card-media">
                                                <img src="/images/stock/billboard.jpg" alt="" className="img-fluid" />
                                            </div>
                                            <div className="card-body">
                                                <p className="date">22 Nov, 2019</p>
                                                <h3 className="title">Can social media have effect on sales</h3>
                                                <p className="date">perspiciatis provident ducimus delectus, odit, et ab, nisi porro laborum? Asperiores cumque enim aliquid aut.</p>
                                                <br />
                                                <Link to="" className="read">Read more <i className="fas fa-caret-right"></i></Link>
                                                <br />
                                            </div>
                                        </div>
                                    
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="card">
                                            <div className="card-media">
                                                <img src="/images/stock/bus.jpg" alt="" className="img-fluid" />
                                            </div>
                                            <div className="card-body">
                                                <p className="date">29 Nov, 2019</p>
                                                <h3 className="title">What of social media on sales</h3>
                                                <p className="date">perspiciatis provident ducimus delectus, odit, et ab, nisi porro laborum? Asperiores cumque enim aliquid aut.</p>
                                                <br />
                                                <Link to="" className="read">Read more <i className="fas fa-caret-right"></i></Link>
                                                <br />
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                        </div>
                    </section>
                    <br /><br />

                    <section className="testimonials">
                        <div className="container text-center">
                                <div className="row">
                                    <div className="col-sm-12"><br /><br />
                                        <h3 className="page-title">Testimonials!</h3>
                                        <p className="sub-title">Fuga quidem corrupti perspiciatis nesciunt!</p><br/>
                                    </div>
                                </div>
                        </div>
                    </section>
                    <br /><br />

                    <section className="gray">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-9">
                                    <h4 className="l-title">Lorem ipsum dolor sit amet consectetur adipisicing elit</h4><br/>
                                    <p>Expedita maxime quas quaerat ab eligendi explicabo nesciunt sequi architecto, cum error.</p>
                                </div>
                                <div className="col-sm-3" style={{textAlign:'right'}}>
                                    <Link to="/register" className="btn abtn abtn-2">Create your account</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <Footer />
                </div>
         );
    }
}
 
export default Home;