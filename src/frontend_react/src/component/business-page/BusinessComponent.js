import React from "react";
import {searchBusinesses} from "../../service/ReviewService";
import BusinessPageComponent from "./BusinessPageComponent";

export default class BusinessComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        searchBusinesses(this.state.keyword, this.state.location)
            .then(response => this.renderBusinesses(response))
        // this.searchBusiness()
    }

    state = {
        keyword: this.props.keyword,
        location: this.props.location,
        recommend: [],
        businesses: []
    }

    editKeyword = (event) => {
        this.setState((prevState) => ({
            ...prevState,
            keyword: event.target.value
        }));
    }

    editLocation = (event) => {
        this.setState((prevState) => ({
            ...prevState,
            location: event.target.value
        }));
    }

    searchBusiness = () => {
        let term = this.state.keyword;
        let location =  this.state.location;
        if (!location) {
            alert('Please specify a location to search for.');
        } else {
            searchBusinesses(term, location)
                .then(response => {
                    this.renderBusinesses(response);
                })
        }
    }

    renderBusinesses = (response) => {
        if (response.total === 0) {
            alert('No result has been found.');
            this.setState({
                keyword: '',
                location: '',
                businesses: []
            });
            this.props.history.push('/search');
        } else {
            this.props.history.push(`/search/keyword=${this.state.keyword}&location=${this.state.location}`);
            this.setState((prevState) => ({
                ...prevState,
                businesses: response.businesses
            }))
        }
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <div className="px-3 my-1">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Find</span>
                                </div>
                                <input className="form-control" value={this.state.keyword}
                                       onChange={this.editKeyword} placeholder="Restaurants, sushi, delivery, etc."/>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Near</span>
                                </div>
                                <input className="form-control" value={this.state.location}
                                       onChange={this.editLocation} placeholder="Location to search for"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" id="searchBtn"
                                            onClick={this.searchBusiness}>Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <BusinessPageComponent businesses={this.state.businesses}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}