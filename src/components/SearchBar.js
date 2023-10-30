import React from 'react';
import '../css/SearchBar.css'; // Import the CSS file

function SearchBar() {
    return (
      <div className="SearchBar">
        <form>
          <div className="button-group">
            <button>Best Match</button>
            <button>Highest Rated</button>
            <button>Most Reviewed</button>
          </div>
          <div className="search-bars">
            <input placeholder="Search city" />
            <input placeholder="Search type of food" />
          </div>
          <div className="button-search">
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    );
}

export default SearchBar;