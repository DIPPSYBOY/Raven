import React, {useState} from 'react';
import '../css/SearchBar.css'; // Import the CSS file

function SearchBar() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [sorting, setSorting] = useState('BestMatch');

  function handleClick(event) {
    setSorting(event.target.value);
  };

  function handleChange(event){
    event.preventDefault();
    const {name, value} = event.target
    if (name === 'location'){
      setLocation(value);
    }else if (name === 'search'){
      setSearch(value);
    }
  };

  function handleSubmit(event){
    alert(`Searching Yelp for ${search} in ${location}, sort by:${sorting}`)
  }
  return (
    <div className="SearchBar">
        <div className="button-group">
          <button value='BestMatch' onClick={handleClick} className={sorting === 'BestMatch' ? 'active' : ''} >Best Match</button>
          <button value='HighestRated'onClick={handleClick} className={sorting === 'HighestRated' ? 'active' : ''} >Highest Rated</button>
          <button  value='MostReviewed' onClick={handleClick} className={sorting === 'MostReviewed' ? 'active' : ''} >Most Reviewed</button>
        </div>
      <form>
        <div className="search-bars">
          <input 
          type='text' 
          name='location' 
          value={location}
          placeholder="Search city" 
          onChange={handleChange} />
          <input 
          type='text' 
          name='search'
          value={search} 
          placeholder="Search type of food" 
          onChange={handleChange} />
        </div>
        <div className="button-search">
          <button type="submit" onClick={handleSubmit}>Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;