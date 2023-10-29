import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList';

function App() {
  return (
    <div>
        <div className="App">
          <header className="header">Restaurant App</header>
            <div>
              <BusinessList/>
            </div>
        </div>
    </div>
  );
}

export default App;
