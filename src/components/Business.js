import React from "react";
import '../css/Business.css';


function Business(props) {
    return (
      <div className="Business">
        <h1 className='name'>{props.name}</h1>
        <div className="image-container">
          <img alt="" src={require('../images/restaurant.jpg')} />
        </div>
        <div className="address">
          <p>{props.address}, {props.city}, {props.state}, {props.zipCode}</p>
        </div>
        <div className="info">
          <p className="category">{props.category}</p>
          <p className="rating">Rating: {props.rating}</p>
          <p className="review-count">Reviews: {props.reviewCount}</p>
        </div>
      </div>
    );
  }
  
  export default Business;