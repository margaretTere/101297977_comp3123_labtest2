const CFG = {
    cityUrl: 'https://api.openweathermap.org/data/2.5/find?q={city}&type=like&cnt=30&appid=93c73d23903ad4c4aa6a60d3b7a9670a',
//    cityUrl: 'https://openweathermap.org/data/2.5/find?q=London&type=like&sort=population&cnt=30&appid=439d4b804bc8187953eb36d2a8c26a02',
    iconUrl: 'https://openweathermap.org/img/wn/{iconId}@2x.png',
    weatherUrl: 'http://api.openweathermap.org/data/2.5/weather?q={city}&appid=93c73d23903ad4c4aa6a60d3b7a9670a',
    kelvin: 273.15,
    searchCity: '/',
    viewWeatherBoard: '/view-weatherboard'
};

export default CFG;