import React, {useState} from 'react';
import Screenshot from '../ScreenShots/ScreenShots';

function Onslaught({turnGreen,returnColor,textGreen,returnTextColor}) {
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
        <div className="onslaughtFullGrid" data-testid="onslaughtTest">
            <h1 className="mapTitleOnslaught" data-testid="mapTitleOnslaughtTest">Onslaught</h1>
            <div className="calloutsList" id="onslaughtCallouts" data-testid="calloutsListTest">
                <p onMouseOver={() => {handleMouseOver('A Corner',['aCorner','aCorner2'],'aCornerText')}} onMouseOut={() => {handleMouseOut(['aCorner','aCorner2'],'aCornerText')}}  id="aCornerText">A Corner</p>
                <p onMouseOver={() => {handleMouseOver('A Cuts',['aCuts','aCuts2'],'aCutsText')}} onMouseOut={() => {handleMouseOut(['aCuts','aCuts2'],'aCutsText')}}  id="aCutsText">A Cuts</p>
                <p onMouseOver={() => {handleMouseOver('A Dumpster',['aDumpster','aDumpster2'],'aDumpsterText')}} onMouseOut={() => {handleMouseOut(['aDumpster','aDumpster2'],'aDumpsterText')}}  id="aDumpsterText">A Dumpster</p>
                <p onMouseOver={() => {handleMouseOver('A House',['aHouse','aHouse2'],'aHouseText')}} onMouseOut={() => {handleMouseOut(['aHouse','aHouse2'],'aHouseText')}}  id="aHouseText">A House</p>
                <p onMouseOver={() => {handleMouseOver('A Jump Up',['aJumpUp','aJumpUp2'],'aJumpUpText')}} onMouseOut={() => {handleMouseOut(['aJumpUp','aJumpUp2'],'aJumpUpText')}}  id="aJumpUpText">A Jump Up</p>
                <p onMouseOver={() => {handleMouseOver('A Maze',['aMaze'],'aMazeText')}} onMouseOut={() => {handleMouseOut(['aMaze'],'aMazeText')}}  id="aMazeText">A Maze</p>
                <p onMouseOver={() => {handleMouseOver('A Nest',['aNest'],'aNestText')}} onMouseOut={() => {handleMouseOut(['aNest'],'aNestText')}}  id="aNestText">A Nest</p>
                <p onMouseOver={() => {handleMouseOver('A Pocket',['aPocket','aPocket2'],'aPocketText')}} onMouseOut={() => {handleMouseOut(['aPocket','aPocket2'],'aPocketText')}}  id="aPocketText">A Pocket</p>
                <p onMouseOver={() => {handleMouseOver('A Sneaky',['aSneaky','aSneaky2'],'aSneakyText')}} onMouseOut={() => {handleMouseOut(['aSneaky','aSneaky2'],'aSneakyText')}}  id="aSneakyText">A Sneaky</p>
                <p onMouseOver={() => {handleMouseOver('A Stairs',['aStairs','aStairs2'],'aStairsText')}} onMouseOut={() => {handleMouseOut(['aStairs','aStairs2'],'aStairsText')}}  id="aStairsText">A Stairs</p>
                <p onMouseOver={() => {handleMouseOver('A Standup',['aStandup','aStandup2'],'aStandupText')}} onMouseOut={() => {handleMouseOut(['aStandup','aStandup2'],'aStandupText')}}  id="aStandupText">A Standup</p>
                <p onMouseOver={() => {handleMouseOver('A Street',['aStreet','aStreet2'],'aStreetText')}} onMouseOut={() => {handleMouseOut(['aStreet','aStreet2'],'aStreetText')}} id="aStreetText">A Street</p>       
                <p onMouseOver={() => {handleMouseOver('A Teepee',['aTeepee'],'aTeepeeText')}} onMouseOut={() => {handleMouseOut(['aTeepee'],'aTeepeeText')}}  id="aTeepeeText">A Teepee</p>
                <p onMouseOver={() => {handleMouseOver('A Tunnel',['aTunnel'],'aTunnelText')}} onMouseOut={() => {handleMouseOut(['aTunnel'],'aTunnelText')}}  id="aTunnelText">A Tunnel</p>
                <p onMouseOver={() => {handleMouseOver('Top A',['topAOnslaught'],'topAOnslaughtText')}} onMouseOut={() => {handleMouseOut(['topAOnslaught'],'topAOnslaughtText')}}  id="topAOnslaughtText">Top A</p>
                <p onMouseOver={() => {handleMouseOver('B Corner',['bCorner','bCorner2'],'bCornerText')}} onMouseOut={() => {handleMouseOut(['bCorner','bCorner2'],'bCornerText')}}  id="bCornerText">B Corner</p>
                <p onMouseOver={() => {handleMouseOver('B Cuts',['bCuts','bCuts2'],'bCutsText')}} onMouseOut={() => {handleMouseOut(['bCuts','bCuts2'],'bCutsText')}}  id="bCutsText">B Cuts</p>
                <p onMouseOver={() => {handleMouseOver('B Dumpster',['bDumpster','bDumpster2'],'bDumpsterText')}} onMouseOut={() => {handleMouseOut(['bDumpster','bDumpster2'],'bDumpsterText')}}  id="bDumpsterText">B Dumpster</p>
                <p onMouseOver={() => {handleMouseOver('B House',['bHouse','bHouse2'],'bHouseText')}} onMouseOut={() => {handleMouseOut(['bHouse','bHouse2'],'bHouseText')}}  id="bHouseText">B House</p>
                <p onMouseOver={() => {handleMouseOver('B Jump Up',['bJumpUp','bJumpUp2'],'bJumpUpText')}} onMouseOut={() => {handleMouseOut(['bJumpUp','bJumpUp2'],'bJumpUpText')}}  id="bJumpUpText">B Jump Up</p>
                <p onMouseOver={() => {handleMouseOver('B Maze',['bMaze'],'bMazeText')}} onMouseOut={() => {handleMouseOut(['bMaze'],'bMazeText')}}  id="bMazeText">B Maze</p>
                <p onMouseOver={() => {handleMouseOver('B Nest',['bNest'],'bNestText')}} onMouseOut={() => {handleMouseOut(['bNest'],'bNestText')}}  id="bNestText">B Nest</p>
                <p onMouseOver={() => {handleMouseOver('B Pocket',['bPocket','bPocket2'],'bPocketText')}} onMouseOut={() => {handleMouseOut(['bPocket','bPocket2'],'bPocketText')}} id="bPocketText">B Pocket</p>
                <p onMouseOver={() => {handleMouseOver('B Sneaky',['bSneaky','bSneaky2'],'bSneakyText')}} onMouseOut={() => {handleMouseOut(['bSneaky','bSneaky2'],'bSneakyText')}}  id="bSneakyText">B Sneaky</p>
                <p onMouseOver={() => {handleMouseOver('B Stairs',['bStairs','bStairs2'],'bStairsText')}} onMouseOut={() => {handleMouseOut(['bStairs','bStairs2'],'bStairsText')}}  id="bStairsText">B Stairs</p>
                <p onMouseOver={() => {handleMouseOver('B Standup',['bStandup','bStandup2'],'bStandupText')}} onMouseOut={() => {handleMouseOut(['bStandup','bStandup2'],'bStandupText')}}  id="bStandupText">B Standup</p>
                <p onMouseOver={() => {handleMouseOver('B Street',['bStreet','bStreet2'],'bStreetText')}} onMouseOut={() => {handleMouseOut(['bStreet','bStreet2'],'bStreetText')}}  id="bStreetText">B Street</p>
                <p onMouseOver={() => {handleMouseOver('B Teepee',['bTeepee'],'bTeepeeText')}} onMouseOut={() => {handleMouseOut(['bTeepee'],'bTeepeeText')}}  id="bTeepeeText">B Teepee</p>
                <p onMouseOver={() => {handleMouseOver('B Tunnel',['bTunnel'],'bTunnelText')}} onMouseOut={() => {handleMouseOut(['bTunnel'],'bTunnelText')}}  id="bTunnelText">B Tunnel</p>
                <p onMouseOver={() => {handleMouseOver('Top B',['topBOnslaught'],'topBOnslaughtText')}} onMouseOut={() => {handleMouseOut(['topBOnslaught'],'topBOnslaughtText')}} id="topBOnslaughtText">Top B</p>
                <p onMouseOver={() => {handleMouseOver('Basement',['basement','basement2'],'basementText')}} onMouseOut={() => {handleMouseOut(['basement','basement2'],'basementText')}}  id="basementText">Basement</p>
                <p onMouseOver={() => {handleMouseOver('Courtyard',['courtyardOnslaught','courtyardOnslaught2'],'courtyardOnslaughtText')}} onMouseOut={() => {handleMouseOut(['courtyardOnslaught','courtyardOnslaught2'],'courtyardOnslaughtText')}}  id="courtyardOnslaughtText">Courtyard</p>
                <p onMouseOver={() => {handleMouseOver('Flag',['flag','flag2'],'flagText')}} onMouseOut={() => {handleMouseOut(['flag','flag2'],'flagText')}}  id="flagText">Flag</p>
                <p onMouseOver={() => {handleMouseOver('Garage Door',['garageDoor','garageDoor2'],'garageDoorText')}} onMouseOut={() => {handleMouseOut(['garageDoor','garageDoor2'],'garageDoorText')}}  id="garageDoorText">Garage Door</p>
                <p onMouseOver={() => {handleMouseOver('Shield',['shield','shield2'],'shieldText')}} onMouseOut={() => {handleMouseOut(['shield','shield2'],'shieldText')}}  id="shieldText">Shield</p>
                <p onMouseOver={() => {handleMouseOver('Top Mid',['topMid'],'topMidText')}} onMouseOut={() => {handleMouseOut(['topMid'],'topMidText')}} id="topMidText">Top Mid</p>
                <p onMouseOver={() => {handleMouseOver('Bottom Mid',['topMid'],'bottomMidText')}} onMouseOut={() => {handleMouseOut(['topMid'],'bottomMidText')}} id="bottomMidText">Bottom Mid</p>
            </div>
            <svg id="onslaughtMap" width="750px" height="625px" data-testid="onslaughtMapTest">
                <polygon onMouseOver={() => {handleMouseOver('A Corner',['aCorner','aCorner2'],'aCornerText')}} onMouseOut={() => {handleMouseOut(['aCorner','aCorner2'],'aCornerText')}} id="aCorner" points="200,49 200,23 149,23 149,49"/>
                <polygon onMouseOver={() => {handleMouseOver('A Corner',['aCorner','aCorner2'],'aCornerText')}} onMouseOut={() => {handleMouseOut(['aCorner','aCorner2'],'aCornerText')}} id="aCorner2" points="200,575 149,575 149,597 200,597"/>
                <polygon onMouseOver={() => {handleMouseOver('A Cuts',['aCuts','aCuts2'],'aCutsText')}} onMouseOut={() => {handleMouseOut(['aCuts','aCuts2'],'aCutsText')}} id="aCuts" points="287,248 315,248 315,283 287,283"/>
                <polygon onMouseOver={() => {handleMouseOver('A Cuts',['aCuts','aCuts2'],'aCutsText')}} onMouseOut={() => {handleMouseOut(['aCuts','aCuts2'],'aCutsText')}} id="aCuts2" points="288,343 315,343 315,375 288,375"/>
                <polygon onMouseOver={() => {handleMouseOver('A Dumpster',['aDumpster','aDumpster2'],'aDumpsterText')}} onMouseOut={() => {handleMouseOut(['aDumpster','aDumpster2'],'aDumpsterText')}} id="aDumpster" points="238,98 244,103 212,130 206,124"/>
                <polygon onMouseOver={() => {handleMouseOver('A Dumpster',['aDumpster','aDumpster2'],'aDumpsterText')}} onMouseOut={() => {handleMouseOut(['aDumpster','aDumpster2'],'aDumpsterText')}} id="aDumpster2" points="212,497 243,523 239,528 208,501"/>
                <polygon onMouseOver={() => {handleMouseOver('A House',['aHouse','aHouse2'],'aHouseText')}} onMouseOut={() => {handleMouseOut(['aHouse','aHouse2'],'aHouseText')}} id="aHouse" points="241,50 241,23 285,23 285,50"/>
                <polygon onMouseOver={() => {handleMouseOver('A House',['aHouse','aHouse2'],'aHouseText')}} onMouseOut={() => {handleMouseOut(['aHouse','aHouse2'],'aHouseText')}} id="aHouse2" points="240,574 285,574 285,598 240,598"/>
                <polygon onMouseOver={() => {handleMouseOver('A Jump Up',['aJumpUp','aJumpUp2'],'aJumpUpText')}} onMouseOut={() => {handleMouseOut(['aJumpUp','aJumpUp2'],'aJumpUpText')}} id="aJumpUp" points="314,126 335,126 335,131 314,131"/>
                <polygon onMouseOver={() => {handleMouseOver('A Jump Up',['aJumpUp','aJumpUp2'],'aJumpUpText')}} onMouseOut={() => {handleMouseOut(['aJumpUp','aJumpUp2'],'aJumpUpText')}} id="aJumpUp2" points="335,494 335,498 314,498 314,494"/>
                <polygon onMouseOver={() => {handleMouseOver('A Maze',['aMaze'],'aMazeText')}} onMouseOut={() => {handleMouseOut(['aMaze'],'aMazeText')}} id="aMaze" points="286,290 336,290 336,336 286,336"/>
                <polygon onMouseOver={() => {handleMouseOver('A Nest',['aNest'],'aNestText')}} onMouseOut={() => {handleMouseOut(['aNest'],'aNestText')}} id="aNest" points="286,290 314,290 314,336 286,336"/>     
                <polygon onMouseOver={() => {handleMouseOver('A Sneaky',['aSneaky','aSneaky2'],'aSneakyText')}} onMouseOut={() => {handleMouseOut(['aSneaky','aSneaky2'],'aSneakyText')}} id="aSneaky" points="317,102 344,102 344,123 317,123"/>
                <polygon onMouseOver={() => {handleMouseOver('A Sneaky',['aSneaky','aSneaky2'],'aSneakyText')}} onMouseOut={() => {handleMouseOut(['aSneaky','aSneaky2'],'aSneakyText')}} id="aSneaky2" points="317,501 344,501 344,524 317,524"/>
                <polygon onMouseOver={() => {handleMouseOver('A Stairs',['aStairs','aStairs2'],'aStairsText')}} onMouseOut={() => {handleMouseOut(['aStairs','aStairs2'],'aStairsText')}} id="aStairs" points="241,77 241,51 285,51 285,77"/>
                <polygon onMouseOver={() => {handleMouseOver('A Stairs',['aStairs','aStairs2'],'aStairsText')}} onMouseOut={() => {handleMouseOut(['aStairs','aStairs2'],'aStairsText')}} id="aStairs2" points="285,549 239,549 239,573 285,573"/>
                <polygon onMouseOver={() => {handleMouseOver('A Standup',['aStandup','aStandup2'],'aStandupText')}} onMouseOut={() => {handleMouseOut(['aStandup','aStandup2'],'aStandupText')}} id="aStandup" points="148,119 148,81 180,81 180,119"/>
                <polygon onMouseOver={() => {handleMouseOver('A Standup',['aStandup','aStandup2'],'aStandupText')}} onMouseOut={() => {handleMouseOut(['aStandup','aStandup2'],'aStandupText')}} id="aStandup2" points="149,508 179,508 179,546 149,546"/>
                <polygon onMouseOver={() => {handleMouseOver('A Street',['aStreet','aStreet2'],'aStreetText')}} onMouseOut={() => {handleMouseOut(['aStreet','aStreet2'],'aStreetText')}} id="aStreet" points="180,272 180,125 148,125 148,272"/>
                <polygon onMouseOver={() => {handleMouseOver('A Street',['aStreet','aStreet2'],'aStreetText')}} onMouseOut={() => {handleMouseOut(['aStreet','aStreet2'],'aStreetText')}} id="aStreet2" points="180,349 148,349 148,497 180,497"/>
                <polygon onMouseOver={() => {handleMouseOver('A Teepee',['aTeepee'],'aTeepeeText')}} onMouseOut={() => {handleMouseOut(['aTeepee'],'aTeepeeText')}} id="aTeepee" points="254,274 285,274 285,349 254,349"/>
                <polygon onMouseOver={() => {handleMouseOver('Top A',['topAOnslaught'],'topAOnslaughtText')}} onMouseOut={() => {handleMouseOut(['topAOnslaught'],'topAOnslaughtText')}} id="topAOnslaught" points="241,273 148,273 148,348 241,348"/>
                <polygon onMouseOver={() => {handleMouseOver('B Corner',['bCorner','bCorner2'],'bCornerText')}} onMouseOut={() => {handleMouseOut(['bCorner','bCorner2'],'bCornerText')}} id="bCorner" points="521,50 521,23 575,23 575,50"/>
                <polygon onMouseOver={() => {handleMouseOver('B Corner',['bCorner','bCorner2'],'bCornerText')}} onMouseOut={() => {handleMouseOut(['bCorner','bCorner2'],'bCornerText')}} id="bCorner2" points="519,573 575,573 575,597 519,597"/>
                <polygon onMouseOver={() => {handleMouseOver('B Cuts',['bCuts','bCuts2'],'bCutsText')}} onMouseOut={() => {handleMouseOut(['bCuts','bCuts2'],'bCutsText')}}id="bCuts" points="431,248 402,248 402,282 431,282"/>
                <polygon onMouseOver={() => {handleMouseOver('B Cuts',['bCuts','bCuts2'],'bCutsText')}} onMouseOut={() => {handleMouseOut(['bCuts','bCuts2'],'bCutsText')}}id="bCuts2" points="431,343 403,343 403,378 431,378"/>
                <polygon onMouseOver={() => {handleMouseOver('B Dumpster',['bDumpster','bDumpster2'],'bDumpsterText')}} onMouseOut={() => {handleMouseOut(['bDumpster','bDumpster2'],'bDumpsterText')}} id="bDumpster" points="482,97 514,124 508,130 476,102"/>
                <polygon onMouseOver={() => {handleMouseOver('B Dumpster',['bDumpster','bDumpster2'],'bDumpsterText')}} onMouseOut={() => {handleMouseOut(['bDumpster','bDumpster2'],'bDumpsterText')}} id="bDumpster2" points="510,497 477,524 481,528 514,501"/>
                <polygon onMouseOver={() => {handleMouseOver('B House',['bHouse','bHouse2'],'bHouseText')}} onMouseOut={() => {handleMouseOut(['bHouse','bHouse2'],'bHouseText')}} id="bHouse" points="482,23 437,23 437,50 482,50"/>
                <polygon onMouseOver={() => {handleMouseOver('B House',['bHouse','bHouse2'],'bHouseText')}} onMouseOut={() => {handleMouseOut(['bHouse','bHouse2'],'bHouseText')}} id="bHouse2" points="481,573 433,573 433,597 481,597"/>
                <polygon onMouseOver={() => {handleMouseOver('B Jump Up',['bJumpUp','bJumpUp2'],'bJumpUpText')}} onMouseOut={() => {handleMouseOut(['bJumpUp','bJumpUp2'],'bJumpUpText')}} id="bJumpUp" points="386,126 409,126 409,131 386,131"/>
                <polygon onMouseOver={() => {handleMouseOver('B Jump Up',['bJumpUp','bJumpUp2'],'bJumpUpText')}} onMouseOut={() => {handleMouseOut(['bJumpUp','bJumpUp2'],'bJumpUpText')}} id="bJumpUp2" points="387,494 408,494 408,498 387,498"/>
                <polygon onMouseOver={() => {handleMouseOver('B Maze',['bMaze'],'bMazeText')}} onMouseOut={() => {handleMouseOut(['bMaze'],'bMazeText')}} id="bMaze" points="380,290 434,290 434,336 380,336"/>
                <polygon onMouseOver={() => {handleMouseOver('B Nest',['bNest'],'bNestText')}} onMouseOut={() => {handleMouseOut(['bNest'],'bNestText')}} id="bNest" points="434,290 403,290 404,336 434,336"/>
                <polygon onMouseOver={() => {handleMouseOver('B Sneaky',['bSneaky','bSneaky2'],'bSneakyText')}} onMouseOut={() => {handleMouseOut(['bSneaky','bSneaky2'],'bSneakyText')}} id="bSneaky" points="405,501 377,501 377,524 405,524"/>
                <polygon onMouseOver={() => {handleMouseOver('B Sneaky',['bSneaky','bSneaky2'],'bSneakyText')}} onMouseOut={() => {handleMouseOut(['bSneaky','bSneaky2'],'bSneakyText')}} id="bSneaky2" points="377,102 406,103 407,124 378,123"/>
                <polygon onMouseOver={() => {handleMouseOver('B Stairs',['bStairs','bStairs2'],'bStairsText')}} onMouseOut={() => {handleMouseOut(['bStairs','bStairs2'],'bStairsText')}} id="bStairs" points="482,51 437,51 437,77 482,77"/>
                <polygon onMouseOver={() => {handleMouseOver('B Stairs',['bStairs','bStairs2'],'bStairsText')}} onMouseOut={() => {handleMouseOut(['bStairs','bStairs2'],'bStairsText')}} id="bStairs2" points="481,548 433,548 433,572 481,572"/>
                <polygon onMouseOver={() => {handleMouseOver('B Standup',['bStandup','bStandup2'],'bStandupText')}} onMouseOut={() => {handleMouseOut(['bStandup','bStandup2'],'bStandupText')}} id="bStandup" points="576,131 576,92 541,92 541,131"/>
                <polygon onMouseOver={() => {handleMouseOver('B Standup',['bStandup','bStandup2'],'bStandupText')}} onMouseOut={() => {handleMouseOut(['bStandup','bStandup2'],'bStandupText')}} id="bStandup2" points="541,494 576,494 576,529 541,529"/>
                <polygon onMouseOver={() => {handleMouseOver('B Street',['bStreet','bStreet2'],'bStreetText')}} onMouseOut={() => {handleMouseOut(['bStreet','bStreet2'],'bStreetText')}} id="bStreet" points="541,274 576,274 576,132 541,132"/>
                <polygon onMouseOver={() => {handleMouseOver('B Street',['bStreet','bStreet2'],'bStreetText')}} onMouseOut={() => {handleMouseOut(['bStreet','bStreet2'],'bStreetText')}} id="bStreet2" points="541,350 575,350 575,493 541,493"/>
                <polygon onMouseOver={() => {handleMouseOver('B Teepee',['bTeepee'],'bTeepeeText')}} onMouseOut={() => {handleMouseOut(['bTeepee'],'bTeepeeText')}} id="bTeepee" points="439,273 466,273 466,348 439,348"/>
                <polygon onMouseOver={() => {handleMouseOver('Top B',['topBOnslaught'],'topBOnslaughtText')}} onMouseOut={() => {handleMouseOut(['topBOnslaught'],'topBOnslaughtText')}} id="topBOnslaught" points="575,275 481,275 481,349 575,349"/>
                <polygon onMouseOver={() => {handleMouseOver('Basement',['basement','basement2'],'basementText')}} onMouseOut={() => {handleMouseOut(['basement','basement2'],'basementText')}} id="basement" points="285,77 285,101 436,101 436,77"/>
                <polygon onMouseOver={() => {handleMouseOver('Basement',['basement','basement2'],'basementText')}} onMouseOut={() => {handleMouseOut(['basement','basement2'],'basementText')}} id="basement2" points="285,548 285,525 433,525 433,548"/>
                <polygon onMouseOver={() => {handleMouseOver('Courtyard',['courtyardOnslaught','courtyardOnslaught2'],'courtyardOnslaughtText')}} onMouseOut={() => {handleMouseOut(['courtyardOnslaught','courtyardOnslaught2'],'courtyardOnslaughtText')}} id="courtyardOnslaught" points="283,142 435,142 435,242 283,242"/>
                <polygon onMouseOver={() => {handleMouseOver('Courtyard',['courtyardOnslaught','courtyardOnslaught2'],'courtyardOnslaughtText')}} onMouseOut={() => {handleMouseOut(['courtyardOnslaught','courtyardOnslaught2'],'courtyardOnslaughtText')}} id="courtyardOnslaught2" points="284,479 284,385 440,385 440,479"/>
                <polygon onMouseOver={() => {handleMouseOver('Flag',['flag','flag2'],'flagText')}} onMouseOut={() => {handleMouseOut(['flag','flag2'],'flagText')}} id="flag" points="345,51 378,51 378,77 345,77"/>
                <polygon onMouseOver={() => {handleMouseOver('Flag',['flag','flag2'],'flagText')}} onMouseOut={() => {handleMouseOut(['flag','flag2'],'flagText')}} id="flag2" points="374,548 346,548 346,574 374,574"/>
                <polygon onMouseOver={() => {handleMouseOver('Garage Door',['garageDoor','garageDoor2'],'garageDoorText')}} onMouseOut={() => {handleMouseOut(['garageDoor','garageDoor2'],'garageDoorText')}} id="garageDoor" points="583,120 595,120 595,189 583,189"/>
                <polygon onMouseOver={() => {handleMouseOver('Garage Door',['garageDoor','garageDoor2'],'garageDoorText')}} onMouseOut={() => {handleMouseOut(['garageDoor','garageDoor2'],'garageDoorText')}} id="garageDoor2" points="583,442 595,442 595,512 583,512"/>
                <polygon onMouseOver={() => {handleMouseOver('Shield',['shield','shield2'],'shieldText')}} onMouseOut={() => {handleMouseOut(['shield','shield2'],'shieldText')}} id="shield" points="368,22 351,22 351,39 368,39"/>
                <polygon onMouseOver={() => {handleMouseOver('Shield',['shield','shield2'],'shieldText')}} onMouseOut={() => {handleMouseOut(['shield','shield2'],'shieldText')}} id="shield2" points="377,582 343,582 343,597 377,597"/>
                <polygon onMouseOver={() => {handleMouseOver('Top Mid',['topMid'],'topMidText')}} onMouseOut={() => {handleMouseOut(['topMid'],'topMidText')}} id="topMid" points="382,290 335,290 335,336 382,336"/>
                <polygon onMouseOver={() => {handleMouseOver('Bottom Mid',['bottomMid'],'bottomMidText')}} onMouseOut={() => {handleMouseOut(['bottomMid'],'bottomMidText')}} id="bottomMid" points="337,305 379,305 379,318 337,318"/>
                <polygon onMouseOver={() => {handleMouseOver('A Pocket',['aPocket','aPocket2'],'aPocketText')}} onMouseOut={() => {handleMouseOut(['aPocket','aPocket2'],'aPocketText')}} id="aPocket" points="302,75 316,75 316,99 302,99"/>
                <polygon onMouseOver={() => {handleMouseOver('A Pocket',['aPocket','aPocket2'],'aPocketText')}} onMouseOut={() => {handleMouseOut(['aPocket','aPocket2'],'aPocketText')}} id="aPocket2" points="316,526 302,526 302,549 316,549"/>
                <polygon onMouseOver={() => {handleMouseOver('A Tunnel',['aTunnel'],'aTunnelText')}} onMouseOut={() => {handleMouseOut(['aTunnel'],'aTunnelText')}} id="aTunnel" points="148,274 180,274 180,347 148,347"/>
                <polygon onMouseOver={() => {handleMouseOver('B Pocket',['bPocket','bPocket2'],'bPocketText')}} onMouseOut={() => {handleMouseOut(['bPocket','bPocket2'],'bPocketText')}} id="bPocket" points="419,76 407,76 407,98 419,98"/>
                <polygon onMouseOver={() => {handleMouseOver('B Pocket',['bPocket','bPocket2'],'bPocketText')}} onMouseOut={() => {handleMouseOut(['bPocket','bPocket2'],'bPocketText')}} id="bPocket2" points="406,526 419,526 419,548 406,548"/>
                <polygon onMouseOver={() => {handleMouseOver('B Tunnel',['bTunnel'],'bTunnelText')}} onMouseOut={() => {handleMouseOut(['bTunnel'],'bTunnelText')}} id="bTunnel" points="575,276 541,276 541,348 575,348"/>
            </svg>
            <Screenshot 
                Map={'Onslaught'}
                Screenshot={screens}
            />
        </div>
    );
}

export default Onslaught;
