import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchCity from './components/search-city-component';
import Weatherboard from './components/weatherboard-component';
import CFG from './config'

function App() {
  const [weather, setWeather] = useState(null);

  return (
    <Router>
      <Routes>
        <Route exact path={CFG.searchCity} element={<SearchCity setWeather={setWeather}/>} />
        <Route path={CFG.viewWeatherBoard} element={<Weatherboard weather={weather}/>} />
      </Routes>
    </Router>
  );
}

export default App;