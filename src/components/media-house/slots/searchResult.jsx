import React, { Component } from 'react';
import FrontPage from '../../common/frontPage';

class SearchResult extends Component {
    state = { 
        results: []
     }
    componentDidMount() {
        const {data} = this.props.location.state.results
        const {results} = this.state;
        results.push(data);
        this.setState({results});
        console.log(this.state.results);
    }
    render() { 
        return ( 
            <FrontPage>
                { this.state.results.length < 1 && "<p>Sorry, no result found!</p>" }

                <div className="container">
                    <div className="row">
                        { this.state.results.map(res => {
                            return (
                                <div className="card deal-card">
                                    <div className="card-media">
                                        <img src="/images/televison.png" className="img-fluid" alt={res.name} />
                                    </div>
                                    <div className="card-footer">
                                        <h5 className="">{res.name}</h5>
                                        <span className="reach">1000 Reach</span> - <span className="price">N{res.price}</span>
                                        <a href="/" className="btn abtn btn-sm"><span>Buy now!</span></a>
                                    </div>
                                    <button className="btn abtn btn-cart btn-sm"><span className="fas fa-shopping-cart"></span></button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </FrontPage>
         );
    }
}
 
export default SearchResult;