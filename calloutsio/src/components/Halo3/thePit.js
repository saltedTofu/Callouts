import React from 'react';
import thePitBlank from './BlueprintPics/thePitBPs/ThePitBlank.png';
import firstBR from './BlueprintPics/thePitBPs/1stBR.png';
import secondBR from './BlueprintPics/thePitBPs/2ndBR.png';
import Assault from './BlueprintPics/thePitBPs/Assault.png';
import backRamp from './BlueprintPics/thePitBPs/backRamp.png';
import courtyard from './BlueprintPics/thePitBPs/courtyard.png';
import customOS from './BlueprintPics/thePitBPs/customOS.png';
import cuts from './BlueprintPics/thePitBPs/cuts.png';
import flag from './BlueprintPics/thePitBPs/flag.png';
import greenBox from './BlueprintPics/thePitBPs/greenBox.png';
import greenHall from './BlueprintPics/thePitBPs/greenHall.png';
import jumpUp from './BlueprintPics/thePitBPs/jumpUp.png';
import longHallCamo from './BlueprintPics/thePitBPs/longHallCamo.png';
import mauler from './BlueprintPics/thePitBPs/mauler.png';
import midBridge from './BlueprintPics/thePitBPs/midBridge.png';
import needler from './BlueprintPics/thePitBPs/needler.png';
import needlerPit from './BlueprintPics/thePitBPs/needlerPit.png';
import needlerRamp from './BlueprintPics/thePitBPs/needlerRamp.png';
import pit from './BlueprintPics/thePitBPs/pit.png';
import pitRamp from './BlueprintPics/thePitBPs/pitRamp.png';
import platform from './BlueprintPics/thePitBPs/platform.png';
import rockets from './BlueprintPics/thePitBPs/rockets.png';
import runway from './BlueprintPics/thePitBPs/runway.png';
import s1 from './BlueprintPics/thePitBPs/s1.png';
import s2 from './BlueprintPics/thePitBPs/s2.png';
import snipeBridge from './BlueprintPics/thePitBPs/snipeBridge.png';
import snipePocket from './BlueprintPics/thePitBPs/snipePocket.png';
import street from './BlueprintPics/thePitBPs/street.png';
import sword from './BlueprintPics/thePitBPs/sword.png';
import swordRamp from './BlueprintPics/thePitBPs/swordRamp.png';
import swordWindow from './BlueprintPics/thePitBPs/swordWindow.png';
import training from './BlueprintPics/thePitBPs/training.png';
import trainingPocket from './BlueprintPics/thePitBPs/trainingPocket.png';
import trainingRamp from './BlueprintPics/thePitBPs/trainingRamp.png';
import walshy from './BlueprintPics/thePitBPs/walshy.png';

