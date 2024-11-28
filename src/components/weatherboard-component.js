import React from 'react';
import { TextField, Button, Container } from '@mui/material';
import CFG from '../config';

const Weatherboard = ({ weather }) => {

    console.log('Selected city');
    console.log(weather);

    const overview = `${weather.weather[0].main}, ${weather.weather[0].description}`;
    const iconUrl = CFG.iconUrl.replace('{iconId}', weather.weather[0].icon);
    const percip = weather.rain ? "Rain": weather.snow ? "Snow": "No";


    console.log(iconUrl);

    return (
        <Container>
            <Container sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <h2>{weather.name}, {weather.sys.country}</h2>
                <img src={iconUrl} alt="icon"/>
                <TextField fullWidth label="Overview" sx={{marginTop: 3}} value={overview}
              variant="outlined" required InputProps={{readOnly: true}}/>

                <Button component='a' href={CFG.searchCity} color='secondary' variant="contained" sx={{margin: 2}}>Search City</Button>
            </Container>
            <TextField fullWidth label="Current temperature" sx={{marginTop: 2}} value={Math.round(+weather.main.temp - CFG.kelvin, 2) + "\u00B0C"}
              variant="outlined" required InputProps={{readOnly: true}}/>
            <TextField fullWidth label="Feels Like" sx={{marginTop: 2}} value={Math.round(+weather.main.feels_like - CFG.kelvin, 2) + "\u00B0C"}
              variant="outlined" required InputProps={{readOnly: true}}/>
            <TextField fullWidth label="Min. Temperature Today" sx={{marginTop: 2}} value={Math.round(+weather.main.temp_min - CFG.kelvin, 2) + "\u00B0C"}
              variant="outlined" required InputProps={{readOnly: true}}/>
            <TextField fullWidth label="Max. Temperature Today" sx={{marginTop: 2}} value={Math.round(+weather.main.temp_max - CFG.kelvin, 2) + "\u00B0C"}
              variant="outlined" required InputProps={{readOnly: true}}/>
            <TextField fullWidth label="Atmospheric pressure, hPa" sx={{marginTop: 2}} value={weather.main.pressure}
              variant="outlined" required InputProps={{readOnly: true}}/>
            <TextField fullWidth label="Humidity, %" sx={{marginTop: 2}} value={weather.main.humidity}
              variant="outlined" required InputProps={{readOnly: true}}/>
            <TextField fullWidth label="Wind speed, meter/sec" sx={{marginTop: 2}} value={weather.wind.speed}
              variant="outlined" required InputProps={{readOnly: true}}/>
            <TextField fullWidth label="Cloudiness, %" sx={{marginTop: 2}} value={weather.clouds.all}
              variant="outlined" required InputProps={{readOnly: true}}/>
            <TextField fullWidth label="Percipitations" sx={{marginTop: 2}} value={percip}
              variant="outlined" required InputProps={{readOnly: true}}/>
        </Container>
    );
};

export default Weatherboard;