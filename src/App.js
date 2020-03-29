import React from 'react';
import './App.css';
import '../src/assets/custom-styles.css';
import LoggedInUser from './LoggedInUser/LoggedInUser';
import Home from './Home/Home';
import Tweets from './Tweets/Tweets';
import Search from './Search/Search';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    
        <div className="container-fluid">
          <LoggedInUser />
          <Home />
          <Tweets />
          <Search />
        </div>
  );
}

export default App;
