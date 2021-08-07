import React from 'react';
import camoBlueprint from './BlueprintPics/Camo.png';
import CamoSS from './BlueprintPics/guardianSS/camoSS.png';
import guardianBlueprint from './BlueprintPics/Guardian2.png';
import Barrels from './BlueprintPics/Barrels.png';
import BarrelsSS from './BlueprintPics/guardianSS/BarrelsSS.png';
import BlueEntrance from './BlueprintPics/BlueEntrance.png';
import BlueEntranceSS from './BlueprintPics/guardianSS/blueEntranceSS.png';
import BlueLights from './BlueprintPics/BlueLights.png';
import BlueLightsSS from './BlueprintPics/guardianSS/blueLightsSS.png';
import BlueRamp from './BlueprintPics/BlueRamp.png';
import BlueRampSS from './BlueprintPics/guardianSS/blueRampSS.png';
import BlueWindow from './BlueprintPics/BlueWindow.png';
import BlueWindowSS from './BlueprintPics/guardianSS/blueWindowSS.png';
import BottomGold from './BlueprintPics/BottomGold.png';
import BottomGoldSS from './BlueprintPics/guardianSS/bottomGoldSS.png';
import BottomGreen from './BlueprintPics/BottomGreen.png';
import BottomGreenSS from './BlueprintPics/guardianSS/bottomGreenSS.png';
import Elbow from './BlueprintPics/Elbow.png';
import ElbowSS from './BlueprintPics/guardianSS/elbowSS.png';
import FrontBlue from './BlueprintPics/FrontBlue.png';
import FrontBlueSS from './BlueprintPics/guardianSS/frontBlueSS.png';
import GoldLights from './BlueprintPics/GoldLights.png';
import GoldLightsSS from './BlueprintPics/guardianSS/goldLightsSS.png';
import GoldWindow from './BlueprintPics/GoldWindow.png';
import GoldWindowSS from './BlueprintPics/guardianSS/goldWindowSS.png';
import GreenLights from './BlueprintPics/GreenLights.png';
import GreenLightsSS from './BlueprintPics/guardianSS/greenLightsSS.png';
import ShortJump from './BlueprintPics/ShortJump.png';
import ShortJumpSS from './BlueprintPics/guardianSS/shortJumpSS.png';
import ShotgunRoom from './BlueprintPics/ShotgunRoom.png';
import ShotgunRoomSS from './BlueprintPics/guardianSS/shotgunRoomSS.png';
import Snipe1 from './BlueprintPics/Snipe1.png';
import Snipe1SS from './BlueprintPics/guardianSS/snipe1SS.png';
import Snipe2 from './BlueprintPics/Snipe2.png';
import Snipe2SS from './BlueprintPics/guardianSS/snipe2SS.png';
import Snipe3 from './BlueprintPics/Snipe3.png';
import Snipe3SS from './BlueprintPics/guardianSS/snipe3SS.png';
import SnipeLift from './BlueprintPics/SnipeLift.png';
import SnipeLiftSS from './BlueprintPics/guardianSS/snipeLiftSS.png';
import SnipeLights from './BlueprintPics/SnipeLights.png';
import SnipeLightsSS from './BlueprintPics/guardianSS/snipeLightsSS.png';
import SnipeRamp from './BlueprintPics/SnipeRamp.png';
import SnipeRampSS from './BlueprintPics/guardianSS/snipeRampSS.png';
import Stump from './BlueprintPics/Stump.png';
import StumpSS from './BlueprintPics/guardianSS/stumpSS.png';
import TopBlue from './BlueprintPics/TopBlue.png';
import TopBlueSS from './BlueprintPics/guardianSS/topBlueSS.png';
import TopGold from './BlueprintPics/TopGold.png';
import TopGoldSS from './BlueprintPics/guardianSS/topGoldSS.png';
import TopGreen from './BlueprintPics/TopGreen.png';
import TopGreenSS from './BlueprintPics/guardianSS/topGreenSS.png';
import TopMid from './BlueprintPics/TopMid.png';
import TopMidSS from './BlueprintPics/guardianSS/topMidSS.png';
import UnderGlass from './BlueprintPics/UnderGlass.png';
import UnderGlassSS from './BlueprintPics/guardianSS/underGlassSS.png';

