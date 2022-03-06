import React, {useState, useEffect} from 'react';
function Header() {
        const [weatherDegrees,setWeatherDegrees]=useState('Loading...');
        const [weatherDescription,setWeatherDescription]=useState('');

    useEffect(() => {
        const url = 'http://api.weatherstack.com/current?access_key=6515e85ac5aa99126314670e1eef2f9c&query=Mombasa&units=f';
        const weatherRetrieved = fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            setWeatherDegrees(data.current.temperature);
            setWeatherDescription(data.current.weather_descriptions);
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