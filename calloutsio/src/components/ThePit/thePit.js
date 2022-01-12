import React, {useState} from 'react';
import Screenshot from '../ScreenShots';

function ThePit({turnGreen,returnColor,textGreen,returnTextColor}){
    const [screens,setScreens] = useState('');

    const handleMouseOver = (screenshotName,turnGreenIDArray,textDivID) => {
        for(let i=0;i<turnGreenIDArray.length;i++){
            turnGreen(document.getElementById(turnGreenIDArray[i]));
        }
        textGreen(document.getElementById(textDivID));
        setScreens(screenshotName);
    }
    const handleMouseOut = (returnColorIDArray,textDivID) => {
        for(let i=0;i<returnColorIDArray.length;i++){
            returnColor(document.getElementById(returnColorIDArray[i]));
        }
        returnTextColor(document.getElementById(textDivID));
    }
    return(
        <div className="thePitFullGrid">
            <h1 className="mapTitleThePit">The Pit</h1>
            <div className="calloutsList" id="pitCallouts">
                <p onMouseOver={() => {handleMouseOver('1st BR',['firstBrPit','firstBrPit2'],'firstBrPitText')}} onMouseOut={() => {handleMouseOut(['firstBrPit','firstBrPit2'],'firstBrPitText')}} id="firstBrPitText">1st BR</p>
                <p onMouseOver={() => {handleMouseOver('2nd BR',['secondBrPit','secondBrPit2'],'secondBrPitText')}}  onMouseOut={() => {handleMouseOut(['secondBrPit','secondBrPit2'],'secondBrPitText')}} id="secondBrPitText">2nd BR</p>
                <p onMouseOver={() => {handleMouseOver('Assault',['assaultPit','assaultPit2'],'assaultPitText')}} onMouseOut={() => {handleMouseOut(['assaultPit','assaultPit2'],'assaultPitText')}} id="assaultPitText">Assault</p>
                <p onMouseOver={() => {handleMouseOver('Back Ramp',['backRampPit','backRampPit2'],'backRampPitText')}} onMouseOut={() => {handleMouseOut(['backRampPit','backRampPit2'],'backRampPitText')}} id="backRampPitText">Back Ramp</p>
                <p onMouseOver={() => {handleMouseOver('Courtyard',['courtyardPit','courtyardPit2'],'courtyardPitText')}} onMouseOut={() => {handleMouseOut(['courtyardPit','courtyardPit2'],'courtyardPitText')}} id="courtyardPitText">Courtyard</p>
                <p onMouseOver={() => {handleMouseOver('Custom',['customOsPit'],'customOsPitText')}} onMouseOut={() => {handleMouseOut(['customOsPit'],'customOsPitText')}} id="customOsPitText">Custom/OS</p>
                <p onMouseOver={() => {handleMouseOver('Cuts',['cutsPit','cutsPit2'],'cutsPitText')}} onMouseOut={() => {handleMouseOut(['cutsPit','cutsPit2'],'cutsPitText')}} id="cutsPitText">Cuts</p>
                <p onMouseOver={() => {handleMouseOver('Flag',['flagPit','flagPit2'],'flagPitText')}} onMouseOut={() => {handleMouseOut(['flagPit','flagPit2'],'flagPitText')}} id="flagPitText">Flag</p>
                <p onMouseOver={() => {handleMouseOver('Green Box',['greenBoxPit','greenBoxPit2'],'greenBoxPitText')}} onMouseOut={() => {handleMouseOut(['greenBoxPit','greenBoxPit2'],'greenBoxPitText')}} id="greenBoxPitText">Green Box</p>
                <p onMouseOver={() => {handleMouseOver('Green Hall',['greenHallPit'],'greenHallPitText')}} onMouseOut={() => {handleMouseOut(['greenHallPit'],'greenHallPitText')}} id="greenHallPitText">Green Hall</p>
                <p onMouseOver={() => {handleMouseOver('Jump Up',['jumpUpPit'],'jumpUpPitText')}} onMouseOut={() => {handleMouseOut(['jumpUpPit'],'jumpUpPitText')}} id="jumpUpPitText">Jump Up</p>
                <p onMouseOver={() => {handleMouseOver('Long Hall',['longHallCamoPit'],'longHallCamoPitText')}} onMouseOut={() => {handleMouseOut(['longHallCamoPit'],'longHallCamoPitText')}} id="longHallCamoPitText">Long Hall/Camo</p>
                <p onMouseOver={() => {handleMouseOver('Mid Bridge',['midBridgePit'],'midBridgePitText')}} onMouseOut={() => {handleMouseOut(['midBridgePit'],'midBridgePitText')}} id="midBridgePitText">Mid Bridge</p>
                <p onMouseOver={() => {handleMouseOver('Mauler',['maulerPit','maulerPit2'],'maulerPitText')}} onMouseOut={() => {handleMouseOut(['maulerPit','maulerPit2'],'maulerPitText')}} id="maulerPitText">Mauler</p>
                <p onMouseOver={() => {handleMouseOver('Needler',['needlerPit','needlerPit2'],'needlerPitText')}} onMouseOut={() => {handleMouseOut(['needlerPit','needlerPit2'],'needlerPitText')}} id="needlerPitText">Needler</p>
                <p onMouseOver={() => {handleMouseOver('Needler Pit',['needlerPitPit','needlerPitPit2'],'needlerPitPitText')}} onMouseOut={() => {handleMouseOut(['needlerPitPit','needlerPitPit2'],'needlerPitPitText')}} id="needlerPitPitText">Needler Pit</p>
                <p onMouseOver={() => {handleMouseOver('Needler Ramp',['needlerRampPit','needlerRampPit2'],'needlerRampPitText')}} onMouseOut={() => {handleMouseOut(['needlerRampPit','needlerRampPit2'],'needlerRampPitText')}} id="needlerRampPitText">Needler Ramp</p>
                <p onMouseOver={() => {handleMouseOver('Pit',['pitPit','pitPit2'],'pitPitText')}} onMouseOut={() => {handleMouseOut(['pitPit','pitPit2'],'pitPitText')}} id="pitPitText">Pit</p>
                <p onMouseOver={() => {handleMouseOver('Pit Ramp',['pitRampPit','pitRampPit2'],'pitRampPitText')}} onMouseOut={() => {handleMouseOut(['pitRampPit','pitRampPit2'],'pitRampPitText')}} id="pitRampPitText">Pit Ramp</p>
                <p onMouseOver={() => {handleMouseOver('Platform',['platformPit','platformPit2'],'platformPitText')}} onMouseOut={() => {handleMouseOut(['platformPit','platformPit2'],'platformPitText')}} id="platformPitText">Platform</p>
                <p onMouseOver={() => {handleMouseOver('Rockets',['rocketsPit'],'rocketsPitText')}} onMouseOut={() => {handleMouseOut(['rocketsPit'],'rocketsPitText')}} id="rocketsPitText">Rockets</p>
                <p onMouseOver={() => {handleMouseOver('Runway',['runwayPit'],'runwayPitText')}} onMouseOut={() => {handleMouseOut(['runwayPit'],'runwayPitText')}} id="runwayPitText">Runway</p>
                <p onMouseOver={() => {handleMouseOver('Snipe Bridge',['snipeBridgePit','snipeBridgePit2'],'snipeBridgePitText')}} onMouseOut={() => {handleMouseOut(['snipeBridgePit','snipeBridgePit2'],'snipeBridgePitText')}} id="snipeBridgePitText">Snipe Bridge</p>
                <p onMouseOver={() => {handleMouseOver('Snipe Pocket',['snipePocketPit','snipePocketPit2'],'snipePocketPitText')}} onMouseOut={() => {handleMouseOut(['snipePocketPit','snipePocketPit2'],'snipePocketPitText')}} id="snipePocketPitText">Snipe Pocket</p>
                <p onMouseOver={() => {handleMouseOver('Street',['streetPit','streetPit2'],'streetPitText')}} onMouseOut={() => {handleMouseOut(['streetPit','streetPit2'],'streetPitText')}} id="streetPitText">Street</p>
                <p onMouseOver={() => {handleMouseOver('Sword',['swordPit'],'swordPitText')}} onMouseOut={() => {handleMouseOut(['swordPit'],'swordPitText')}} id="swordPitText">Sword</p>
                <p onMouseOver={() => {handleMouseOver('Sword Ramp',['swordRampPit','swordRampPit2'],'swordRampPitText')}} onMouseOut={() => {handleMouseOut(['swordRampPit','swordRampPit2'],'swordRampPitText')}} id="swordRampPitText">Sword Ramp</p>
                <p onMouseOver={() => {handleMouseOver('Sword Window',['swordWindowPit','swordWindowPit2'],'swordWindowPitText')}} onMouseOut={() => {handleMouseOut(['swordWindowPit','swordWindowPit2'],'swordWindowPitText')}} id="swordWindowPitText">Sword Window</p>
                <p onMouseOver={() => {handleMouseOver('S1',['s1Pit','s1Pit2'],'s1PitText')}} onMouseOut={() => {handleMouseOut(['s1Pit','s1Pit2'],'s1PitText')}} id="s1PitText">S1</p>
                <p onMouseOver={() => {handleMouseOver('S2',['s2Pit','s2Pit2'],'s2PitText')}} onMouseOut={() => {handleMouseOut(['s2Pit','s2Pit2'],'s2PitText')}} id="s2PitText">S2</p>
                <p onMouseOver={() => {handleMouseOver('Training',['trainingPit','trainingPit2'],'trainingPitText')}} onMouseOut={() => {handleMouseOut(['trainingPit','trainingPit2'],'trainingPitText')}} id="trainingPitText">Training Pit</p>
                <p onMouseOver={() => {handleMouseOver('Training Ramp',['trainingRampPit','trainingRampPit2'],'trainingRampPitText')}} onMouseOut={() => {handleMouseOut(['trainingRampPit','trainingRampPit2'],'trainingRampPitText')}} id="trainingRampPitText">Training Ramp</p>
                <p onMouseOver={() => {handleMouseOver('Training Pocket',['trainingPocketPit','trainingPocketPit2'],'trainingPocketPitText')}} onMouseOut={() => {handleMouseOut(['trainingPocketPit','trainingPocketPit2'],'trainingPocketPitText')}} id="trainingPocketPitText">Training Pocket</p>
                <p onMouseOver={() => {handleMouseOver('Walshy',['walshyPit','walshyPit2'],'walshyPitText')}} onMouseOut={() => {handleMouseOut(['walshyPit','walshyPit2'],'walshyPitText')}} id="walshyPitText">Walshy</p>
            </div>
            <svg id="thePitMap" width="750px" height="625px">
                <polygon onMouseOver={() => {handleMouseOver('1st BR',['firstBrPit','firstBrPit2'],'firstBrPitText')}} onMouseOut={() => {handleMouseOut(['firstBrPit','firstBrPit2'],'firstBrPitText')}} id="firstBrPit" points="128,489 193,489 193,507 166,507 166,510 128, 510"/>
                <polygon onMouseOver={() => {handleMouseOver('1st BR',['firstBrPit','firstBrPit2'],'firstBrPitText')}} onMouseOut={() => {handleMouseOut(['firstBrPit','firstBrPit2'],'firstBrPitText')}} id="firstBrPit2" points="562,489 626,489 626,510 589,510 589,507 562,507"/>
                <polygon onMouseOver={() => {handleMouseOver('2nd BR',['secondBrPit','secondBrPit2'],'secondBrPitText')}}  onMouseOut={() => {handleMouseOut(['secondBrPit','secondBrPit2'],'secondBrPitText')}} id="secondBrPit" points="288,469 323,469 323,526 311,535 300,535 300,497 288,485"/>
                <polygon onMouseOver={() => {handleMouseOver('2nd BR',['secondBrPit','secondBrPit2'],'secondBrPitText')}}  onMouseOut={() => {handleMouseOut(['secondBrPit','secondBrPit2'],'secondBrPitText')}} id="secondBrPit2" points="432,469 467,469 467,485 456,497 456,535 444,535 432,526"/>
                <polygon onMouseOver={() => {handleMouseOver('Assault',['assaultPit','assaultPit2'],'assaultPitText')}} onMouseOut={() => {handleMouseOut(['assaultPit','assaultPit2'],'assaultPitText')}} id="assaultPit" points="170,333 212,333 212,373 170,373"/>
                <polygon onMouseOver={() => {handleMouseOver('Assault',['assaultPit','assaultPit2'],'assaultPitText')}} onMouseOut={() => {handleMouseOut(['assaultPit','assaultPit2'],'assaultPitText')}} id="assaultPit2" points="587,333 544,333 544,373 587,373"/>
                <polygon onMouseOver={() => {handleMouseOver('Back Ramp',['backRampPit','backRampPit2'],'backRampPitText')}} onMouseOut={() => {handleMouseOut(['backRampPit','backRampPit2'],'backRampPitText')}} id="backRampPit" points="166,253 154,253 154,338 166,338"/>
                <polygon onMouseOver={() => {handleMouseOver('Back Ramp',['backRampPit','backRampPit2'],'backRampPitText')}} onMouseOut={() => {handleMouseOut(['backRampPit','backRampPit2'],'backRampPitText')}} id="backRampPit2" points="601,253 589,253 589,335 601,335"/>
                <polygon onMouseOver={() => {handleMouseOver('Courtyard',['courtyardPit','courtyardPit2'],'courtyardPitText')}} onMouseOut={() => {handleMouseOut(['courtyardPit','courtyardPit2'],'courtyardPitText')}} id="courtyardPit" points="153,199 230,199 230,247 153,247"/>
                <polygon onMouseOver={() => {handleMouseOver('Courtyard',['courtyardPit','courtyardPit2'],'courtyardPitText')}} onMouseOut={() => {handleMouseOut(['courtyardPit','courtyardPit2'],'courtyardPitText')}} id="courtyardPit2" points="602,199 525,199 525,247 602,247"/>
                <polygon onMouseOver={() => {handleMouseOver('Custom',['customOsPit'],'customOsPitText')}} onMouseOut={() => {handleMouseOut(['customOsPit'],'customOsPitText')}} id="customOsPit" points="369,249 386,249 386,255 393,255 393,285 362,285 362,255 369,255"/>
                <polygon onMouseOver={() => {handleMouseOver('Cuts',['cutsPit','cutsPit2'],'cutsPitText')}} onMouseOut={() => {handleMouseOut(['cutsPit','cutsPit2'],'cutsPitText')}} id="cutsPit" points="188,405 188,374 170,374 170,376 153,376 128,409 147,409 147,405"/>
                <polygon onMouseOver={() => {handleMouseOver('Cuts',['cutsPit','cutsPit2'],'cutsPitText')}} onMouseOut={() => {handleMouseOut(['cutsPit','cutsPit2'],'cutsPitText')}} id="cutsPit2" points="567,374 586,374 586,378 603,378 628,409 608,409 608,405 567,405"/>
                <polygon onMouseOver={() => {handleMouseOver('Flag',['flagPit','flagPit2'],'flagPitText')}} onMouseOut={() => {handleMouseOut(['flagPit','flagPit2'],'flagPitText')}} id="flagPit" points="145,410 145,420 179,420 179,432 189,432 189,461 179,461 179,474 126,474 126,476 110,476 110,412 125,412 127,410"/>
                <polygon onMouseOver={() => {handleMouseOver('Flag',['flagPit','flagPit2'],'flagPitText')}} onMouseOut={() => {handleMouseOut(['flagPit','flagPit2'],'flagPitText')}} id="flagPit2" points="610,410 628,410 630,412 645,412 645,476 630,476 630,474 577,474 577,461 567,461 567,432 575,432 575,420 610,420"/>
                <polygon onMouseOver={() => {handleMouseOver('Green Box',['greenBoxPit','greenBoxPit2'],'greenBoxPitText')}} onMouseOut={() => {handleMouseOut(['greenBoxPit','greenBoxPit2'],'greenBoxPitText')}} id="greenBoxPit" points="323,422 285,422 285,464 323,464"/>
                <polygon onMouseOver={() => {handleMouseOver('Green Box',['greenBoxPit','greenBoxPit2'],'greenBoxPitText')}} onMouseOut={() => {handleMouseOut(['greenBoxPit','greenBoxPit2'],'greenBoxPitText')}} id="greenBoxPit2" points="470,422 432,422 432,464 470,464"/>
                <polygon onMouseOver={() => {handleMouseOver('Green Hall',['greenHallPit'],'greenHallPitText')}} onMouseOut={() => {handleMouseOut(['greenHallPit'],'greenHallPitText')}} id="greenHallPit" points="324,433 431,433 431,452 324,452"/>
                <polygon onMouseOver={() => {handleMouseOver('Jump Up',['jumpUpPit'],'jumpUpPitText')}} onMouseOut={() => {handleMouseOut(['jumpUpPit'],'jumpUpPitText')}} id="jumpUpPit" points="234,394 221,394 221,406 234,419"/>
                <polygon onMouseOver={() => {handleMouseOver('Jump Up',['jumpUpPit'],'jumpUpPitText')}} onMouseOut={() => {handleMouseOut(['jumpUpPit'],'jumpUpPitText')}} id="jumpUpPit2" points="535,395 525,395 525,416 535,406"/>
                <polygon onMouseOver={() => {handleMouseOver('Long Hall',['longHallCamoPit'],'longHallCamoPitText')}} onMouseOut={() => {handleMouseOut(['longHallCamoPit'],'longHallCamoPitText')}} id="longHallCamoPit" points="415,544 415,556 340,556 340,544"/>
                <polygon onMouseOver={() => {handleMouseOver('Mid Bridge',['midBridgePit'],'midBridgePitText')}} onMouseOut={() => {handleMouseOut(['midBridgePit'],'midBridgePitText')}} id="midBridgePit" points="401,141 354,141 354,188 401,188"/>
                <polygon onMouseOver={() => {handleMouseOver('Mauler',['maulerPit','maulerPit2'],'maulerPitText')}} onMouseOut={() => {handleMouseOut(['maulerPit','maulerPit2'],'maulerPitText')}} id="maulerPit" points="183,570 166,570 141,544 125,544 125,512 113,512 113,557 137,582 183,582"/>
                <polygon onMouseOver={() => {handleMouseOver('Mauler',['maulerPit','maulerPit2'],'maulerPitText')}} onMouseOut={() => {handleMouseOut(['maulerPit','maulerPit2'],'maulerPitText')}} id="maulerPit2" points="643,512 630,512 630,543 614,543 589,569 572,569 572,582 619,582 643,556"/>
                <polygon onMouseOver={() => {handleMouseOver('Needler Pit',['needlerPitPit','needlerPitPit2'],'needlerPitPitText')}} onMouseOut={() => {handleMouseOut(['needlerPitPit','needlerPitPit2'],'needlerPitPitText')}} id="needlerPit" points="251,539 241,539 215,565 184,565 184,582 251,582"/>
                <polygon onMouseOver={() => {handleMouseOver('Needler Pit',['needlerPitPit','needlerPitPit2'],'needlerPitPitText')}} onMouseOut={() => {handleMouseOut(['needlerPitPit','needlerPitPit2'],'needlerPitPitText')}} id="needlerPit2" points="571,565 541,565 514,539 504,539 504,582 571,582"/>
                <polygon onMouseOver={() => {handleMouseOver('Needler Pit',['needlerPitPit','needlerPitPit2'],'needlerPitPitText')}} onMouseOut={() => {handleMouseOut(['needlerPitPit','needlerPitPit2'],'needlerPitPitText')}} id="needlerPitPit" points="246,511 194,511 194,530 172,530 184,542 184,562 213,562 240,536 246,536"/>
                <polygon onMouseOver={() => {handleMouseOver('Needler Pit',['needlerPitPit','needlerPitPit2'],'needlerPitPitText')}} onMouseOut={() => {handleMouseOut(['needlerPitPit','needlerPitPit2'],'needlerPitPitText')}} id="needlerPitPit2" points="509,511 561,511 561,530 583,530 571,541 571,562 542,562 516,536 509,536"/>
                <polygon onMouseOver={() => {handleMouseOver('Needler Ramp',['needlerRampPit','needlerRampPit2'],'needlerRampPitText')}} onMouseOut={() => {handleMouseOut(['needlerRampPit','needlerRampPit2'],'needlerRampPitText')}} id="needlerRampPit" points="299,524 299,535 248,535 248,524"/>
                <polygon onMouseOver={() => {handleMouseOver('Needler Ramp',['needlerRampPit','needlerRampPit2'],'needlerRampPitText')}} onMouseOut={() => {handleMouseOut(['needlerRampPit','needlerRampPit2'],'needlerRampPitText')}} id="needlerRampPit2" points="508,524 508,535 457,535 457,524"/>
                <polygon onMouseOver={() => {handleMouseOver('Pit',['pitPit','pitPit2'],'pitPitText')}} onMouseOut={() => {handleMouseOut(['pitPit','pitPit2'],'pitPitText')}} id="pitPit" points="278,311 225,311 225,319 211,333 211,373 221,373 221,393 235,393 235,420 239,424 279,424 279,416 297,416 297,386 278,386"/>
                <polygon onMouseOver={() => {handleMouseOver('Pit',['pitPit','pitPit2'],'pitPitText')}} onMouseOut={() => {handleMouseOut(['pitPit','pitPit2'],'pitPitText')}} id="pitPit2" points="477,312 530,312 530,318 543,332 543,373 535,373 535,394 524,394 524,416 509,431 476,431 476,417 459,417 459,386 477,386"/>
                <polygon onMouseOver={() => {handleMouseOver('Pit Ramp',['pitRampPit','pitRampPit2'],'pitRampPitText')}} onMouseOut={() => {handleMouseOut(['pitRampPit','pitRampPit2'],'pitRampPitText')}} id="pitRampPit" points="297,347 279,347 279,385 297,385"/>
                <polygon onMouseOver={() => {handleMouseOver('Pit Ramp',['pitRampPit','pitRampPit2'],'pitRampPitText')}} onMouseOut={() => {handleMouseOut(['pitRampPit','pitRampPit2'],'pitRampPitText')}} id="pitRampPit2" points="476,347 459,347 459,385 476,385"/>
                <polygon onMouseOver={() => {handleMouseOver('Platform',['platformPit','platformPit2'],'platformPitText')}} onMouseOut={() => {handleMouseOut(['platformPit','platformPit2'],'platformPitText')}} id="platformPit" points="193,377 217,377 217,408 243,433 243,485 220,507 194,507 194,463 193,463 193,430 194,430 194,408 193,408"/>
                <polygon onMouseOver={() => {handleMouseOver('Platform',['platformPit','platformPit2'],'platformPitText')}} onMouseOut={() => {handleMouseOut(['platformPit','platformPit2'],'platformPitText')}} id="platformPit2" points="562,377 538,377 538,408 512,434 512,484 535,507 561,507 561,464 562,464"/>
                <polygon onMouseOver={() => {handleMouseOver('Rockets',['rocketsPit'],'rocketsPitText')}} onMouseOut={() => {handleMouseOut(['rocketsPit'],'rocketsPitText')}} id="rocketsPit" points="387,453 387,462 368,462 368,453"/>
                <polygon onMouseOver={() => {handleMouseOver('Runway',['runwayPit'],'runwayPitText')}} onMouseOut={() => {handleMouseOut(['runwayPit'],'runwayPitText')}} id="runwayPit" points="297,199 458,199 458,218 297,218"/>
                <polygon onMouseOver={() => {handleMouseOver('Snipe Bridge',['snipeBridgePit','snipeBridgePit2'],'snipeBridgePitText')}} onMouseOut={() => {handleMouseOut(['snipeBridgePit','snipeBridgePit2'],'snipeBridgePitText')}} id="snipeBridgePit" points="121,331 109,331 109,362 121,362"/>
                <polygon onMouseOver={() => {handleMouseOver('Snipe Bridge',['snipeBridgePit','snipeBridgePit2'],'snipeBridgePitText')}} onMouseOut={() => {handleMouseOut(['snipeBridgePit','snipeBridgePit2'],'snipeBridgePitText')}} id="snipeBridgePit2" points="646,331 634,331 634,360 646,360"/>
                <polygon onMouseOver={() => {handleMouseOver('Street',['streetPit','streetPit2'],'streetPitText')}} onMouseOut={() => {handleMouseOut(['streetPit','streetPit2'],'streetPitText')}} id="streetPit" points="326,285 312,271 312,244 296,244 296,238 231,238 231,248 226,248 226,309 326,309"/>
                <polygon onMouseOver={() => {handleMouseOver('Street',['streetPit','streetPit2'],'streetPitText')}} onMouseOut={() => {handleMouseOut(['streetPit','streetPit2'],'streetPitText')}} id="streetPit2" points="444,245 524,245 524,248 530,248 530,311 430,311 430,285 444,270"/>
                <polygon onMouseOver={() => {handleMouseOver('Sword',['swordPit'],'swordPitText')}} onMouseOut={() => {handleMouseOut(['swordPit'],'swordPitText')}} id="swordPit" points="388,46 367,46 367,57 346,57 346,74 363,87 392,87 409,75 409,57 388,57"/>
                <polygon onMouseOver={() => {handleMouseOver('Sword Ramp',['swordRampPit','swordRampPit2'],'swordRampPitText')}} onMouseOut={() => {handleMouseOut(['swordRampPit','swordRampPit2'],'swordRampPitText')}} id="swordRampPit" points="247,82 300,82 300,92 247,92"/>
                <polygon onMouseOver={() => {handleMouseOver('Sword Ramp',['swordRampPit','swordRampPit2'],'swordRampPitText')}} onMouseOut={() => {handleMouseOut(['swordRampPit','swordRampPit2'],'swordRampPitText')}} id="swordRampPit2" points="455,82 507,82 507,92 455,92"/>
                <polygon onMouseOver={() => {handleMouseOver('Sword Window',['swordWindowPit','swordWindowPit2'],'swordWindowPitText')}} onMouseOut={() => {handleMouseOut(['swordWindowPit','swordWindowPit2'],'swordWindowPitText')}} id="swordWindowPit" points="334,96 334,110 343,119 357,119 357,136 326,136 318,129 318,96"/>
                <polygon onMouseOver={() => {handleMouseOver('Sword Window',['swordWindowPit','swordWindowPit2'],'swordWindowPitText')}} onMouseOut={() => {handleMouseOut(['swordWindowPit','swordWindowPit2'],'swordWindowPitText')}} id="swordWindowPit2" points="421,96 437,96 437,129 429,136 398,136 398,118 412,118 421,110"/>
                <polygon onMouseOver={() => {handleMouseOver('S1',['s1Pit','s1Pit2'],'s1PitText')}} onMouseOut={() => {handleMouseOut(['s1Pit','s1Pit2'],'s1PitText')}}  id="s1Pit" points="183,275 212,275 212,280 216,280 216,283 222,283 222,292 217,292 215,294 213,294 213,307 183,307"/>
                <polygon onMouseOver={() => {handleMouseOver('S1',['s1Pit','s1Pit2'],'s1PitText')}} onMouseOut={() => {handleMouseOut(['s1Pit','s1Pit2'],'s1PitText')}}  id="s1Pit2" points="573,275 543,275 543,280 539,280 539,283 533,283 533,292 538,292 540,294 543,294 543,307 573,307"/>
                <polygon onMouseOver={() => {handleMouseOver('S2',['s2Pit','s2Pit2'],'s2PitText')}} onMouseOut={() => {handleMouseOut(['s2Pit','s2Pit2'],'s2PitText')}} id="s2Pit" points="119,249 133,249 133,317 121,328 84,328 84,271 119,271"/>
                <polygon onMouseOver={() => {handleMouseOver('S2',['s2Pit','s2Pit2'],'s2PitText')}} onMouseOut={() => {handleMouseOut(['s2Pit','s2Pit2'],'s2PitText')}} id="s2Pit2" points="636,249 636,270 671,270 671,328 633,328 622,317 622,249"/>
                <polygon onMouseOver={() => {handleMouseOver('Training',['trainingPit','trainingPit2'],'trainingPitText')}} onMouseOut={() => {handleMouseOut(['trainingPit','trainingPit2'],'trainingPitText')}} id="trainingPit" points="296,333 365,333 365,384 300,384 300,364 313,364 313,346 296,346"/>
                <polygon onMouseOver={() => {handleMouseOver('Training',['trainingPit','trainingPit2'],'trainingPitText')}} onMouseOut={() => {handleMouseOut(['trainingPit','trainingPit2'],'trainingPitText')}} id="trainingPit2" points="458,333 458,346 442,346 442,363 455,363 455,384 390,384 390,333"/>
                <polygon onMouseOver={() => {handleMouseOver('Training Ramp',['trainingRampPit','trainingRampPit2'],'trainingRampPitText')}} onMouseOut={() => {handleMouseOut(['trainingRampPit','trainingRampPit2'],'trainingRampPitText')}} id="trainingRampPit" points="356,315 282,315 282,329 356,329"/>
                <polygon onMouseOver={() => {handleMouseOver('Training Ramp',['trainingRampPit','trainingRampPit2'],'trainingRampPitText')}} onMouseOut={() => {handleMouseOut(['trainingRampPit','trainingRampPit2'],'trainingRampPitText')}} id="trainingRampPit2" points="401,315 473,315 473,328 401,328"/>
                <polygon onMouseOver={() => {handleMouseOver('Training Pocket',['trainingPocketPit','trainingPocketPit2'],'trainingPocketPitText')}} onMouseOut={() => {handleMouseOut(['trainingPocketPit','trainingPocketPit2'],'trainingPocketPitText')}} id="trainingPocketPit" points="312,351 300,351 300,363 312,363"/>
                <polygon onMouseOver={() => {handleMouseOver('Training Pocket',['trainingPocketPit','trainingPocketPit2'],'trainingPocketPitText')}} onMouseOut={() => {handleMouseOut(['trainingPocketPit','trainingPocketPit2'],'trainingPocketPitText')}} id="trainingPocketPit2" points="455,350 443,350 443,362 455,362"/>
                <polygon onMouseOver={() => {handleMouseOver('Walshy',['walshyPit','walshyPit2'],'walshyPitText')}} onMouseOut={() => {handleMouseOut(['walshyPit','walshyPit2'],'walshyPitText')}} id="walshyPit" points="271,511 287,511 287,490 296,500 296,519 271,519"/>
                <polygon onMouseOver={() => {handleMouseOver('Walshy',['walshyPit','walshyPit2'],'walshyPitText')}} onMouseOut={() => {handleMouseOut(['walshyPit','walshyPit2'],'walshyPitText')}} id="walshyPit2" points="482,510 468,510 468,490 459,500 459,519 482,519"/>
                <polygon onMouseOver={() => {handleMouseOver('Snipe Pocket',['snipePocketPit','snipePocketPit2'],'snipePocketPitText')}} onMouseOut={() => {handleMouseOut(['snipePocketPit','snipePocketPit2'],'snipePocketPitText')}} id="snipePocketPit" points="110,287 97,287 97,302 110,302"/>
                <polygon onMouseOver={() => {handleMouseOver('Snipe Pocket',['snipePocketPit','snipePocketPit2'],'snipePocketPitText')}} onMouseOut={() => {handleMouseOut(['snipePocketPit','snipePocketPit2'],'snipePocketPitText')}} id="snipePocketPit2" points="646,287 658,287 658,301 646,301"/>
            </svg>
            <Screenshot 
                Map={'ThePit'}
                Screenshot={screens}
            />
        </div>
    );
}

