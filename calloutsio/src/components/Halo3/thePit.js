import React from 'react';

class ThePit extends React.Component{
    render(){
        return(
            <div className="thePitFullGrid">
                <h1 className="mapTitleThePit">The Pit</h1>
                <div className="calloutsList" id="pitCallouts">
                    <p>1st Br</p>
                    <p>2nd Br</p>
                    <p>Assault</p>
                    <p>Back Ramp</p>
                    <p>Courtyard</p>
                    <p>Custom/OS</p>
                    <p>Cuts</p>
                    <p>Flag</p>
                    <p>Green Box</p>
                    <p>Green Hall</p>
                    <p>Jump Up</p>
                    <p>Long Hall/Camo</p>
                    <p>Mid Bridge</p>
                    <p>Mauler</p>
                    <p>Needler</p>
                    <p>Needler Pit</p>
                    <p>Needler Ramp</p>
                    <p>Pit</p>
                    <p>Pit Ramp</p>
                    <p>Platform</p>
                    <p>Rockets</p>
                    <p>Runway</p>
                    <p>Snipe Bridge</p>
                    <p>Snipe Pocket</p>
                    <p>Street</p>
                    <p>Sword</p>
                    <p>Sword Ramp</p>
                    <p>Sword Window</p>
                    <p>S1</p>
                    <p>S2</p>
                    <p>Training</p>
                    <p>Training Ramp</p>
                    <p>Training Pocket</p>
                    <p>Walshy</p>
                </div>
                <div id="thePitMap"></div>
                <div className="inGamePic">
                    <h2 id="thePitInGamePicText" class="inGamePicText"></h2>
                    <img id="thePitScreenShot"></img>
                </div>
            </div>
        );
    }
}

export default ThePit;