import React from "react";
import Business from "./Business";
import '../css/BusinessList.css';

function BusinessList({restaurant_data}) {
    return (
      <div>
        <ul className="BusinessList">
          {restaurant_data.map((business, index) => {
            return <Business key={business.id} business={business} />;
          })}
        </ul>
      </div>
    );
}

export default BusinessList;