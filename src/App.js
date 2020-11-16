import './App.css';
import HomeScreen from './screens/HomeScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CountriesScreen from './screens/CountriesScreen'
import heading from './heading.png'
function App() {
  return (
    <Router>
      <div className="App container">
        <img src={heading} alt="" style={{margin:'32px'}}/>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/countries' component={CountriesScreen} />
        <p>Built by Naman Bhandari</p>
      </div>
    </Router>
  );
}

export default App;
