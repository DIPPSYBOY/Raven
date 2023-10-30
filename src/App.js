import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import restaurant_data from './data/restaurant_data.json';


function App() {
  return (
    <div>
        <div className="App">
          <header className="header">Restaurant App</header>
          <div>
            <SearchBar/>
          </div>
          <div>
            <BusinessList restaurant_data={restaurant_data}/>
          </div>
        </div>
    </div>
  );
}

export default App;
