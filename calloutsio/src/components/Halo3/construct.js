import React from 'react';
import constructBlueprint from './BlueprintPics/Construct.png';
import backGoldRamp from './BlueprintPics/constructBPs/backGoldRamp.png';
import backGoldRampSS from './BlueprintPics/constructSS/backGoldRamp.png';
import bottomGold from './BlueprintPics/constructBPs/bottomGold.png';
import bottomGoldSS from './BlueprintPics/constructSS/bottomGold.png';
import c1 from './BlueprintPics/constructBPs/c1.png';
import c1SS from './BlueprintPics/constructSS/c1.png';
import c2 from './BlueprintPics/constructBPs/c2.png';
import c2SS from './BlueprintPics/constructSS/c2.png';
import c3 from './BlueprintPics/constructBPs/c3.png';
import c3SS from './BlueprintPics/constructSS/c3.png';
import closedBarrels from './BlueprintPics/constructBPs/closedBarrels.png';
import closedBarrelsSS from './BlueprintPics/constructSS/closedBarrels.png';
import closedBR from './BlueprintPics/constructBPs/closedBR.png';
import closedBRSS from './BlueprintPics/constructSS/closedBR.png';
import closedBubble from './BlueprintPics/constructBPs/closedBubble.png';
import closedBubbleSS from './BlueprintPics/constructSS/closedBubble.png';
import closedSkinny from './BlueprintPics/constructBPs/closedSkinny.png';
import closedSkinnySS from './BlueprintPics/constructSS/closedSkinny.png';
import closedStreet from './BlueprintPics/constructBPs/closedStreet.png';
import closedStreetSS from './BlueprintPics/constructSS/closedStreet.png';
import closedSwordLeg from './BlueprintPics/constructBPs/closedSwordLeg.png';
import closedSwordLegSS from './BlueprintPics/constructSS/closedSwordLeg.png';
import donut from './BlueprintPics/constructBPs/donut.png';
import donutSS from './BlueprintPics/constructSS/donut.png';
import laser from './BlueprintPics/constructBPs/laser.png';
import laserSS from './BlueprintPics/constructSS/laser.png';
import lobby from './BlueprintPics/constructBPs/lobby.png';
import lobbySS from './BlueprintPics/constructSS/lobby.png';
import mainRamp from './BlueprintPics/constructBPs/mainRamp.png'
import mainRampSS from './BlueprintPics/constructSS/mainRamp.png';
import midGold from './BlueprintPics/constructBPs/midGold.png';
import midGoldSS from './BlueprintPics/constructSS/midGold.png';
import midGoldRamp from './BlueprintPics/constructBPs/midGoldRamp.png';
import midGoldRampSS from './BlueprintPics/constructSS/midGoldRamp.png';
import o1 from './BlueprintPics/constructBPs/o1.png';
import o1SS from './BlueprintPics/constructSS/o1.png';
import o2 from './BlueprintPics/constructBPs/o2.png';
import o2SS from './BlueprintPics/constructSS/o2.png';
import o3 from './BlueprintPics/constructBPs/o3.png';
import o3SS from './BlueprintPics/constructSS/o3.png';
import openBarrel from './BlueprintPics/constructBPs/openBarrel.png';
import openBarrelSS from './BlueprintPics/constructSS/openBarrels.png';
import openBR from './BlueprintPics/constructBPs/openBR.png';
import openBRSS from './BlueprintPics/constructSS/openBR.png';
import openBubble from './BlueprintPics/constructBPs/openBubble.png';
import openBubbleSS from './BlueprintPics/constructSS/openBubble.png';
import openRamp from './BlueprintPics/constructBPs/openRamp.png';
import openRampSS from './BlueprintPics/constructSS/openRamp.png';
import openSkinny from './BlueprintPics/constructBPs/openSkinny.png';
import openSkinnySS from './BlueprintPics/constructSS/openSkinny.png';
import openStreet from './BlueprintPics/constructBPs/openStreet.png';
import openStreetSS from './BlueprintPics/constructSS/openStreet.png';
import openSwordLeg from './BlueprintPics/constructBPs/openSwordLeg.png';
import openSwordLegSS from './BlueprintPics/constructSS/openSwordLeg.png';
import r1 from './BlueprintPics/constructBPs/r1.png';
import r1SS from './BlueprintPics/constructSS/r1.png';
import r2 from './BlueprintPics/constructBPs/r2.png';
import r2SS from './BlueprintPics/constructSS/r2.png';
import river from './BlueprintPics/constructBPs/river.png';
import riverSS from './BlueprintPics/constructSS/river.png';
import snipe from './BlueprintPics/constructBPs/snipe.png';
import snipeSS from './BlueprintPics/constructSS/snipe.png';
import sword from './BlueprintPics/constructBPs/sword.png';
import swordSS from './BlueprintPics/constructSS/sword.png';
import topGold from './BlueprintPics/constructBPs/topGold.png';
import topGoldSS from './BlueprintPics/constructSS/topGold.png';
import underGlass from './BlueprintPics/constructBPs/underGlass.png';
import underGlassSS from './BlueprintPics/constructSS/underGlass.png';