class ThePit extends React.Component{
    loadAll = () => {
        document.getElementById('thePitMap').style.backgroundImage=`url(${firstBR})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${secondBR})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${Assault})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${backRamp})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${courtyard})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${customOS})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${cuts})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${flag})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${greenBox})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${greenHall})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${jumpUp})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${longHallCamo})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${mauler})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${midBridge})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${needler})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${needlerPit})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${needlerRamp})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${pit})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${pitRamp})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${platform})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${rockets})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${runway})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${s1})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${s2})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${snipeBridge})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${snipePocket})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${street})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${sword})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${swordRamp})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${swordWindow})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${training})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${trainingPocket})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${trainingRamp})`;
        document.getElementById('thePitMap').style.backgroundImage=`url(${walshy})`;
    }
    showfirstBR = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${firstBR})`;
        document.getElementById('firstBRText').style.color='green';
    }
    unshowfirstBR = () => {
        document.getElementById('firstBRText').style.color='white';
    }
    showsecondBR = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${secondBR})`;
        document.getElementById('secondBRText').style.color='green';
    }
    unshowsecondBR = () => {
        document.getElementById('secondBRText').style.color='white';
    }
    showAssault = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${Assault})`;
        document.getElementById('AssaultText').style.color='green';
    }
    unshowAssault = () => {
        document.getElementById('AssaultText').style.color='white';
    }
    showbackRamp = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${backRamp})`;
        document.getElementById('backRampText').style.color='green';
    }
    unshowbackRamp = () => {
        document.getElementById('backRampText').style.color='white';
    }
    showcourtyard = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${courtyard})`;
        document.getElementById('courtyardText').style.color='green';
    }
    unshowcourtyard = () => {
        document.getElementById('courtyardText').style.color='white';
    }
    showcustomOS = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${customOS})`;
        document.getElementById('customOSText').style.color='green';
    }
    unshowcustomOS = () => {
        document.getElementById('customOSText').style.color='white';
    }
    showcuts = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${cuts})`;
        document.getElementById('cutsText').style.color='green';
    }
    unshowcuts = () => {
        document.getElementById('cutsText').style.color='white';
    }
    showflag = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${flag})`;
        document.getElementById('flagTextPit').style.color='green';
    }
    unshowflag = () => {
        document.getElementById('flagTextPit').style.color='white';
    }
    showgreenBox = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${greenBox})`;
        document.getElementById('greenBoxText').style.color='green';
    }
    unshowgreenBox = () => {
        document.getElementById('greenBoxText').style.color='white';
    }
    showgreenHall = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${greenHall})`;
        document.getElementById('greenHallText').style.color='green';
    }
    unshowgreenHall = () => {
        document.getElementById('greenHallText').style.color='white';
    }
    showjumpUp = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${jumpUp})`;
        document.getElementById('jumpUpText').style.color='green';
    }
    unshowjumpUp = () => {
        document.getElementById('jumpUpText').style.color='white';
    }
    showlongHallCamo = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${longHallCamo})`;
        document.getElementById('longHallCamoText').style.color='green';
    }
    unshowlongHallCamo = () => {
        document.getElementById('longHallCamoText').style.color='white';
    }
    showmauler = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${mauler})`;
        document.getElementById('maulerText').style.color='green';
    }
    unshowmauler = () => {
        document.getElementById('maulerText').style.color='white';
    }
    showmidBridge = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${midBridge})`;
        document.getElementById('midBridgeText').style.color='green';
    }
    unshowmidBridge = () => {
        document.getElementById('midBridgeText').style.color='white';
    }
    showneedler = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${needler})`;
        document.getElementById('needlerText').style.color='green';
    }
    unshowneedler = () => {
        document.getElementById('needlerText').style.color='white';
    }
    showneedlerPit = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${needlerPit})`;
        document.getElementById('needlerPitText').style.color='green';
    }
    unshowneedlerPit = () => {
        document.getElementById('needlerPitText').style.color='white';
    }
    showneedlerRamp = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${needlerRamp})`;
        document.getElementById('needlerRampText').style.color='green';
    }
    unshowneedlerRamp = () => {
        document.getElementById('needlerRampText').style.color='white';
    }
    showpit = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${pit})`;
        document.getElementById('pitText').style.color='green';
    }
    unshowpit = () => {
        document.getElementById('pitText').style.color='white';
    }
    showpitRamp = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${pitRamp})`;
        document.getElementById('pitRampText').style.color='green';
    }
    unshowpitRamp = () => {
        document.getElementById('pitRampText').style.color='white';
    }
    showplatform = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${platform})`;
        document.getElementById('platformText').style.color='green';
    }
    unshowplatform = () => {
        document.getElementById('platformText').style.color='white';
    }
    showrockets = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${rockets})`;
        document.getElementById('rocketsText').style.color='green';
    }
    unshowrockets = () => {
        document.getElementById('rocketsText').style.color='white';
    }
    showrunway = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${runway})`;
        document.getElementById('runwayText').style.color='green';
    }
    unshowrunway = () => {
        document.getElementById('runwayText').style.color='white';
    }
    shows1 = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${s1})`;
        document.getElementById('s1Text').style.color='green';
    }
    unshows1 = () => {
        document.getElementById('s1Text').style.color='white';
    }
    shows2 = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${s2})`;
        document.getElementById('s2Text').style.color='green';
    }
    unshows2 = () => {
        document.getElementById('s2Text').style.color='white';
    }
    showsnipeBridge = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${snipeBridge})`;
        document.getElementById('snipeBridgeText').style.color='green';
    }
    unshowsnipeBridge = () => {
        document.getElementById('snipeBridgeText').style.color='white';
    }
    showsnipePocket = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${snipePocket})`;
        document.getElementById('snipePocketText').style.color='green';
    }
    unshowsnipePocket = () => {
        document.getElementById('snipePocketText').style.color='white';
    }
    showstreet = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${street})`;
        document.getElementById('streetText').style.color='green';
    }
    unshowstreet = () => {
        document.getElementById('streetText').style.color='white';
    }
    showsword = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${sword})`;
        document.getElementById('swordTextPit').style.color='green';
    }
    unshowsword = () => {
        document.getElementById('swordTextPit').style.color='white';
    }
    showswordRamp = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${swordRamp})`;
        document.getElementById('swordRampText').style.color='green';
    }
    unshowswordRamp = () => {
        document.getElementById('swordRampText').style.color='white';
    }
    showswordWindow = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${swordWindow})`;
        document.getElementById('swordWindowText').style.color='green';
    }
    unshowswordWindow = () => {
        document.getElementById('swordWindowText').style.color='white';
    }
    showtraining = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${training})`;
        document.getElementById('trainingText').style.color='green';
    }
    unshowtraining = () => {
        document.getElementById('trainingText').style.color='white';
    }
    showtrainingPocket = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${trainingPocket})`;
        document.getElementById('trainingPocketText').style.color='green';
    }
    unshowtrainingPocket = () => {
        document.getElementById('trainingPocketText').style.color='white';
    }
    showtrainingRamp = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${trainingRamp})`;
        document.getElementById('trainingRampText').style.color='green';
    }
    unshowtrainingRamp = () => {
        document.getElementById('trainingRampText').style.color='white';
    }
    showwalshy = () => {
        this.loadAll();
        document.getElementById('thePitMap').style.backgroundImage=`url(${walshy})`;
        document.getElementById('walshyText').style.color='green';
    }
    unshowwalshy = () => {
        document.getElementById('walshyText').style.color='white';
    }
    resetBackground = () =>{
        document.getElementById('thePitMap').style.backgroundImage=`url(${thePitBlank})`;
    }
    render(){
        return(
            <div className="thePitFullGrid">
                <h1 className="mapTitleThePit">The Pit</h1>
                <div className="calloutsList" id="pitCallouts">
                    <p id="firstBRText" onMouseOver={this.showfirstBR} onMouseOut={() => {this.resetBackground(); this.unshowfirstBR()}}>1st Br</p>
                    <p id="secondBRText" onMouseOver={this.showsecondBR} onMouseOut={() => {this.resetBackground(); this.unshowsecondBR()}}>2nd Br</p>
                    <p id="AssaultText" onMouseOver={this.showAssault} onMouseOut={() => {this.resetBackground(); this.unshowAssault()}}>Assault</p>
                    <p id="backRampText" onMouseOver={this.showbackRamp} onMouseOut={() => {this.resetBackground(); this.unshowbackRamp()}}>Back Ramp</p>
                    <p id="courtyardText" onMouseOver={this.showcourtyard} onMouseOut={() => {this.resetBackground(); this.unshowcourtyard()}}>Courtyard</p>
                    <p id="customOSText" onMouseOver={this.showcustomOS} onMouseOut={() => {this.resetBackground(); this.unshowcustomOS()}}>Custom/OS</p>
                    <p id="cutsText" onMouseOver={this.showcuts} onMouseOut={() => {this.resetBackground(); this.unshowcuts()}}>Cuts</p>
                    <p id="flagTextPit" onMouseOver={this.showflag} onMouseOut={() => {this.resetBackground(); this.unshowflag()}}>Flag</p>
                    <p id="greenBoxText" onMouseOver={this.showgreenBox} onMouseOut={() => {this.resetBackground(); this.unshowgreenBox()}}>Green Box</p>
                    <p id="greenHallText" onMouseOver={this.showgreenHall} onMouseOut={() => {this.resetBackground(); this.unshowgreenHall()}}>Green Hall</p>
                    <p id="jumpUpText" onMouseOver={this.showjumpUp} onMouseOut={() => {this.resetBackground(); this.unshowjumpUp()}}>Jump Up</p>
                    <p id="longHallCamoText" onMouseOver={this.showlongHallCamo} onMouseOut={() => {this.resetBackground(); this.unshowlongHallCamo()}}>Long Hall/Camo</p>
                    <p id="midBridgeText" onMouseOver={this.showmidBridge} onMouseOut={() => {this.resetBackground(); this.unshowmidBridge()}}>Mid Bridge</p>
                    <p id="maulerText" onMouseOver={this.showmauler} onMouseOut={() => {this.resetBackground(); this.unshowmauler()}}>Mauler</p>
                    <p id="needlerText" onMouseOver={this.showneedler} onMouseOut={() => {this.resetBackground(); this.unshowneedler()}}>Needler</p>
                    <p id="needlerPitText" onMouseOver={this.showneedlerPit} onMouseOut={() => {this.resetBackground(); this.unshowneedlerPit()}}>Needler Pit</p>
                    <p id="needlerRampText" onMouseOver={this.showneedlerRamp} onMouseOut={() => {this.resetBackground(); this.unshowneedlerRamp()}}>Needler Ramp</p>
                    <p id="pitText" onMouseOver={this.showpit} onMouseOut={() => {this.resetBackground(); this.unshowpit()}}>Pit</p>
                    <p id="pitRampText" onMouseOver={this.showpitRamp} onMouseOut={() => {this.resetBackground(); this.unshowpitRamp()}}>Pit Ramp</p>
                    <p id="platformText" onMouseOver={this.showplatform} onMouseOut={() => {this.resetBackground(); this.unshowplatform()}}>Platform</p>
                    <p id="rocketsText" onMouseOver={this.showrockets} onMouseOut={() => {this.resetBackground(); this.unshowrockets()}}>Rockets</p>
                    <p id="runwayText" onMouseOver={this.showrunway} onMouseOut={() => {this.resetBackground(); this.unshowrunway()}}>Runway</p>
                    <p id="snipeBridgeText" onMouseOver={this.showsnipeBridge} onMouseOut={() => {this.resetBackground(); this.unshowsnipeBridge()}}>Snipe Bridge</p>
                    <p id="snipePocketText" onMouseOver={this.showsnipePocket} onMouseOut={() => {this.resetBackground(); this.unshowsnipePocket()}}>Snipe Pocket</p>
                    <p id="streetText" onMouseOver={this.showstreet} onMouseOut={() => {this.resetBackground(); this.unshowstreet()}}>Street</p>
                    <p id="swordTextPit" onMouseOver={this.showsword} onMouseOut={() => {this.resetBackground(); this.unshowsword()}}>Sword</p>
                    <p id="swordRampText" onMouseOver={this.showswordRamp} onMouseOut={() => {this.resetBackground(); this.unshowswordRamp()}}>Sword Ramp</p>
                    <p id="swordWindowText" onMouseOver={this.showswordWindow} onMouseOut={() => {this.resetBackground(); this.unshowswordWindow()}}>Sword Window</p>
                    <p id="s1Text" onMouseOver={this.shows1} onMouseOut={() => {this.resetBackground(); this.unshows1()}}>S1</p>
                    <p id="s2Text" onMouseOver={this.shows2} onMouseOut={() => {this.resetBackground(); this.unshows2()}}>S2</p>
                    <p id="trainingText" onMouseOver={this.showtraining} onMouseOut={() => {this.resetBackground(); this.unshowtraining()}}>Training</p>
                    <p id="trainingRampText" onMouseOver={this.showtrainingRamp} onMouseOut={() => {this.resetBackground(); this.unshowtrainingRamp()}}>Training Ramp</p>
                    <p id="trainingPocketText" onMouseOver={this.showtrainingPocket} onMouseOut={() => {this.resetBackground(); this.unshowtrainingPocket()}}>Training Pocket</p>
                    <p id="walshyText" onMouseOver={this.showwalshy} onMouseOut={() => {this.resetBackground(); this.unshowwalshy()}}>Walshy</p>
                </div>
                <div id="thePitMap">
                    <div id='firstBRLeft' onMouseOver={this.showfirstBR} onMouseOut={() => {this.resetBackground(); this.unshowfirstBR()}}>
                        <img src={firstBR} className='preloadImage'></img>
                    </div>
                    <div id='secondBRLeft' onMouseOver={this.showsecondBR} onMouseOut={() => {this.resetBackground(); this.unshowsecondBR()}}>
                        <img src={secondBR} className='preloadImage'></img>
                    </div>
                    <div id='secondBRLeftTwo' onMouseOver={this.showsecondBR} onMouseOut={() => {this.resetBackground(); this.unshowsecondBR()}}>
                        <img src={secondBR} className='preloadImage'></img>
                    </div>
                    <div id='assaultLeft' onMouseOver={this.showAssault} onMouseOut={() => {this.resetBackground(); this.unshowAssault()}}>
                        <img src={Assault} className='preloadImage'></img>
                    </div>
                    <div id='backRampLeft' onMouseOver={this.showbackRamp} onMouseOut={() => {this.resetBackground(); this.unshowbackRamp()}}>
                        <img src={backRamp} className='preloadImage'></img>
                    </div>
                    <div id='courtyardLeft' onMouseOver={this.showcourtyard} onMouseOut={() => {this.resetBackground(); this.unshowcourtyard()}}>
                        <img src={courtyard} className='preloadImage'></img>
                    </div>
                    <div id='cutsLeft' onMouseOver={this.showcuts} onMouseOut={() => {this.resetBackground(); this.unshowcuts()}}>
                        <img src={cuts} className='preloadImage'></img>
                    </div>
                    <div id='flagLeft' onMouseOver={this.showflag} onMouseOut={() => {this.resetBackground(); this.unshowflag()}}>
                        <img src={flag} className='preloadImage'></img>
                    </div>
                    <div id='greenBoxLeft' onMouseOver={this.showgreenBox} onMouseOut={() => {this.resetBackground(); this.unshowgreenBox()}}>
                        <img src={greenBox} className='preloadImage'></img>
                    </div>
                    <div id='jumpUpLeft' onMouseOver={this.showjumpUp} onMouseOut={() => {this.resetBackground(); this.unshowjumpUp()}}>
                        <img src={jumpUp} className='preloadImage'></img>
                    </div>
                    <div id='maulerLeft' onMouseOver={this.showmauler} onMouseOut={() => {this.resetBackground(); this.unshowmauler()}}>
                        <img src={mauler} className='preloadImage'></img>
                    </div>
                    <div id='maulerLeftTwo' onMouseOver={this.showmauler} onMouseOut={() => {this.resetBackground(); this.unshowmauler()}}>
                        <img src={mauler} className='preloadImage'></img>
                    </div>
                    <div id='needlerLeft' onMouseOver={this.showneedler} onMouseOut={() => {this.resetBackground(); this.unshowneedler()}}>
                        <img src={needler} className='preloadImage'></img>
                    </div>
                    <div id='needlerLeftTwo' onMouseOver={this.showneedler} onMouseOut={() => {this.resetBackground(); this.unshowneedler()}}>
                        <img src={needler} className='preloadImage'></img>
                    </div>
                    <div id='needlerPitLeft' onMouseOver={this.showneedlerPit} onMouseOut={() => {this.resetBackground(); this.unshowneedlerPit()}}>
                        <img src={needlerPit} className='preloadImage'></img>
                    </div>
                    <div id='needlerPitLeftTwo' onMouseOver={this.showneedlerPit} onMouseOut={() => {this.resetBackground(); this.unshowneedlerPit()}}>
                        <img src={needlerPit} className='preloadImage'></img>
                    </div>
                    <div id='needlerRampLeft' onMouseOver={this.showneedlerRamp} onMouseOut={() => {this.resetBackground(); this.unshowneedlerRamp()}}>
                        <img src={needlerRamp} className='preloadImage'></img>
                    </div>
                    <div id='pitLeft' onMouseOver={this.showpit} onMouseOut={() => {this.resetBackground(); this.unshowpit()}}>
                        <img src={pit} className='preloadImage'></img>
                    </div>
                    <div id='pitLeftTwo' onMouseOver={this.showpit} onMouseOut={() => {this.resetBackground(); this.unshowpit()}}>
                        <img src={pit} className='preloadImage'></img>
                    </div>
                    <div id='pitRampLeft' onMouseOver={this.showpitRamp} onMouseOut={() => {this.resetBackground(); this.unshowpitRamp()}}>
                        <img src={pitRamp} className='preloadImage'></img>
                    </div>
                    <div id='platformLeft' onMouseOver={this.showplatform} onMouseOut={() => {this.resetBackground(); this.unshowplatform()}}>
                        <img src={platform} className='preloadImage'></img>
                    </div>
                    <div id='platformLeftTwo' onMouseOver={this.showplatform} onMouseOut={() => {this.resetBackground(); this.unshowplatform()}}>
                        <img src={platform} className='preloadImage'></img>
                    </div>
                    <div id='snipeBridgeLeft' onMouseOver={this.showsnipeBridge} onMouseOut={() => {this.resetBackground(); this.unshowsnipeBridge()}}>
                        <img src={snipeBridge} className='preloadImage'></img>
                    </div>
                    <div id='snipePocketLeft' onMouseOver={this.showsnipePocket} onMouseOut={() => {this.resetBackground(); this.unshowsnipePocket()}}>
                        <img src={snipePocket} className='preloadImage'></img>
                    </div>
                    <div id='streetLeft' onMouseOver={this.showstreet} onMouseOut={() => {this.resetBackground(); this.unshowstreet()}}>
                        <img src={street} className='preloadImage'></img>
                    </div>
                    <div id='streetLeftTwo' onMouseOver={this.showstreet} onMouseOut={() => {this.resetBackground(); this.unshowstreet()}}>
                        <img src={street} className='preloadImage'></img>
                    </div>
                    <div id='swordRampLeft' onMouseOver={this.showswordRamp} onMouseOut={() => {this.resetBackground(); this.unshowswordRamp()}}>
                        <img src={swordRamp} className='preloadImage'></img>
                    </div>
                    <div id='swordRampLeftTwo' onMouseOver={this.showswordRamp} onMouseOut={() => {this.resetBackground(); this.unshowswordRamp()}}>
                        <img src={swordRamp} className='preloadImage'></img>
                    </div>
                    <div id='swordWindowLeft' onMouseOver={this.showswordWindow} onMouseOut={() => {this.resetBackground(); this.unshowswordWindow()}}>
                        <img src={swordWindow} className='preloadImage'></img>
                    </div>
                    <div id='s1PitLeft' onMouseOver={this.shows1} onMouseOut={() => {this.resetBackground(); this.unshows1()}}>
                        <img src={s1} className='preloadImage'></img>
                    </div>
                    <div id='s2PitLeft' onMouseOver={this.shows2} onMouseOut={() => {this.resetBackground(); this.unshows2()}}>
                        <img src={s2} className='preloadImage'></img>
                    </div>
                    <div id='s2PitLeftTwo' onMouseOver={this.shows2} onMouseOut={() => {this.resetBackground(); this.unshows2()}}>
                        <img src={s2} className='preloadImage'></img>
                    </div>
                    <div id='s2PitLeftThree' onMouseOver={this.shows2} onMouseOut={() => {this.resetBackground(); this.unshows2()}}>
                        <img src={s2} className='preloadImage'></img>
                    </div>
                    <div id='s2PitLeftFour' onMouseOver={this.shows2} onMouseOut={() => {this.resetBackground(); this.unshows2()}}>
                        <img src={s2} className='preloadImage'></img>
                    </div>
                    <div id='trainingLeft' onMouseOver={this.showtraining} onMouseOut={() => {this.resetBackground(); this.unshowtraining()}}>
                        <img src={training} className='preloadImage'></img>
                    </div>
                    <div id='trainingLeftTwo' onMouseOver={this.showtraining} onMouseOut={() => {this.resetBackground(); this.unshowtraining()}}>
                        <img src={training} className='preloadImage'></img>
                    </div>
                    <div id='trainingLeftThree' onMouseOver={this.showtraining} onMouseOut={() => {this.resetBackground(); this.unshowtraining()}}>
                        <img src={training} className='preloadImage'></img>
                    </div>
                    <div id='trainingRampLeft' onMouseOver={this.showtrainingRamp} onMouseOut={() => {this.resetBackground(); this.unshowtrainingRamp()}}>
                        <img src={trainingRamp} className='preloadImage'></img>
                    </div>
                    <div id='trainingPocketLeft' onMouseOver={this.showtrainingPocket} onMouseOut={() => {this.resetBackground(); this.unshowtrainingPocket()}}>
                        <img src={trainingPocket} className='preloadImage'></img>
                    </div>
                    <div id='walshyLeft' onMouseOver={this.showwalshy} onMouseOut={() => {this.resetBackground(); this.unshowwalshy()}}>
                        <img src={walshy} className='preloadImage'></img>
                    </div>
                    <div id='firstBR' onMouseOver={this.showfirstBR} onMouseOut={() => {this.resetBackground(); this.unshowfirstBR()}}>
                        <img src={firstBR} className='preloadImage'></img>
                    </div>
                    <div id='secondBR' onMouseOver={this.showsecondBR} onMouseOut={() => {this.resetBackground(); this.unshowsecondBR()}}>
                        <img src={secondBR} className='preloadImage'></img>
                    </div>
                    <div id='secondBRTwo' onMouseOver={this.showsecondBR} onMouseOut={() => {this.resetBackground(); this.unshowsecondBR()}}>
                        <img src={secondBR} className='preloadImage'></img>
                    </div>
                    <div id='assault' onMouseOver={this.showAssault} onMouseOut={() => {this.resetBackground(); this.unshowAssault()}}>
                        <img src={Assault} className='preloadImage'></img>
                    </div>
                    <div id='backRamp' onMouseOver={this.showbackRamp} onMouseOut={() => {this.resetBackground(); this.unshowbackRamp()}}>
                        <img src={backRamp} className='preloadImage'></img>
                    </div>
                    <div id='courtyard' onMouseOver={this.showcourtyard} onMouseOut={() => {this.resetBackground(); this.unshowcourtyard()}}>
                        <img src={courtyard} className='preloadImage'></img>
                    </div>
                    <div id='customOS' onMouseOver={this.showcustomOS} onMouseOut={() => {this.resetBackground(); this.unshowcustomOS()}}>
                        <img src={customOS} className='preloadImage'></img>
                    </div>
                    <div id='cuts' onMouseOver={this.showcuts} onMouseOut={() => {this.resetBackground(); this.unshowcuts()}}>
                        <img src={cuts} className='preloadImage'></img>
                    </div>
                    <div id='flag' onMouseOver={this.showflag} onMouseOut={() => {this.resetBackground(); this.unshowflag()}}>
                        <img src={flag} className='preloadImage'></img>
                    </div>
                    <div id='greenBox' onMouseOver={this.showgreenBox} onMouseOut={() => {this.resetBackground(); this.unshowgreenBox()}}>
                        <img src={greenBox} className='preloadImage'></img>
                    </div>
                    <div id='greenHall' onMouseOver={this.showgreenHall} onMouseOut={() => {this.resetBackground(); this.unshowgreenHall()}}>
                        <img src={greenHall} className='preloadImage'></img>
                    </div>
                    <div id='jumpUp' onMouseOver={this.showjumpUp} onMouseOut={() => {this.resetBackground(); this.unshowjumpUp()}}>
                        <img src={jumpUp} className='preloadImage'></img>
                    </div>
                    <div id='longHallCamo' onMouseOver={this.showlongHallCamo} onMouseOut={() => {this.resetBackground(); this.unshowlongHallCamo()}}>
                        <img src={longHallCamo} className='preloadImage'></img>
                    </div>
                    <div id='mauler' onMouseOver={this.showmauler} onMouseOut={() => {this.resetBackground(); this.unshowmauler()}}>
                        <img src={mauler} className='preloadImage'></img>
                    </div>
                    <div id='maulerTwo' onMouseOver={this.showmauler} onMouseOut={() => {this.resetBackground(); this.unshowmauler()}}>
                        <img src={mauler} className='preloadImage'></img>
                    </div>
                    <div id='maulerThree' onMouseOver={this.showmauler} onMouseOut={() => {this.resetBackground(); this.unshowmauler()}}>
                        <img src={mauler} className='preloadImage'></img>
                    </div>
                    <div id='midBridge' onMouseOver={this.showmidBridge} onMouseOut={() => {this.resetBackground(); this.unshowmidBridge()}}>
                        <img src={midBridge} className='preloadImage'></img>
                    </div>
                    <div id='needler' onMouseOver={this.showneedler} onMouseOut={() => {this.resetBackground(); this.unshowneedler()}}>
                        <img src={needler} className='preloadImage'></img>
                    </div>
                    <div id='needlerTwo' onMouseOver={this.showneedler} onMouseOut={() => {this.resetBackground(); this.unshowneedler()}}>
                        <img src={needler} className='preloadImage'></img>
                    </div>
                    <div id='needlerPit' onMouseOver={this.showneedlerPit} onMouseOut={() => {this.resetBackground(); this.unshowneedlerPit()}}>
                        <img src={needlerPit} className='preloadImage'></img>
                    </div>
                    <div id='needlerPitTwo' onMouseOver={this.showneedlerPit} onMouseOut={() => {this.resetBackground(); this.unshowneedlerPit()}}>
                        <img src={needlerPit} className='preloadImage'></img>
                    </div>
                    <div id='needlerRamp' onMouseOver={this.showneedlerRamp} onMouseOut={() => {this.resetBackground(); this.unshowneedlerRamp()}}>
                        <img src={needlerRamp} className='preloadImage'></img>
                    </div>
                    <div id='pit' onMouseOver={this.showpit} onMouseOut={() => {this.resetBackground(); this.unshowpit()}}>
                        <img src={pit} className='preloadImage'></img>
                    </div>
                    <div id='pitTwo' onMouseOver={this.showpit} onMouseOut={() => {this.resetBackground(); this.unshowpit()}}>
                        <img src={pit} className='preloadImage'></img>
                    </div>
                    <div id='pitThree' onMouseOver={this.showpit} onMouseOut={() => {this.resetBackground(); this.unshowpit()}}>
                        <img src={pit} className='preloadImage'></img>
                    </div>
                    <div id='pitRamp' onMouseOver={this.showpitRamp} onMouseOut={() => {this.resetBackground(); this.unshowpitRamp()}}>
                        <img src={pitRamp} className='preloadImage'></img>
                    </div>
                    <div id='platform' onMouseOver={this.showplatform} onMouseOut={() => {this.resetBackground(); this.unshowplatform()}}>
                        <img src={platform} className='preloadImage'></img>
                    </div>
                    <div id='platformTwo' onMouseOver={this.showplatform} onMouseOut={() => {this.resetBackground(); this.unshowplatform()}}>
                        <img src={platform} className='preloadImage'></img>
                    </div>
                    <div id='rockets' onMouseOver={this.showrockets} onMouseOut={() => {this.resetBackground(); this.unshowrockets()}}>
                        <img src={rockets} className='preloadImage'></img>
                    </div>
                    <div id='runway' onMouseOver={this.showrunway} onMouseOut={() => {this.resetBackground(); this.unshowrunway()}}>
                        <img src={runway} className='preloadImage'></img>
                    </div>
                    <div id='snipeBridge' onMouseOver={this.showsnipeBridge} onMouseOut={() => {this.resetBackground(); this.unshowsnipeBridge()}}>
                        <img src={snipeBridge} className='preloadImage'></img>
                    </div>
                    <div id='snipePocket' onMouseOver={this.showsnipePocket} onMouseOut={() => {this.resetBackground(); this.unshowsnipePocket()}}>
                        <img src={snipePocket} className='preloadImage'></img>
                    </div>
                    <div id='street' onMouseOver={this.showstreet} onMouseOut={() => {this.resetBackground(); this.unshowstreet()}}>
                        <img src={street} className='preloadImage'></img>
                    </div>
                    <div id='sword' onMouseOver={this.showsword} onMouseOut={() => {this.resetBackground(); this.unshowsword()}}>
                        <img src={sword} className='preloadImage'></img>
                    </div>
                    <div id='swordRamp' onMouseOver={this.showswordRamp} onMouseOut={() => {this.resetBackground(); this.unshowswordRamp()}}>
                        <img src={swordRamp} className='preloadImage'></img>
                    </div>
                    <div id='swordRampTwo' onMouseOver={this.showswordRamp} onMouseOut={() => {this.resetBackground(); this.unshowswordRamp()}}>
                        <img src={swordRamp} className='preloadImage'></img>
                    </div>
                    <div id='swordWindow' onMouseOver={this.showswordWindow} onMouseOut={() => {this.resetBackground(); this.unshowswordWindow()}}>
                        <img src={swordWindow} className='preloadImage'></img>
                    </div>
                    <div id='s1Pit' onMouseOver={this.shows1} onMouseOut={() => {this.resetBackground(); this.unshows1()}}>
                        <img src={s1} className='preloadImage'></img>
                    </div>
                    <div id='s2Pit' onMouseOver={this.shows2} onMouseOut={() => {this.resetBackground(); this.unshows2()}}>
                        <img src={s2} className='preloadImage'></img>
                    </div>
                    <div id='s2PitTwo' onMouseOver={this.shows2} onMouseOut={() => {this.resetBackground(); this.unshows2()}}>
                        <img src={s2} className='preloadImage'></img>
                    </div>
                    <div id='s2PitThree' onMouseOver={this.shows2} onMouseOut={() => {this.resetBackground(); this.unshows2()}}>
                        <img src={s2} className='preloadImage'></img>
                    </div>
                    <div id='s2PitFour' onMouseOver={this.shows2} onMouseOut={() => {this.resetBackground(); this.unshows2()}}>
                        <img src={s2} className='preloadImage'></img>
                    </div>
                    <div id='training' onMouseOver={this.showtraining} onMouseOut={() => {this.resetBackground(); this.unshowtraining()}}>
                        <img src={training} className='preloadImage'></img>
                    </div>
                    <div id='trainingTwo' onMouseOver={this.showtraining} onMouseOut={() => {this.resetBackground(); this.unshowtraining()}}>
                        <img src={training} className='preloadImage'></img>
                    </div>
                    <div id='trainingThree' onMouseOver={this.showtraining} onMouseOut={() => {this.resetBackground(); this.unshowtraining()}}>
                        <img src={training} className='preloadImage'></img>
                    </div>
                    <div id='trainingPocket' onMouseOver={this.showtrainingPocket} onMouseOut={() => {this.resetBackground(); this.unshowtrainingPocket()}}>
                        <img src={trainingPocket} className='preloadImage'></img>
                    </div>
                    <div id='trainingRamp' onMouseOver={this.showtrainingRamp} onMouseOut={() => {this.resetBackground(); this.unshowtrainingRamp()}}>
                        <img src={trainingRamp} className='preloadImage'></img>
                    </div>
                    <div id='walshy' onMouseOver={this.showwalshy} onMouseOut={() => {this.resetBackground(); this.unshowwalshy()}}>
                        <img src={walshy} className='preloadImage'></img>
                    </div>
                </div>
                <div className="inGamePic">
                    <h2 id="thePitInGamePicText" class="inGamePicText"></h2>
                    <img id="thePitScreenShot"></img>
                </div>
            </div>
        );
    }
}

export default ThePit;