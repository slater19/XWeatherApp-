import logo from './logo.svg';
import './App.css';
import { Search, XWEATHER }  from './XWEATHER1.js'

import React, { useEffect, useState } from 'react';

function App() {

  const [city, setCity] = useState('');
  const searchData2 = (searchCity) => {
    setCity(searchCity);
  };
  return (
    <div className="App">
     
     <Search
        
        searchData={searchData2}
      />
      <XWEATHER city={city}/>
     </div>
  );     
}

export default App;
