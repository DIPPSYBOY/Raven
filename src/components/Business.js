import React from "react";
import '../css/Business.css';


function Business({business}) {
    return (
      <div className="Business">
        <h1 className='name'>{business.name}</h1>
        <div className="image-container">
          <img alt="" src={require('../images/restaurant.jpg')} />
        </div>
        <div className="address">
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{business.state}, {business.zipCode}</p>
        </div>
        <div className="info">
          <p className="category">{business.category}</p>
          <p className="rating">Rating: {business.rating}</p>
          <p className="review-count">Reviews: {business.reviewCount}</p>
        </div>
      </div>
    );
  }
  
  export default Business;