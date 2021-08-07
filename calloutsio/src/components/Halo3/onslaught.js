import React from 'react';

class Onslaught extends React.Component{
    render(){
        return(
            <div className="onslaughtFullGrid">
                <h1 className="mapTitleOnslaught">Onslaught</h1>
                <div className="calloutsList" id="onslaughtCallouts">
                    <p>A Corner</p>
                    <p>A Cuts</p>
                    <p>A Dumpster</p>
                    <p>A House</p>
                    <p>A Jump Up</p>
                    <p>A Maze</p>
                    <p>A Nest</p>
                    <p>A Pocket</p>
                    <p>A Sneaky</p>
                    <p>A Stairs</p>
                    <p>A Standup</p>
                    <p>A Street</p>
                    <p>A Teepee</p>
                    <p>A Tunnel</p>
                    <p>B Corner</p>
                    <p>B Cuts</p>
                    <p>B Dumpster</p>
                    <p>B House</p>
                    <p>B Jump Up</p>
                    <p>B Maze</p>
                    <p>B Nest</p>
                    <p>B Pocket</p>
                    <p>B Sneaky</p>
                    <p>B Stairs</p>
                    <p>B Standup</p>
                    <p>B Street</p>
                    <p>B Teepee</p>
                    <p>B Tunnel</p>
                    <p>Basement</p>
                    <p>Courtyard</p>
                    <p>Flag</p>
                    <p>Garage Door</p>
                    <p>Shield</p>
                    <p>Top A</p>
                    <p>Top B</p>
                </div>
                <div id="onslaughtMap"></div>
                <div className="inGamePic">
                    <h2 id="onslaughtInGamePicText" class="inGamePicText"></h2>
                    <img id="onslaughtScreenShot"></img>
                </div>
            </div>
        );
    }
}

export default Onslaught;