class Guardian extends React.Component{
    loadAll = () => {
        document.getElementById('guardianMap').style.backgroundImage=`url(${camoBlueprint})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${Barrels})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${BlueEntrance})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${BlueLights})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${BlueRamp})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${BlueWindow})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${BottomGold})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${BottomGreen})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${Elbow})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${FrontBlue})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${GoldLights})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${GoldWindow})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${GreenLights})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${ShortJump})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${ShotgunRoom})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${Snipe1})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${Snipe2})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${Snipe3})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${SnipeLift})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${SnipeLights})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${SnipeRamp})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${Stump})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${TopBlue})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${TopGold})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${TopGreen})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${TopMid})`;
        document.getElementById('guardianMap').style.backgroundImage=`url(${UnderGlass})`;
        document.getElementById('guardianScreenShot').src=CamoSS;
        document.getElementById('guardianScreenShot').src=BarrelsSS;
        document.getElementById('guardianScreenShot').src=BlueLightsSS;
        document.getElementById('guardianScreenShot').src=BlueRampSS;
        document.getElementById('guardianScreenShot').src=BlueWindowSS;
        document.getElementById('guardianScreenShot').src=BottomGoldSS;
        document.getElementById('guardianScreenShot').src=ElbowSS;
        document.getElementById('guardianScreenShot').src=FrontBlueSS;
        document.getElementById('guardianScreenShot').src=GoldLightsSS;
        document.getElementById('guardianScreenShot').src=GoldWindowSS;
        document.getElementById('guardianScreenShot').src=GreenLightsSS;
        document.getElementById('guardianScreenShot').src=ShortJumpSS;
        document.getElementById('guardianScreenShot').src=ShotgunRoomSS;
        document.getElementById('guardianScreenShot').src=Snipe1SS;
        document.getElementById('guardianScreenShot').src=Snipe2SS;
        document.getElementById('guardianScreenShot').src=Snipe3SS;
        document.getElementById('guardianScreenShot').src=SnipeLiftSS;
        document.getElementById('guardianScreenShot').src=SnipeLightsSS;
        document.getElementById('guardianScreenShot').src=SnipeRampSS;
        document.getElementById('guardianScreenShot').src=StumpSS;
        document.getElementById('guardianScreenShot').src=TopBlueSS;
        document.getElementById('guardianScreenShot').src=TopGoldSS;
        document.getElementById('guardianScreenShot').src=TopGreenSS;
        document.getElementById('guardianScreenShot').src=TopMidSS;
        document.getElementById('guardianScreenShot').src=UnderGlassSS;
    }
    showCamo = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${camoBlueprint})`;
        document.getElementById('guardianScreenShot').src=CamoSS;
        document.getElementById('camoText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Camo";
    }
    unshowCamo = () => {
        document.getElementById('camoText').style.color='white';
    }
    showBarrels = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${Barrels})`;
        document.getElementById('guardianScreenShot').src=BarrelsSS;
        document.getElementById('barrelsText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Barrels";
    }
    unshowBarrels = () => {
        document.getElementById('barrelsText').style.color='white';
    }
    showBlueEntrance = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${BlueEntrance})`;
        document.getElementById('guardianScreenShot').src=BlueEntranceSS;
        document.getElementById('blueEntranceText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Blue Entrance";
    }
    unshowBlueEntrance = () => {
        document.getElementById('blueEntranceText').style.color='white';
    }
    showBlueLights = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${BlueLights})`;
        document.getElementById('guardianScreenShot').src=BlueLightsSS;
        document.getElementById('blueLightsText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Blue Lights";
    }
    unshowBlueLights = () => {
        document.getElementById('blueLightsText').style.color='white';
    }
    showBlueRamp = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${BlueRamp})`;
        document.getElementById('guardianScreenShot').src=BlueRampSS;
        document.getElementById('blueRampText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Blue Ramp";
    }
    unshowBlueRamp = () => {
        document.getElementById('blueRampText').style.color='white';
    }
    showBlueWindow = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${BlueWindow})`;
        document.getElementById('guardianScreenShot').src=BlueWindowSS;
        document.getElementById('blueWindowText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Blue Window";
    }
    unshowBlueWindow = () => {
        document.getElementById('blueWindowText').style.color='white';
    }
    showBottomGold = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${BottomGold})`;
        document.getElementById('guardianScreenShot').src=BottomGoldSS;
        document.getElementById('bottomGoldText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Bottom Gold";
    }
    unshowBottomGold = () => {
        document.getElementById('bottomGoldText').style.color='white';
    }
    showBottomGreen = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${BottomGreen})`;
        document.getElementById('guardianScreenShot').src=BottomGreenSS;
        document.getElementById('bottomGreenText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Bottom Green";
    }
    unshowBottomGreen = () => {
        document.getElementById('bottomGreenText').style.color='white';
    }
    showElbow = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${Elbow})`;
        document.getElementById('guardianScreenShot').src=ElbowSS;
        document.getElementById('elbowText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Elbow";
    }
    unshowElbow = () => {
        document.getElementById('elbowText').style.color='white';
    }
    showFrontBlue = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${FrontBlue})`;
        document.getElementById('guardianScreenShot').src=FrontBlueSS;
        document.getElementById('frontBlueText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Front Blue";
    }
    unshowFrontBlue = () => {
        document.getElementById('frontBlueText').style.color='white';
    }
    showGoldLights = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${GoldLights})`;
        document.getElementById('guardianScreenShot').src=GoldLightsSS;
        document.getElementById('goldLightsText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Gold Lights";
    }
    unshowGoldLights = () => {
        document.getElementById('goldLightsText').style.color='white';
    }
    showGoldWindow = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${GoldWindow})`;
        document.getElementById('guardianScreenShot').src=GoldWindowSS;
        document.getElementById('goldWindowText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Gold Window";
    }
    unshowGoldWindow = () => {
        document.getElementById('goldWindowText').style.color='white';
    }
    showGreenLights = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${GreenLights})`;
        document.getElementById('guardianScreenShot').src=GreenLightsSS;
        document.getElementById('greenLightsText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Green Lights";
    }
    unshowGreenLights = () => {
        document.getElementById('greenLightsText').style.color='white';
    }
    showShortJump = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${ShortJump})`;
        document.getElementById('guardianScreenShot').src=ShortJumpSS;
        document.getElementById('shortJumpText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Short Jump";
    }
    unshowShortJump = () => {
        document.getElementById('shortJumpText').style.color='white';
    }
    showShotgunRoom = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${ShotgunRoom})`;
        document.getElementById('guardianScreenShot').src=ShotgunRoomSS;
        document.getElementById('shotgunRoomText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Shotgun Room";
    }
    unshowShotgunRoom = () => {
        document.getElementById('shotgunRoomText').style.color='white';
    }
    showSnipe1 = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${Snipe1})`;
        document.getElementById('guardianScreenShot').src=Snipe1SS;
        document.getElementById('snipe1Text').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Snipe 1";
    }
    unshowSnipe1 = () => {
        document.getElementById('snipe1Text').style.color='white';
    }
    showSnipe2 = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${Snipe2})`;
        document.getElementById('guardianScreenShot').src=Snipe2SS;
        document.getElementById('snipe2Text').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Snipe 2";
    }
    unshowSnipe2 = () => {
        document.getElementById('snipe2Text').style.color='white';
    }
    showSnipe3 = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${Snipe3})`;
        document.getElementById('guardianScreenShot').src=Snipe3SS;
        document.getElementById('snipe3Text').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Snipe 3";
    }
    unshowSnipe3 = () => {
        document.getElementById('snipe3Text').style.color='white';
    }
    showSnipeLift = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${SnipeLift})`;
        document.getElementById('guardianScreenShot').src=SnipeLiftSS;
        document.getElementById('snipeLiftText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Snipe Lift";
    }
    unshowSnipeLift = () => {
        document.getElementById('snipeLiftText').style.color='white';
    }
    showSnipeLights = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${SnipeLights})`;
        document.getElementById('guardianScreenShot').src=SnipeLightsSS;
        document.getElementById('snipeLightsText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Snipe Lights";
    }
    unshowSnipeLights = () => {
        document.getElementById('snipeLightsText').style.color='white';
    }
    showSnipeRamp = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${SnipeRamp})`;
        document.getElementById('guardianScreenShot').src=SnipeRampSS;
        document.getElementById('snipeRampText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Snipe Ramp";
    }
    unshowSnipeRamp = () => {
        document.getElementById('snipeRampText').style.color='white';
    }
    showStump = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${Stump})`;
        document.getElementById('guardianScreenShot').src=StumpSS;
        document.getElementById('stumpText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Stump";
    }
    unshowStump = () => {
        document.getElementById('stumpText').style.color='white';
    }
    showTopBlue = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${TopBlue})`;
        document.getElementById('guardianScreenShot').src=TopBlueSS;
        document.getElementById('topBlueText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Top Blue";
    }
    unshowTopBlue = () => {
        document.getElementById('topBlueText').style.color='white';
    }
    showTopGold = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${TopGold})`;
        document.getElementById('guardianScreenShot').src=TopGoldSS;
        document.getElementById('topGoldText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Top Gold";
    }
    unshowTopGold = () => {
        document.getElementById('topGoldText').style.color='white';
    }
    showTopGreen = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${TopGreen})`;
        document.getElementById('guardianScreenShot').src=TopGreenSS;
        document.getElementById('topGreenText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Top Green";
    }
    unshowTopGreen = () => {
        document.getElementById('topGreenText').style.color='white';
    }
    showTopMid = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${TopMid})`;
        document.getElementById('guardianScreenShot').src=TopMidSS;
        document.getElementById('topMidText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Top Mid";
    }
    unshowTopMid = () => {
        document.getElementById('topMidText').style.color='white';
    }
    showUnderGlass = () => {
        this.loadAll();
        document.getElementById('guardianMap').style.backgroundImage=`url(${UnderGlass})`;
        document.getElementById('guardianScreenShot').src=UnderGlassSS;
        document.getElementById('underGlassText').style.color='green';
        document.getElementById('guardianInGamePicText').style.color="white";
        document.getElementById('guardianInGamePicText').innerHTML="Under Glass";
    }
    unshowUnderGlass = () => {
        document.getElementById('underGlassText').style.color='white';
    }
    resetBackground = () =>{
        document.getElementById('guardianMap').style.backgroundImage=`url(${guardianBlueprint})`;
    }
    render(){
        return(
            <div className="guardianFullGrid">
                <h1 className="mapTitleGuardian">Guardian</h1>
                <div className="calloutsList" id="guardianCallouts">
                    <p id="barrelsText" onMouseOver={this.showBarrels} onMouseOut={() => {this.resetBackground(); this.unshowBarrels()}}>Barrels</p>
                    <p id="blueEntranceText" onMouseOver={this.showBlueEntrance} onMouseOut={() => {this.resetBackground(); this.unshowBlueEntrance()}}>Blue Entrance</p>
                    <p id="blueLightsText" onMouseOver={this.showBlueLights} onMouseOut={() => {this.resetBackground(); this.unshowBlueLights()}}>Blue Lights</p>
                    <p id="blueRampText" onMouseOver={this.showBlueRamp} onMouseOut={() => {this.resetBackground(); this.unshowBlueRamp()}}>Blue Ramp</p>
                    <p id="blueWindowText" onMouseOver={this.showBlueWindow} onMouseOut={() => {this.resetBackground(); this.unshowBlueWindow()}}>Blue Window</p>
                    <p id="bottomGoldText" onMouseOver={this.showBottomGold} onMouseOut={() => {this.resetBackground(); this.unshowBottomGold()}}>Bottom Gold</p>
                    <p id="bottomGreenText" onMouseOver={this.showBottomGreen} onMouseOut={() => {this.resetBackground(); this.unshowBottomGreen()}}>Bottom Green</p>
                    <p id="camoText" onMouseOver={this.showCamo} onMouseOut={() => {this.resetBackground(); this.unshowCamo()}}>Camo</p>
                    <p id="elbowText" onMouseOver={this.showElbow} onMouseOut={() => {this.resetBackground(); this.unshowElbow()}}>Elbow</p>
                    <p id="frontBlueText" onMouseOver={this.showFrontBlue} onMouseOut={() => {this.resetBackground(); this.unshowFrontBlue()}}>Front Blue</p>
                    <p id="goldLightsText" onMouseOver={this.showGoldLights} onMouseOut={() => {this.resetBackground(); this.unshowGoldLights()}}>Gold Lights</p>
                    <p id="goldWindowText" onMouseOver={this.showGoldWindow} onMouseOut={() => {this.resetBackground(); this.unshowGoldWindow()}}>Gold Window</p>
                    <p id="greenLightsText" onMouseOver={this.showGreenLights} onMouseOut={() => {this.resetBackground(); this.unshowGreenLights()}}>Green Lights</p>
                    <p id="shortJumpText" onMouseOver={this.showShortJump} onMouseOut={() => {this.resetBackground(); this.unshowShortJump()}}>Short Jump</p>
                    <p id="shotgunRoomText" onMouseOver={this.showShotgunRoom} onMouseOut={() => {this.resetBackground(); this.unshowShotgunRoom()}}>Shotgun Room</p>
                    <p id="snipe1Text" onMouseOver={this.showSnipe1} onMouseOut={() => {this.resetBackground(); this.unshowSnipe1()}}>Snipe 1</p>
                    <p id="snipe2Text" onMouseOver={this.showSnipe2} onMouseOut={() => {this.resetBackground(); this.unshowSnipe2()}}>Snipe 2</p>
                    <p id="snipe3Text" onMouseOver={this.showSnipe3} onMouseOut={() => {this.resetBackground(); this.unshowSnipe3()}}>Snipe 3</p>
                    <p id="snipeLiftText" onMouseOver={this.showSnipeLift} onMouseOut={() => {this.resetBackground(); this.unshowSnipeLift()}}>Snipe Lift</p>
                    <p id="snipeLightsText" onMouseOver={this.showSnipeLights} onMouseOut={() => {this.resetBackground(); this.unshowSnipeLights()}}>Snipe Lights</p>
                    <p id="snipeRampText" onMouseOver={this.showSnipeRamp} onMouseOut={() => {this.resetBackground(); this.unshowSnipeRamp()}}>Snipe Ramp</p>
                    <p id="stumpText" onMouseOver={this.showStump} onMouseOut={() => {this.resetBackground(); this.unshowStump()}}>Stump</p>
                    <p id="topBlueText" onMouseOver={this.showTopBlue} onMouseOut={() => {this.resetBackground(); this.unshowTopBlue()}}>Top Blue</p>
                    <p id="topGoldText" onMouseOver={this.showTopGold} onMouseOut={() => {this.resetBackground(); this.unshowTopGold()}}>Top Gold</p>
                    <p id="topGreenText" onMouseOver={this.showTopGreen} onMouseOut={() => {this.resetBackground(); this.unshowTopGreen()}}>Top Green</p>
                    <p id="topMidText" onMouseOver={this.showTopMid} onMouseOut={() => {this.resetBackground(); this.unshowTopMid()}}>Top Mid</p>
                    <p id="underGlassText" onMouseOver={this.showUnderGlass} onMouseOut={() => {this.resetBackground(); this.unshowUnderGlass()}}>Under Glass</p>
                </div>
                <div id="guardianMap">
                    <div id='camo' onMouseOver={this.showCamo} onMouseOut={() => {this.resetBackground(); this.unshowCamo()}}>
                        <img src={camoBlueprint} className='preloadImage'></img>
                    </div>
                    <div id='barrels' onMouseOver={this.showBarrels} onMouseOut={() => {this.resetBackground(); this.unshowBarrels()}}>
                        <img src={Barrels} className='preloadImage'></img>
                    </div>
                    <div id='barrels2' onMouseOver={this.showBarrels} onMouseOut={() => {this.resetBackground(); this.unshowBarrels()}}></div>
                    <div id='blueEntrance' onMouseOver={this.showBlueEntrance} onMouseOut={() => {this.resetBackground(); this.unshowBlueEntrance()}}>
                        <img src={BlueEntrance} className='preloadImage'></img>
                    </div>
                    <div id='blueLights' onMouseOver={this.showBlueLights} onMouseOut={() => {this.resetBackground(); this.unshowBlueLights()}}>
                        <img src={BlueLights} className='preloadImage'></img>
                    </div>
                    <div id='blueRamp' onMouseOver={this.showBlueRamp} onMouseOut={() => {this.resetBackground(); this.unshowBlueRamp()}}>
                        <img src={BlueRamp} className='preloadImage'></img>
                    </div>
                    <div id='blueRamp2' onMouseOver={this.showBlueRamp} onMouseOut={() => {this.resetBackground(); this.unshowBlueRamp()}}></div>
                    <div id='blueWindow' onMouseOver={this.showBlueWindow} onMouseOut={() => {this.resetBackground(); this.unshowBlueWindow()}}>
                        <img src={BlueWindow} className='preloadImage'></img>
                    </div>
                    <div id='bottomGold' onMouseOver={this.showBottomGold} onMouseOut={() => {this.resetBackground(); this.unshowBottomGold()}}>
                        <img src={BottomGold} className='preloadImage'></img>
                    </div>
                    <div id='bottomGreen' onMouseOver={this.showBottomGreen} onMouseOut={() => {this.resetBackground(); this.unshowBottomGreen()}}>
                        <img src={BottomGreen} className='preloadImage'></img>
                    </div>
                    <div id='elbow' onMouseOver={this.showElbow} onMouseOut={() => {this.resetBackground(); this.unshowElbow()}}>
                        <img src={Elbow} className='preloadImage'></img>
                    </div>
                    <div id='elbow2' onMouseOver={this.showElbow} onMouseOut={() => {this.resetBackground(); this.unshowElbow()}}></div>
                    <div id='frontBlue' onMouseOver={this.showFrontBlue} onMouseOut={() => {this.resetBackground(); this.unshowFrontBlue()}}>
                        <img src={FrontBlue} className='preloadImage'></img>
                    </div>
                    <div id='goldLights' onMouseOver={this.showGoldLights} onMouseOut={() => {this.resetBackground(); this.unshowGoldLights()}}>
                        <img src={GoldLights} className='preloadImage'></img>
                    </div>
                    <div id='goldWindow' onMouseOver={this.showGoldWindow} onMouseOut={() => {this.resetBackground(); this.unshowGoldWindow()}}>
                        <img src={GoldWindow} className='preloadImage'></img>
                    </div>
                    <div id='greenLights' onMouseOver={this.showGreenLights} onMouseOut={() => {this.resetBackground(); this.unshowGreenLights()}}>
                        <img src={GreenLights} className='preloadImage'></img>
                    </div>
                    <div id='shortJump' onMouseOver={this.showShortJump} onMouseOut={() => {this.resetBackground(); this.unshowShortJump()}}>
                        <img src={ShortJump} className='preloadImage'></img>
                    </div>
                    <div id='shotgunRoom' onMouseOver={this.showShotgunRoom} onMouseOut={() => {this.resetBackground(); this.unshowShotgunRoom()}}>
                        <img src={ShotgunRoom} className='preloadImage'></img>
                    </div>
                    <div id='snipe1' onMouseOver={this.showSnipe1} onMouseOut={() => {this.resetBackground(); this.unshowSnipe1()}}>
                        <img src={Snipe1} className='preloadImage'></img>
                    </div>
                    <div id='snipe2' onMouseOver={this.showSnipe2} onMouseOut={() => {this.resetBackground(); this.unshowSnipe2()}}>
                        <img src={Snipe2} className='preloadImage'></img>
                    </div>
                    <div id='snipe3' onMouseOver={this.showSnipe3} onMouseOut={() => {this.resetBackground(); this.unshowSnipe3()}}>
                        <img src={Snipe3} className='preloadImage'></img>
                    </div>
                    <div id='snipe32' onMouseOver={this.showSnipe3} onMouseOut={() => {this.resetBackground(); this.unshowSnipe3()}}></div>
                    <div id='snipeLift' onMouseOver={this.showSnipeLift} onMouseOut={() => {this.resetBackground(); this.unshowSnipeLift()}}>
                        <img src={SnipeLift} className='preloadImage'></img>
                    </div>
                    <div id='snipeLights' onMouseOver={this.showSnipeLights} onMouseOut={() => {this.resetBackground(); this.unshowSnipeLights()}}>
                        <img src={SnipeLights} className='preloadImage'></img>
                    </div>
                    <div id='snipeRamp' onMouseOver={this.showSnipeRamp} onMouseOut={() => {this.resetBackground(); this.unshowSnipeRamp()}}>
                        <img src={SnipeRamp} className='preloadImage'></img>
                    </div>
                    <div id='snipeRamp2' onMouseOver={this.showSnipeRamp} onMouseOut={() => {this.resetBackground(); this.unshowSnipeRamp()}}></div>
                    <div id='stump' onMouseOver={this.showStump} onMouseOut={() => {this.resetBackground(); this.unshowStump()}}>
                        <img src={Stump} className='preloadImage'></img>
                    </div>
                    <div id='topBlue' onMouseOver={this.showTopBlue} onMouseOut={() => {this.resetBackground(); this.unshowTopBlue()}}>
                        <img src={TopBlue} className='preloadImage'></img>
                    </div>
                    <div id='topGold' onMouseOver={this.showTopGold} onMouseOut={() => {this.resetBackground(); this.unshowTopGold()}}>
                        <img src={TopGold} className='preloadImage'></img>
                    </div>
                    <div id='topGold2' onMouseOver={this.showTopGold} onMouseOut={() => {this.resetBackground(); this.unshowTopGold()}}></div>
                    <div id='topGreen' onMouseOver={this.showTopGreen} onMouseOut={() => {this.resetBackground(); this.unshowTopGreen()}}>
                        <img src={TopGreen} className='preloadImage'></img>
                    </div>
                    <div id='topMid' onMouseOver={this.showTopMid} onMouseOut={() => {this.resetBackground(); this.unshowTopMid()}}>
                        <img src={TopMid} className='preloadImage'></img>
                    </div>
                    <div id='underGlass' onMouseOver={this.showUnderGlass} onMouseOut={() => {this.resetBackground(); this.unshowUnderGlass()}}>
                        <img src={UnderGlass} className='preloadImage'></img>
                    </div>
                </div>
                <div className="inGamePic">
                    <h2 id="guardianInGamePicText" class="inGamePicText"></h2>
                    <img id="guardianScreenShot"></img>
                </div>
            </div>
        );
    }
}

export default Guardian;