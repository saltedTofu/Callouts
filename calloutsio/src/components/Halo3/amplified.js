import React from 'react';

class Amplified extends React.Component{
    render(){
        return(
            <div className="amplifiedFullGrid">
                <h1 className="mapTitleAmplified">Amplified</h1>
                <div className="calloutsList" id="amplifiedCallouts">
                    <p>B Sign</p>
                    <p>Blue Pink 2</p>
                    <p>Bottom Mid</p>
                    <p>Garage Door</p>
                    <p>Gold 1</p>
                    <p>Gold 2</p>
                    <p>Gold 3</p>
                    <p>Pink 1</p>
                    <p>Pink 2</p>
                    <p>Pink 3</p>
                    <p>Pink Plat</p>
                    <p>Red 1</p>
                    <p>Red 2</p>
                    <p>Red Couch</p>
                    <p>Red Courtyard</p>
                    <p>Red Fence</p>
                    <p>Red Gold Bubble</p>
                    <p>Red Gold Jump Up</p>
                    <p>Red Gold Pocket</p>
                    <p>Red Gold Tower</p>
                    <p>Red House</p>
                    <p>Red Pink Bubble</p>
                    <p>Red Pink Jump Up</p>
                    <p>Red Pink Pocket</p>
                    <p>Red Pink Tower</p>
                    <p>Red Plat</p>
                    <p>Red Shield</p>
                    <p>Red Street</p>
                    <p>Top Mid</p>
                </div>
                <div id="amplifiedMap"></div>
                <div className="inGamePic">
                    <h2 id="amplifiedInGamePicText" class="inGamePicText"></h2>
                    <img id="amplifiedScreenShot"></img>
                </div>
            </div>
        );
    }
}

export default Amplified;