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
        <section className="bg-home" >
            <div className="bg-overlay"></div>
            <div className="home-center">
            <div className="home-desc-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="title-heading text-center text-white">
                                <h1 className="small-title text-uppercase text-light mb-3">Book media slots that reach your target </h1>
                                <h6 className="heading font-weight-bold mb-4"><strong>audience</strong></h6>
                            </div>
                        </div>
                    </div>

                    <div class="home-form-position">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="home-registration-form p-4 mb-3">
                                <SearchForm history={this.props.history} searchFormData={this.state.searchFormData} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
               

                    <section className="channels text-center">
                        <br /><br />
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="section-titles text-center mb-4 pb-2">
                                    <h4 className="title title-line pb-5">Reach out to your targeted audience</h4>
                                    <p className="text-muted para-desc mx-auto mb-1"><h5>Get to your target audience through any of these channels.</h5></p>
                                </div>
                            </div>
                        </div>

                        <HomeChannels data={this.state.channels} />
                    </section>                    

                    <br /><br />
                    <section className="deals text-center bg-light"><br />
                        <div className="section-titles text-center mb-5 pb-4">
                            <h3 className="title title-line page-title pb-2">Checkout today's amazing deals</h3>
                            <p className="sub-title"><h5>Get started quickly, checkout the amazing offers!</h5></p>
                        </div>
                        <HomeDeals data={this.state.deals} />
                    </section>

                     {/* Stat*/}
                     <br /><br />
                     <div className="section-titles text-center">
                            <h3 className="title title-line page-title">We backup facts with figures</h3>
                        </div>
                    <section className="section bg-counter position-relative stat-image">
                        <div className="bg-overlay bg-overlay-gradient"></div>

                                <Stats stats={this.state.stats} />
                           
                    </section>


                    {/* How it work*/}
                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="section-titles text-center mb-4 pb-2">
                                        <h4 className="title title-line pb-5">How it works!</h4>
                                        <p className="text-muted para-desc mx-auto mb-1"><h5>You can get started in 3 simple steps.</h5></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mt-4 pt-2">
                                    <div className="how-it-work-box bg-light p-4 text-center rounded shadow">
                                        <div className="how-it-work-img position-relative rounded-pill mb-3">
                                            <img src="images/how-it-work/img-1.png" alt="" className="mx-auto d-block" height="50"/>
                                        </div>
                                        <div>
                                            <h5>Find Slots</h5>
                                            <p className="text-muted">Donec pede justo fringilla vel aliquet nec vulputate eget arcu. In enim justo rhoncus ut a, justo.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-4 pt-2">
                                    <div className="how-it-work-box bg-light p-4 text-center rounded shadow">
                                        <div className="how-it-work-img position-relative rounded-pill mb-3">
                                            <img src="images/how-it-work/img-2.png" alt="" className="mx-auto d-block" height="50"/>
                                        </div>
                                        <div>
                                            <h5>Review Listing</h5>
                                            <p className="text-muted">Aliquam lorem ante dapibus in, viverra feugiatquis a tellus. Phasellus viverra nulla ut Quisque rutrum.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-4 pt-2">
                                    <div className="how-it-work-box bg-light p-4 text-center rounded shadow">
                                        <div className="how-it-work-img position-relative rounded-pill mb-3">
                                            <img src="images/how-it-work/img-3.png" alt="" className="mx-auto d-block" height="50"/>
                                        </div>
                                        <div>
                                            <h5>Book Slot</h5>
                                            <p className="text-muted">Nullam dictum felis eu pede mollis pretiumetus Integer tincidunt. Cras dapibus. semper nisi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    

                    {/*Partners*/}
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

                    {/*Blogs*/}
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

                    {/*Testimonials*/}
                    <section className="section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="section-titles text-center mb-4 pb-2">
                                        <h4 className="title title-line pb-5">Our Success Stories</h4>
                                        <p className="text-muted para-desc mx-auto mb-1">Post a job to tell us about your project. We'll quickly match you with the right freelancers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-4">
                                <div className="col-lg-12">
                                   
                                        <div className="item testi-box rounded p-4 mr-3 ml-2 mb-4 bg-light position-relative">
                                            <p className="text-muted mb-5">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consecteturqui adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>
                                            <div className="clearfix">
                                                <div className="testi-img float-left mr-3">
                                                    <img src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/" height="64" alt="" className="rounded-circle shadow"/>
                                                </div>
                                                <h5 className="f-18 pt-1">Kevin Stewart</h5>
                                                <p className="text-muted mb-0">Web Designer at xyz Company</p>
                                                <div className="testi-icon">
                                                    <i className="mdi mdi-format-quote-open display-2"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item testi-box rounded p-4 mr-3 ml-2 bg-light position-relative">
                                            <p className="text-muted mb-5">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
                                            <div className="clearfix">
                                                <div className="testi-img float-left mr-3">
                                                    <img src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/" height="64" alt="" className="rounded-circle shadow"/>
                                                </div>
                                                <h5 className="f-18 pt-1">Charles Garrett</h5>
                                                <p className="text-muted mb-0">Marketing manager at abc Company</p>
                                                <div className="testi-icon">
                                                    <i className="mdi mdi-format-quote-open display-2"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item testi-box rounded p-4 mr-3 ml-2 bg-light position-relative">
                                            <p className="text-muted mb-5">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consecteturqui adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam</p>
                                            <div className="clearfix">
                                                <div className="testi-img float-left mr-3">
                                                    <img src="https://via.placeholder.com/400X400//88929f/5a6270C/O https://placeholder.com/" height="64" alt="" className="rounded-circle shadow"/>
                                                </div>
                                                <h5 className="f-18 pt-1">Perry Martinez</h5>
                                                <p className="text-muted mb-0">Marketing manager at abc Company</p>
                                                <div className="testi-icon">
                                                    <i className="mdi mdi-format-quote-open display-2"></i>
                                                </div>
                                            </div>
                                        </div>
                                    

                                </div>
                            </div>
                        </div>
                    </section>

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