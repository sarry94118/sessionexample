import React from "react";
import {Link} from "react-router-dom";

class BusinessPageComponent extends React.Component {
    render() {
        return (
            <div className="row mt-3">
                {
                    this.props.businesses && this.props.businesses.map((business, idx) =>
                        <div className="col-lg-4 col-md-6 my-2"
                             key={idx}>
                            <div className="card m-1 p-3">
                                <Link to={`/details/${business.id}`}>
                                    <img className="card-img-top" src={business.image_url} alt='Picture not available'
                                         style={{height: '200px'}}/>
                                </Link>
                                <div className="card-body p-1">
                                    <div className="row">
                                        <h5 className="card-title d-block text-truncate">
                                            <Link to={`/details/${business.id}`}
                                                  className="col-sm-6 col-md-4 col-lg-4">
                                                {business.name}
                                            </Link>
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <p className="px-3 text-truncate" style={{color: 'gray'}}>
                                            {business.location.address1} | {business.display_phone}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )

    }
}

export default BusinessPageComponent;