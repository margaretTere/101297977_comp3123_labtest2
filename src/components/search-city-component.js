import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Container, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CFG from '../config';

const SearchCity = ({ setWeather }) => {
    const [searchStr, setSearchStr] = useState('');
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
      const url = CFG.cityUrl.replace('{city}', searchStr);
  
      try {
        const response = await axios.get(url);
        setWeatherData(response.data.list);
        setError('');
      } catch (err) {
        setError('There was a problem getting data from weather service.');
        setWeatherData([]);
      }
    };
  
    const handleSelectCity = (cityWeather) => {
        setWeather(cityWeather);
        navigate(CFG.viewWeatherBoard);
    };
  
    return (
      <Container>
        <h1>Search for Cities</h1>
        <TextField fullWidth label="Search city" value={searchStr} 
            onChange={(e) => setSearchStr(e.target.value)} onKeyUp={handleSearch}
            variant="outlined"/>
          
        {error && <div style={{ color: 'red' }}>{error}</div>}
  
        {weatherData.length > 0 && (
          <List style={{ border: '1px solid #ccc', maxHeight: '200px', overflowY: 'auto' }}>
            {weatherData.map((cityWeather) => (
              <ListItem key={cityWeather.id} onClick={() => handleSelectCity(cityWeather)} style={{ cursor: 'pointer', padding: '5px' }}>
                <ListItemText>{cityWeather.name}, {cityWeather.sys.country}</ListItemText>
              </ListItem>
            ))}
          </List>
        )}
        </Container>
    );
};

export default SearchCity;