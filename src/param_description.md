Parameters
city_name: City name
lat: Geographical coordinates of the location (latitude)
lon: Geographical coordinates of the location (longitude)
main ->
main.temp: Temperature
main.temp_min: Minimum temperature at the moment. This is deviation from temperature that is possible for large cities and megalopolises geographically expanded (use these parameter optionally).
main.temp_max: Maximum temperature at the moment. This is deviation from temperature that is possible for large cities and megalopolises geographically expanded (use these parameter optionally).
main.feels_like: This temperature parameter accounts for the human perception of weather
main.pressure: Atmospheric pressure (on the sea level), hPa
main.humidity: Humidity, %
main.dew_point: Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. Units – default: kelvin
wind ->
wind.speed: Wind speed. Units – default: meter/sec
wind.deg: Wind direction, degrees (meteorological)
wind.gust: Wind gust. Units – default: meter/sec
clouds ->
clouds.all: Cloudiness, %
rain ->
rain.1h: Rain volume for the last hour, mm
rain.3h: Rain volume for the last 3 hours, mm
snow ->
snow.1h: Snow volume for the last hour, mm (in liquid state)
snow.3h: Snow volume for the last 3 hours, mm (in liquid state)
weather -> (more info Weather condition codes)
weather.id: Weather condition id
weather.main: Group of weather parameters (Rain, Snow, Extreme etc.)
weather.description: Weather condition within the group. 

Please find more here
------------------------------
weather.icon: Weather icon id
visibility: Average visibility, metres. The maximum value of the visibility is 10km
dt Time: of data calculation, unix, UTC
dt_isoDate: and time in UTC format
timezone: Shift in seconds from UTC