class Construct extends React.Component{
    resetBackground = () =>{
        document.getElementById('constructMap').style.backgroundImage=`url(${constructBlueprint})`;
    }
    showbackGoldRamp = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${backGoldRamp})`;
        document.getElementById('backGoldRampText').style.color='green';
        document.getElementById('constructScreenShot').src=backGoldRampSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Back Gold Ramp";
    }
    unshowbackGoldRamp = () => {
        document.getElementById('backGoldRampText').style.color='white';
    }
    showbottomGold = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${bottomGold})`;
        document.getElementById('botGoldText').style.color='green';
        document.getElementById('constructScreenShot').src=bottomGoldSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Bottom Gold";
    }
    unshowbottomGold = () => {
        document.getElementById('botGoldText').style.color='white';
    }
    showc1 = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${c1})`;
        document.getElementById('c1Text').style.color='green';
        document.getElementById('constructScreenShot').src=c1SS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="C1";
    }
    unshowc1 = () => {
        document.getElementById('c1Text').style.color='white';
    }
    showc2 = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${c2})`;
        document.getElementById('c2Text').style.color='green';
        document.getElementById('constructScreenShot').src=c2SS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="C2";
    }
    unshowc2 = () => {
        document.getElementById('c2Text').style.color='white';
    }
    showc3 = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${c3})`;
        document.getElementById('c3Text').style.color='green';
        document.getElementById('constructScreenShot').src=c3SS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="C3";
    }
    unshowc3 = () => {
        document.getElementById('c3Text').style.color='white';
    }
    showclosedBarrels = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${closedBarrels})`;
        document.getElementById('closedBarrelsText').style.color='green';
        document.getElementById('constructScreenShot').src=closedBarrelsSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Closed Barrels";
    }
    unshowclosedBarrels = () => {
        document.getElementById('closedBarrelsText').style.color='white';
    }
    showclosedBR = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${closedBR})`;
        document.getElementById('closedBRText').style.color='green';
        document.getElementById('constructScreenShot').src=closedBRSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Closed BR";
    }
    unshowclosedBR = () => {
        document.getElementById('closedBRText').style.color='white';
    }
    showclosedBubble = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${closedBubble})`;
        document.getElementById('closedBubbleText').style.color='green';
        document.getElementById('constructScreenShot').src=closedBubbleSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Closed Bubble";
    }
    unshowclosedBubble = () => {
        document.getElementById('closedBubbleText').style.color='white';
    }
    showclosedSkinny = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${closedSkinny})`;
        document.getElementById('closedSkinnyText').style.color='green';
        document.getElementById('constructScreenShot').src=closedSkinnySS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Closed Skinny";
    }
    unshowclosedSkinny = () => {
        document.getElementById('closedSkinnyText').style.color='white';
    }
    showclosedStreet = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${closedStreet})`;
        document.getElementById('closedStreetText').style.color='green';
        document.getElementById('constructScreenShot').src=closedStreetSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Closed Street";
    }
    unshowclosedStreet = () => {
        document.getElementById('closedStreetText').style.color='white';
    }
    showclosedSwordLeg = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${closedSwordLeg})`;
        document.getElementById('closedSwordLegText').style.color='green';
        document.getElementById('constructScreenShot').src=closedSwordLegSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Closed Sword Leg";
    }
    unshowclosedSwordLeg = () => {
        document.getElementById('closedSwordLegText').style.color='white';
    }
    showdonut = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${donut})`;
        document.getElementById('donutText').style.color='green';
        document.getElementById('constructScreenShot').src=donutSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Donut";
    }
    unshowdonut = () => {
        document.getElementById('donutText').style.color='white';
    }
    showlaser = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${laser})`;
        document.getElementById('laserText').style.color='green';
        document.getElementById('constructScreenShot').src=laserSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Laser";
    }
    unshowlaser = () => {
        document.getElementById('laserText').style.color='white';
    }
    showlobby = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${lobby})`;
        document.getElementById('lobbyText').style.color='green';
        document.getElementById('constructScreenShot').src=lobbySS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Lobby";
    }
    unshowlobby = () => {
        document.getElementById('lobbyText').style.color='white';
    }
    showmainRamp = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${mainRamp})`;
        document.getElementById('mainRampText').style.color='green';
        document.getElementById('constructScreenShot').src=mainRampSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Main Ramp";
    }
    unshowmainRamp = () => {
        document.getElementById('mainRampText').style.color='white';
    }
    showmidGold = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${midGold})`;
        document.getElementById('midGoldText').style.color='green';
        document.getElementById('constructScreenShot').src=midGoldSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Mid Gold";
    }
    unshowmidGold = () => {
        document.getElementById('midGoldText').style.color='white';
    }
    showmidGoldRamp = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${midGoldRamp})`;
        document.getElementById('midGoldRampText').style.color='green';
        document.getElementById('constructScreenShot').src=midGoldRampSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Mid Gold Ramp";
    }
    unshowmidGoldRamp = () => {
        document.getElementById('midGoldRampText').style.color='white';
    }
    showo1 = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${o1})`;
        document.getElementById('o1Text').style.color='green';
        document.getElementById('constructScreenShot').src=o1SS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="O1";
    }
    unshowo1 = () => {
        document.getElementById('o1Text').style.color='white';
    }
    showo2 = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${o2})`;
        document.getElementById('o2Text').style.color='green';
        document.getElementById('constructScreenShot').src=o2SS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="O2";
    }
    unshowo2 = () => {
        document.getElementById('o2Text').style.color='white';
    }
    showo3 = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${o3})`;
        document.getElementById('o3Text').style.color='green';
        document.getElementById('constructScreenShot').src=o3SS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="O3";
    }
    unshowo3 = () => {
        document.getElementById('o3Text').style.color='white';
    }
    showopenBarrel = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${openBarrel})`;
        document.getElementById('openBarrelText').style.color='green';
        document.getElementById('constructScreenShot').src=openBarrelSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Open Barrel";
    }
    unshowopenBarrel = () => {
        document.getElementById('openBarrelText').style.color='white';
    }
    showopenBR = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${openBR})`;
        document.getElementById('openBRText').style.color='green';
        document.getElementById('constructScreenShot').src=openBRSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Open BR";
    }
    unshowopenBR = () => {
        document.getElementById('openBRText').style.color='white';
    }
    showopenBubble = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${openBubble})`;
        document.getElementById('openBubbleText').style.color='green';
        document.getElementById('constructScreenShot').src=openBubbleSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Open Bubble";
    }
    unshowopenBubble = () => {
        document.getElementById('openBubbleText').style.color='white';
    }
    showopenRamp = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${openRamp})`;
        document.getElementById('openRampText').style.color='green';
        document.getElementById('constructScreenShot').src=openRampSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Open Ramp";
    }
    unshowopenRamp = () => {
        document.getElementById('openRampText').style.color='white';
    }
    showopenSkinny = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${openSkinny})`;
        document.getElementById('openSkinnyText').style.color='green';
        document.getElementById('constructScreenShot').src=openSkinnySS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Open Skinny";
    }
    unshowopenSkinny = () => {
        document.getElementById('openSkinnyText').style.color='white';
    }
    showopenStreet = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${openStreet})`;
        document.getElementById('openStreetText').style.color='green';
        document.getElementById('constructScreenShot').src=openStreetSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Open Street";
    }
    unshowopenStreet = () => {
        document.getElementById('openStreetText').style.color='white';
    }
    showopenSwordLeg = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${openSwordLeg})`;
        document.getElementById('openSwordLegText').style.color='green';
        document.getElementById('constructScreenShot').src=openSwordLegSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Open Sword Leg";
    }
    unshowopenSwordLeg = () => {
        document.getElementById('openSwordLegText').style.color='white';
    }
    showr1 = () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${r1})`;
        document.getElementById('r1Text').style.color='green';
        document.getElementById('constructScreenShot').src=r1SS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="R1";
    }
    unshowr1 = () => {
        document.getElementById('r1Text').style.color='white';
    }
    showr2= () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${r2})`;
        document.getElementById('r2Text').style.color='green';
        document.getElementById('constructScreenShot').src=r2SS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="R2";
    }
    unshowr2 = () => {
        document.getElementById('r2Text').style.color='white';
    }
    showriver= () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${river})`;
        document.getElementById('riverText').style.color='green';
        document.getElementById('constructScreenShot').src=riverSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="River";
    }
    unshowriver = () => {
        document.getElementById('riverText').style.color='white';
    }
    showsnipe= () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${snipe})`;
        document.getElementById('snipeText').style.color='green';
        document.getElementById('constructScreenShot').src=snipeSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Snipe";
    }
    unshowsnipe = () => {
        document.getElementById('snipeText').style.color='white';
    }
    showsword= () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${sword})`;
        document.getElementById('swordText').style.color='green';
        document.getElementById('constructScreenShot').src=swordSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Sword";
    }
    unshowsword = () => {
        document.getElementById('swordText').style.color='white';
    }
    showtopGold= () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${topGold})`;
        document.getElementById('topGoldoText').style.color='green';
        document.getElementById('constructScreenShot').src=topGoldSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Top Gold";
    }
    unshowtopGold = () => {
        document.getElementById('topGoldoText').style.color='white';
    }
    showunderGlass= () => {
        document.getElementById('constructMap').style.backgroundImage=`url(${underGlass})`;
        document.getElementById('undGlassText').style.color='green';
        document.getElementById('constructScreenShot').src=underGlassSS;
        document.getElementById('constructInGamePicText').style.color="white";
        document.getElementById('constructInGamePicText').innerHTML="Under Glass";
    }
    unshowunderGlass = () => {
        document.getElementById('undGlassText').style.color='white';
    } 
    render(){
        return(
            <div className="constructFullGrid">
                <h1 className="mapTitleConstruct">Construct</h1>
                <div className="calloutsList" id="constructCallouts">
                    <p id="backGoldRampText" onMouseOver={this.showbackGoldRamp} onMouseOut={() => {this.resetBackground(); this.unshowbackGoldRamp()}}>Back Gold Ramp</p>
                    <p id="botGoldText" onMouseOver={this.showbottomGold} onMouseOut={() => {this.resetBackground(); this.unshowbottomGold()}}>Bottom Gold</p>
                    <p id="c1Text" onMouseOver={this.showc1} onMouseOut={() => {this.resetBackground(); this.unshowc1()}}>C1</p>
                    <p id="c2Text" onMouseOver={this.showc2} onMouseOut={() => {this.resetBackground(); this.unshowc2()}}>C2</p>
                    <p id="c3Text" onMouseOver={this.showc3} onMouseOut={() => {this.resetBackground(); this.unshowc3()}}>C3</p>
                    <p id="closedBarrelsText" onMouseOver={this.showclosedBarrels} onMouseOut={() => {this.resetBackground(); this.unshowclosedBarrels()}}>Closed Barrels</p>
                    <p id="closedBRText" onMouseOver={this.showclosedBR} onMouseOut={() => {this.resetBackground(); this.unshowclosedBR()}}>Closed BR</p>
                    <p id="closedBubbleText" onMouseOver={this.showclosedBubble} onMouseOut={() => {this.resetBackground(); this.unshowclosedBubble()}}>Closed Bubble</p>
                    <p id="closedSkinnyText" onMouseOver={this.showclosedSkinny} onMouseOut={() => {this.resetBackground(); this.unshowclosedSkinny()}}>Closed Skinny</p>
                    <p id="closedStreetText" onMouseOver={this.showclosedStreet} onMouseOut={() => {this.resetBackground(); this.unshowclosedStreet()}}>Closed Street</p>
                    <p id="closedSwordLegText" onMouseOver={this.showclosedSwordLeg} onMouseOut={() => {this.resetBackground(); this.unshowclosedSwordLeg()}}>Closed Sword Leg</p>
                    <p id="donutText" onMouseOver={this.showdonut} onMouseOut={() => {this.resetBackground(); this.unshowdonut()}}>Donut</p>
                    <p id="laserText" onMouseOver={this.showlaser} onMouseOut={() => {this.resetBackground(); this.unshowlaser()}}>Laser</p>
                    <p id="lobbyText" onMouseOver={this.showlobby} onMouseOut={() => {this.resetBackground(); this.unshowlobby()}}>Lobby</p>
                    <p id="mainRampText" onMouseOver={this.showmainRamp} onMouseOut={() => {this.resetBackground(); this.unshowmainRamp()}}>Main Ramp</p>
                    <p id="midGoldText" onMouseOver={this.showmidGold} onMouseOut={() => {this.resetBackground(); this.unshowmidGold()}}>Mid Gold</p>
                    <p id="midGoldRampText" onMouseOver={this.showmidGoldRamp} onMouseOut={() => {this.resetBackground(); this.unshowmidGoldRamp()}}>Mid Gold Ramp</p>
                    <p id="o1Text" onMouseOver={this.showo1} onMouseOut={() => {this.resetBackground(); this.unshowo1()}}>O1</p>
                    <p id="o2Text" onMouseOver={this.showo2} onMouseOut={() => {this.resetBackground(); this.unshowo2()}}>O2</p>
                    <p id="o3Text" onMouseOver={this.showo3} onMouseOut={() => {this.resetBackground(); this.unshowo3()}}>O3</p>
                    <p id="openBarrelText" onMouseOver={this.showopenBarrel} onMouseOut={() => {this.resetBackground(); this.unshowopenBarrel()}}>Open Barrels</p>
                    <p id="openBRText" onMouseOver={this.showopenBR} onMouseOut={() => {this.resetBackground(); this.unshowopenBR()}}>Open BR</p>
                    <p id="openBubbleText" onMouseOver={this.showopenBubble} onMouseOut={() => {this.resetBackground(); this.unshowopenBubble()}}>Open Bubble</p>
                    <p id="openRampText" onMouseOver={this.showopenRamp} onMouseOut={() => {this.resetBackground(); this.unshowopenRamp()}}>Open Ramp</p>
                    <p id="openSkinnyText" onMouseOver={this.showopenSkinny} onMouseOut={() => {this.resetBackground(); this.unshowopenSkinny()}}>Open Skinny</p>
                    <p id="openStreetText" onMouseOver={this.showopenStreet} onMouseOut={() => {this.resetBackground(); this.unshowopenStreet()}}>Open Street</p>
                    <p id="openSwordLegText" onMouseOver={this.showopenSwordLeg} onMouseOut={() => {this.resetBackground(); this.unshowopenSwordLeg()}}>Open Sword Leg</p>
                    <p id="r1Text" onMouseOver={this.showr1} onMouseOut={() => {this.resetBackground(); this.unshowr1()}}>R1</p>
                    <p id="r2Text" onMouseOver={this.showr2} onMouseOut={() => {this.resetBackground(); this.unshowr2()}}>R2</p>
                    <p id="riverText" onMouseOver={this.showriver} onMouseOut={() => {this.resetBackground(); this.unshowriver()}}>River</p>
                    <p id="snipeText" onMouseOver={this.showsnipe} onMouseOut={() => {this.resetBackground(); this.unshowsnipe()}}>Snipe</p>
                    <p id="swordText" onMouseOver={this.showsword} onMouseOut={() => {this.resetBackground(); this.unshowsword()}}>Sword</p>
                    <p id="topGoldoText" onMouseOver={this.showtopGold} onMouseOut={() => {this.resetBackground(); this.unshowtopGold()}}>Top Gold</p>
                    <p id="undGlassText" onMouseOver={this.showunderGlass} onMouseOut={() => {this.resetBackground(); this.unshowunderGlass()}}>Under Glass</p>     
                </div>
                <div id="constructMap">
                    <div id="backGoldRamp" onMouseOver={this.showbackGoldRamp} onMouseOut={() => {this.resetBackground(); this.unshowbackGoldRamp()}}>
                        <img src={backGoldRamp} className='preloadImage'></img>
                    </div>
                    <div id="bottomGoldo" onMouseOver={this.showbottomGold} onMouseOut={() => {this.resetBackground(); this.unshowbottomGold()}}>
                        <img src={bottomGold} className='preloadImage'></img>
                    </div>
                    <div id="c1One" onMouseOver={this.showc1} onMouseOut={() => {this.resetBackground(); this.unshowc1()}}>
                        <img src={c1} className='preloadImage'></img>
                    </div>
                    <div id="c1Two" onMouseOver={this.showc1} onMouseOut={() => {this.resetBackground(); this.unshowc1()}}></div>
                    <div id="c2" onMouseOver={this.showc2} onMouseOut={() => {this.resetBackground(); this.unshowc2()}}>
                        <img src={c2} className='preloadImage'></img>
                    </div>
                    <div id="c3One" onMouseOver={this.showc3} onMouseOut={() => {this.resetBackground(); this.unshowc3()}}>
                        <img src={c3} className='preloadImage'></img>
                    </div>
                    <div id="c3Two" onMouseOver={this.showc3} onMouseOut={() => {this.resetBackground(); this.unshowc3()}}></div>
                    <div id="c3Three" onMouseOver={this.showc3} onMouseOut={() => {this.resetBackground(); this.unshowc3()}}></div>
                    <div id="closedBarrelsOne" onMouseOver={this.showclosedBarrels} onMouseOut={() => {this.resetBackground(); this.unshowclosedBarrels()}}>
                        <img src={closedBarrels} className='preloadImage'></img>
                    </div>
                    <div id="closedBarrelsTwo" onMouseOver={this.showclosedBarrels} onMouseOut={() => {this.resetBackground(); this.unshowclosedBarrels()}}></div>
                    <div id="closedBarrelsThree" onMouseOver={this.showclosedBarrels} onMouseOut={() => {this.resetBackground(); this.unshowclosedBarrels()}}></div>
                    <div id="closedBR" onMouseOver={this.showclosedBR} onMouseOut={() => {this.resetBackground(); this.unshowclosedBR()}}>
                        <img src={closedBR} className='preloadImage'></img>
                    </div>
                    <div id="closedBubble" onMouseOver={this.showclosedBubble} onMouseOut={() => {this.resetBackground(); this.unshowclosedBubble()}}>
                        <img src={closedBubble} className='preloadImage'></img>
                    </div>
                    <div id="closedSkinny" onMouseOver={this.showclosedSkinny} onMouseOut={() => {this.resetBackground(); this.unshowclosedSkinny()}}>
                        <img src={closedSkinny} className='preloadImage'></img>
                    </div>
                    <div id="closedStreet" onMouseOver={this.showclosedStreet} onMouseOut={() => {this.resetBackground(); this.unshowclosedStreet()}}>
                        <img src={closedStreet} className='preloadImage'></img>
                    </div>
                    <div id="closedSwordLeg" onMouseOver={this.showclosedSwordLeg} onMouseOut={() => {this.resetBackground(); this.unshowclosedSwordLeg()}}>
                        <img src={closedSwordLeg} className='preloadImage'></img>
                    </div>
                    <div id="donut" onMouseOver={this.showdonut} onMouseOut={() => {this.resetBackground(); this.unshowdonut()}}>
                        <img src={donut} className='preloadImage'></img>
                    </div>
                    <div id="laserOne" onMouseOver={this.showlaser} onMouseOut={() => {this.resetBackground(); this.unshowlaser()}}>
                        <img src={laser} className='preloadImage'></img>
                    </div>
                    <div id="laserTwo" onMouseOver={this.showlaser} onMouseOut={() => {this.resetBackground(); this.unshowlaser()}}></div>
                    <div id="lobby" onMouseOver={this.showlobby} onMouseOut={() => {this.resetBackground(); this.unshowlobby()}}>
                        <img src={lobby} className='preloadImage'></img>
                    </div>
                    <div id="mainRampOne" onMouseOver={this.showmainRamp} onMouseOut={() => {this.resetBackground(); this.unshowmainRamp()}}>
                        <img src={mainRamp} className='preloadImage'></img>
                    </div>
                    <div id="mainRampTwo" onMouseOver={this.showmainRamp} onMouseOut={() => {this.resetBackground(); this.unshowmainRamp()}}></div>
                    <div id="midGold" onMouseOver={this.showmidGold} onMouseOut={() => {this.resetBackground(); this.unshowmidGold()}}>
                        <img src={midGold} className='preloadImage'></img>
                    </div>
                    <div id="midGoldRamp" onMouseOver={this.showmidGoldRamp} onMouseOut={() => {this.resetBackground(); this.unshowmidGoldRamp()}}>
                        <img src={midGoldRamp} className='preloadImage'></img>
                    </div>
                    <div id="o1One" onMouseOver={this.showo1} onMouseOut={() => {this.resetBackground(); this.unshowo1()}}>
                        <img src={o1} className='preloadImage'></img>
                    </div>
                    <div id="o1Two" onMouseOver={this.showo1} onMouseOut={() => {this.resetBackground(); this.unshowo1()}}></div>
                    <div id="o2" onMouseOver={this.showo2} onMouseOut={() => {this.resetBackground(); this.unshowo2()}}>
                        <img src={o2} className='preloadImage'></img>
                    </div>
                    <div id="o3One" onMouseOver={this.showo3} onMouseOut={() => {this.resetBackground(); this.unshowo3()}}>
                        <img src={o3} className='preloadImage'></img>
                    </div>
                    <div id="o3Two" onMouseOver={this.showo3} onMouseOut={() => {this.resetBackground(); this.unshowo3()}}></div>
                    <div id="o3Three" onMouseOver={this.showo3} onMouseOut={() => {this.resetBackground(); this.unshowo3()}}></div>
                    <div id="openBarrelOne" onMouseOver={this.showopenBarrel} onMouseOut={() => {this.resetBackground(); this.unshowopenBarrel()}}>
                        <img src={openBarrel} className='preloadImage'></img>
                    </div>
                    <div id="openBarrelTwo" onMouseOver={this.showopenBarrel} onMouseOut={() => {this.resetBackground(); this.unshowopenBarrel()}}></div>
                    <div id="openBarrelThree" onMouseOver={this.showopenBarrel} onMouseOut={() => {this.resetBackground(); this.unshowopenBarrel()}}></div>
                    <div id="openBarrelFour" onMouseOver={this.showopenBarrel} onMouseOut={() => {this.resetBackground(); this.unshowopenBarrel()}}></div>
                    <div id="openBR" onMouseOver={this.showopenBR} onMouseOut={() => {this.resetBackground(); this.unshowopenBR()}}>
                        <img src={openBR} className='preloadImage'></img>
                    </div>
                    <div id="openBubble" onMouseOver={this.showopenBubble} onMouseOut={() => {this.resetBackground(); this.unshowopenBubble()}}>
                        <img src={openBubble} className='preloadImage'></img>
                    </div>
                    <div id="openRampOne" onMouseOver={this.showopenRamp} onMouseOut={() => {this.resetBackground(); this.unshowopenRamp()}}>
                        <img src={openRamp} className='preloadImage'></img>
                    </div>
                    <div id="openRampTwo" onMouseOver={this.showopenRamp} onMouseOut={() => {this.resetBackground(); this.unshowopenRamp()}}></div>
                    <div id="openRampThree" onMouseOver={this.showopenRamp} onMouseOut={() => {this.resetBackground(); this.unshowopenRamp()}}></div>
                    <div id="openRampFour" onMouseOver={this.showopenRamp} onMouseOut={() => {this.resetBackground(); this.unshowopenRamp()}}></div>
                    <div id="openRampFive" onMouseOver={this.showopenRamp} onMouseOut={() => {this.resetBackground(); this.unshowopenRamp()}}></div>
                    <div id="openRampSix" onMouseOver={this.showopenRamp} onMouseOut={() => {this.resetBackground(); this.unshowopenRamp()}}></div>
                    <div id="openRampSeven" onMouseOver={this.showopenRamp} onMouseOut={() => {this.resetBackground(); this.unshowopenRamp()}}></div>
                    <div id="openRampEight" onMouseOver={this.showopenRamp} onMouseOut={() => {this.resetBackground(); this.unshowopenRamp()}}></div>
                    <div id="openSkinny" onMouseOver={this.showopenSkinny} onMouseOut={() => {this.resetBackground(); this.unshowopenSkinny()}}>
                        <img src={openSkinny} className='preloadImage'></img>
                    </div>
                    <div id="openStreetOne" onMouseOver={this.showopenStreet} onMouseOut={() => {this.resetBackground(); this.unshowopenStreet()}}>
                        <img src={openStreet} className='preloadImage'></img>
                    </div>
                    <div id="openStreetTwo" onMouseOver={this.showopenStreet} onMouseOut={() => {this.resetBackground(); this.unshowopenStreet()}}></div>
                    <div id="openStreetThree" onMouseOver={this.showopenStreet} onMouseOut={() => {this.resetBackground(); this.unshowopenStreet()}}></div>
                    <div id="openStreetFour" onMouseOver={this.showopenStreet} onMouseOut={() => {this.resetBackground(); this.unshowopenStreet()}}></div>
                    <div id="openSwordLeg" onMouseOver={this.showopenSwordLeg} onMouseOut={() => {this.resetBackground(); this.unshowopenSwordLeg()}}>
                        <img src={openSwordLeg} className='preloadImage'></img>
                    </div>
                    <div id="r1One" onMouseOver={this.showr1} onMouseOut={() => {this.resetBackground(); this.unshowr1()}}>
                        <img src={r1} className='preloadImage'></img>
                    </div>
                    <div id="r1Two" onMouseOver={this.showr1} onMouseOut={() => {this.resetBackground(); this.unshowr1()}}></div>
                    <div id="r1Three" onMouseOver={this.showr1} onMouseOut={() => {this.resetBackground(); this.unshowr1()}}></div>
                    <div id="r1Four" onMouseOver={this.showr1} onMouseOut={() => {this.resetBackground(); this.unshowr1()}}></div>
                    <div id="r2" onMouseOver={this.showr2} onMouseOut={() => {this.resetBackground(); this.unshowr2()}}>
                        <img src={r2} className='preloadImage'></img>
                    </div>
                    <div id="riverOne" onMouseOver={this.showriver} onMouseOut={() => {this.resetBackground(); this.unshowriver()}}>
                        <img src={river} className='preloadImage'></img>
                    </div>
                    <div id="riverTwo" onMouseOver={this.showriver} onMouseOut={() => {this.resetBackground(); this.unshowriver()}}></div>
                    <div id="riverThree" onMouseOver={this.showriver} onMouseOut={() => {this.resetBackground(); this.unshowriver()}}></div>
                    <div id="riverFour" onMouseOver={this.showriver} onMouseOut={() => {this.resetBackground(); this.unshowriver()}}></div>
                    <div id="riverFive" onMouseOver={this.showriver} onMouseOut={() => {this.resetBackground(); this.unshowriver()}}></div>
                    <div id="riverSix" onMouseOver={this.showriver} onMouseOut={() => {this.resetBackground(); this.unshowriver()}}></div>
                    <div id="riverSeven" onMouseOver={this.showriver} onMouseOut={() => {this.resetBackground(); this.unshowriver()}}></div>
                    <div id="snipe" onMouseOver={this.showsnipe} onMouseOut={() => {this.resetBackground(); this.unshowsnipe()}}>
                        <img src={snipe} className='preloadImage'></img>
                    </div>
                    <div id="sword" onMouseOver={this.showsword} onMouseOut={() => {this.resetBackground(); this.unshowsword()}}>
                        <img src={sword} className='preloadImage'></img>
                    </div>
                    <div id="topGoldo" onMouseOver={this.showtopGold} onMouseOut={() => {this.resetBackground(); this.unshowtopGold()}}>
                        <img src={topGold} className='preloadImage'></img>
                    </div>
                    <div id="underGlassOne" onMouseOver={this.showunderGlass} onMouseOut={() => {this.resetBackground(); this.unshowunderGlass()}}>
                        <img src={underGlass} className='preloadImage'></img>
                    </div>
                    <div id="underGlassTwo" onMouseOver={this.showunderGlass} onMouseOut={() => {this.resetBackground(); this.unshowunderGlass()}}></div>
                </div>
                <div className="inGamePic">
                    <h2 id="constructInGamePicText" class="inGamePicText"></h2>
                    <img id="constructScreenShot"></img>
                </div>
            </div>
        );
    }
}
export default Construct;