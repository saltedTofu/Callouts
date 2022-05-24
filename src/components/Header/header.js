import React, {useState, useEffect} from 'react';
// https://api.openweathermap.org/data/2.5/weather?lat=4.04&lon=39.67&units=imperial&appid=3743c250bf31effa5f54562c11a1838d
function Header() {
        const [weatherDegrees,setWeatherDegrees]=useState('Loading...');
        const [weatherDescription,setWeatherDescription]=useState('');
        const weatherKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=4.04&lon=39.67&units=imperial&appid=${weatherKey}`;
        const weatherRetrieved = fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            setWeatherDegrees(data.main.temp);
            setWeatherDescription(data.weather[0].description);
        })
    },[])
    return(
        <div data-testid="headerTest" className="header">
            <div id="emptyDiv"></div>
            <h1 id="pageTitle">Halo 3 Callouts</h1>
            <div id="weather">
                <p>Current Weather in New Mombasa</p>
                <div id="weatherAPIOutput">
                    <p id="weatherDegrees">{weatherDegrees}°,</p>
                    <p id="weatherDescription"> {weatherDescription}</p>
                    <img></img>
                </div>
            </div>    
        </div>
    );
}
export default Header;