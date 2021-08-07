import React from 'react';

class Heretic extends React.Component{
    render(){
        return(
            <div className="hereticFullGrid">
                <h1 className="mapTitleHeretic">Heretic</h1>
                <div className="calloutsList" id="hereticsCallouts">
                    <p>Back Wall</p>
                    <p>Big Nipple</p>
                    <p>Blue 1</p>
                    <p>Blue 2</p>
                    <p>Blue Street</p>
                    <p>Bottom Mid</p>
                    <p>Bubble</p>
                    <p>Car 1</p>
                    <p>Car 2</p>
                    <p>Car 3</p>
                    <p>Car Pocket</p>
                    <p>Curious</p>
                    <p>Curvy</p>
                    <p>Eli</p>
                    <p>Gandhi</p>
                    <p>Gandhi Ramp</p>
                    <p>Glass</p>
                    <p>High Ledge</p>
                    <p>Jump Up</p>
                    <p>Red 1</p>
                    <p>Red 2</p>
                    <p>Nerd</p>
                    <p>Nipple</p>
                    <p>Pink 1</p>
                    <p>Pink 2</p>
                    <p>Pink 3</p>
                    <p>Pink Face</p>
                    <p>Pink Pocket</p>
                    <p>Red Street</p>
                    <p>Slide</p>
                    <p>Sword</p>
                    <p>Toilet</p>
                    <p>Top Mid</p>
                    <p>Tunnel</p>
                    <p>Walshy</p>
                </div>
                <div id="hereticMap"></div>
                <div className="inGamePic">
                    <h2 id="hereticInGamePicText" class="inGamePicText"></h2>
                    <img id="hereticScreenShot"></img>
                </div>
            </div>
        );
    }
}

export default Heretic;