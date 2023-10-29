import React from "react";
import Business from "./Business";
import restaurant_data from "../data/restaurant_data.json";
import '../css/BusinessList.css';

function BusinessList() {
    return (
      <div>
        <ul className="BusinessList">
          {restaurant_data.map((business, index) => {
            return <Business key={business.id} {...business} />;
          })}
        </ul>
      </div>
    );
}

export default BusinessList;