export default ThePit;

/*
1st BR "128,489 193,489 193,507 166,507 166,510 128, 510"
    "562,489 626,489 626,510 589,510 589,507 562,507"
2nd BR "288,469 323,469 323,526 311,535 300,535 300,497 288,485"
    "432,469 467,469 467,485 456,497 456,535 444,535 432,526"
Assault "170,333 212,333 212,373 170,373"
    "587,333 544,333 544,373 587,373"
Back Ramp "166,253 154,253 154,338 166,338"
    "601,253 589,253 589,335 601,335"
Courtyard "153,199 230,199 230,247 153,247"
    "602,199 525,199 525,247 602,247"
Custom/OS "369,249 386,249 386,255 393,255 393,285 362,285 362,255 369,255"
Cuts "188,405 188,374 170,374 170,376 153,376 128,409 147,409 147,405"
    "567,374 586,374 586,378 603,378 628,409 608,409 608,405 567,405"
Flag "145,410 145,420 179,420 179,432 189,432 189,461 179,461 179,474 126,474 126,476 110,476 110,412 125,412 127,410"
    "610,410 628,410 630,412 645,412 645,476 630,476 630,474 577,474 577,461 567,461 567,432 575,432 575,420 610,420"
Green Box "323,422 285,422 285,464 323,464"
    "470,422 432,422 432,464 470,464"
Green Hall "324,433 431,433 431,452 324,452"
Jump Up "234,394 221,394 221,406 234,419"
    "535,395 525,395 525,416 535,406"
Long Hall/Camo "415,544 415,556 340,556 340,544"
Mid Bridge "401,141 354,141 354,188 401,188"
Mauler "183,570 166,570 141,544 125,544 125,512 113,512 113,557 137,582 183,582"
    "643,512 630,512 630,543 614,543 589,569 572,569 572,582 619,582 643,556"
Needler "251,539 241,539 215,565 184,565 184,582 251,582"
    "571,565 541,565 514,539 504,539 504,582 571,582"
Needler Pit "246,511 194,511 194,530 172,530 184,542 184,562 213,562 240,536 246,536"
    "509,511 561,511 561,530 583,530 571,541 571,562 542,562 516,536 509,536"
Needler Ramp "299,524 299,535 248,535 248,524"
    "508,524 508,535 457,535 457,524"
Pit "278,311 225,311 225,319 211,333 211,373 221,373 221,393 235,393 235,420 239,424 279,424 279,416 297,416 297,386 278,386"
    "477,312 530,312 530,318 543,332 543,373 535,373 535,394 524,394 524,416 509,431 476,431 476,417 459,417 459,386 477,386"
Pit Ramp "297,347 279,347 279,385 297,385"
    "476,347 459,347 459,385 476,385"
Platform "193,377 217,377 217,408 243,433 243,485 220,507 194,507 194,463 193,463 193,430 194,430 194,408 193,408"
    "562,377 538,377 538,408 512,434 512,484 535,507 561,507 561,464 562,464"
Rockets "387,453 387,462 368,462 368,453"
Runway "297,199 458,199 458,218 297,218"
Snipe Bridge "121,331 109,331 109,362 121,362"
    "646,331 634,331 634,360 646,360"
Snipe Pocket "110,287 97,287 97,302 110,302"
    "646,287 658,287 658,301 646,301"
Street "326,285 312,271 312,244 296,244 296,238 231,238 231,248 226,248 226,309 326,309"
    "444,245 524,245 524,248 530,248 530,311 430,311 430,285 444,270"
Sword "388,46 367,46 367,57 346,57 346,74 363,87 392,87 409,75 409,57 388,57"
Sword Ramp "247,82 300,82 300,92 247,92"
    "455,82 507,82 507,92 455,92"
Sword Window "334,96 334,110 343,119 357,119 357,136 326,136 318,129 318,96"
    "421,96 437,96 437,129 429,136 398,136 398,118 412,118 421,110"
S1 "183,275 212,275 212,280 216,280 216,283 222,283 222,292 217,292 215,294 213,294 213,307 183,307"
    "573,275 543,275 543,280 539,280 539,283 533,283 533,292 538,292 540,294 543,294 543,307 573,307"
S2 "119,249 133,249 133,317 121,328 84,328 84,271 119,271"
    "636,249 636,270 671,270 671,328 633,328 622,317 622,249"
Training "296,333 365,333 365,384 300,384 300,364 313,364 313,346 296,346"
    "458,333 458,346 442,346 442,363 455,363 455,384 390,384 390,333"
Training Ramp "356,315 282,315 282,329 356,329"
    "401,315 473,315 473,328 401,328"
Training Pocket "312,351 300,351 300,363 312,363"
    "455,350 443,350 443,362 455,362"
Walshy "271,511 287,511 287,490 296,500 296,519 271,519"
    "482,510 468,510 468,490 459,500 459,519 482,519"
*/