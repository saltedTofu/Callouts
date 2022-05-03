import React, {useState} from 'react';
import Screenshot from '../ScreenShots/ScreenShots';

function Amplified({turnGreen,returnColor,textGreen,returnTextColor}) {
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
        <div data-testid="amplifiedTest" className="amplifiedFullGrid">
            <h1 className="mapTitleAmplified" data-testid="mapTitleAmplifiedTest">Amplified</h1>
            <div className="calloutsList" id="amplifiedCallouts" data-testid="calloutsListTest">
                <p onMouseOver={() => {handleMouseOver('Top Mid',['topMidAmplified'],'topMidAmplifiedText')}} onMouseOut={() => {handleMouseOut(['topMidAmplified'],'topMidAmplifiedText')}} id="topMidAmplifiedText">Top Mid</p>
                <p onMouseOver={() => {handleMouseOver('Bottom Mid',['bottomMidAmplified'],'bottomMidAmplifiedText')}} onMouseOut={() => {handleMouseOut(['bottomMidAmplified'],'bottomMidAmplifiedText')}} id="bottomMidAmplifiedText">Bottom Mid</p>
                <p onMouseOver={() => {handleMouseOver('Gold 1',['gold1Amplified'],'gold1AmplifiedText')}} onMouseOut={() => {handleMouseOut(['gold1Amplified'],'gold1AmplifiedText')}} id="gold1AmplifiedText">Gold 1</p>
                <p onMouseOver={() => {handleMouseOver('Gold 2',['gold2Amplified'],'gold2AmplifiedText')}} onMouseOut={() => {handleMouseOut(['gold2Amplified'],'gold2AmplifiedText')}} id="gold2AmplifiedText">Gold 2</p>
                <p onMouseOver={() => {handleMouseOver('Gold 3',['gold3Amplified'],'gold3AmplifiedText')}} onMouseOut={() => {handleMouseOut(['gold3Amplified'],'gold3AmplifiedText')}} id="gold3AmplifiedText">Gold 3</p>
                <p onMouseOver={() => {handleMouseOver('Pink 1',['pink1Amplified'],'pink1AmplifiedText')}} onMouseOut={() => {handleMouseOut(['pink1Amplified'],'pink1AmplifiedText')}} id="pink1AmplifiedText">Pink 1</p>
                <p onMouseOver={() => {handleMouseOver('Pink 2',['pink2Amplified'],'pink2AmplifiedText')}} onMouseOut={() => {handleMouseOut(['pink2Amplified'],'pink2AmplifiedText')}} id="pink2AmplifiedText">Pink 2</p>
                <p onMouseOver={() => {handleMouseOver('Pink 3',['pink3Amplified'],'pink3AmplifiedText')}} onMouseOut={() => {handleMouseOut(['pink3Amplified'],'pink3AmplifiedText')}} id="pink3AmplifiedText">Pink 3</p>
                <p onMouseOver={() => {handleMouseOver('Pink Plat',['pinkPlat'],'pinkPlatText')}} onMouseOut={() => {handleMouseOut(['pinkPlat'],'pinkPlatText')}} id="pinkPlatText">Pink Plat</p>
                <p onMouseOver={() => {handleMouseOver('Red and Blue 1',['red1Amp','blue1Amp'],'redBlue1AmpText')}} onMouseOut={() => {handleMouseOut(['red1Amp','blue1Amp'],'redBlue1AmpText')}} id="redBlue1AmpText">Red/Blue 1</p>
                <p onMouseOver={() => {handleMouseOver('Red and Blue 2',['red2Amp','blue2Amp'],'redBlue2AmpText')}} onMouseOut={() => {handleMouseOut(['red2Amp','blue2Amp'],'redBlue2AmpText')}} id="redBlue2AmpText">Red/Blue 2</p>
                <p onMouseOver={() => {handleMouseOver('Couch',['couch','couch2'],'couchText')}} onMouseOut={() => {handleMouseOut(['couch','couch2'],'couchText')}} id="couchText">Couch</p>
                <p onMouseOver={() => {handleMouseOver('Courtyard',['courtyard'],'courtyardText')}} onMouseOut={() => {handleMouseOut(['courtyard'],'courtyardText')}} id="courtyardText">Courtyard</p>
                <p onMouseOver={() => {handleMouseOver('Fence',['fence','fence2'],'fenceText')}} onMouseOut={() => {handleMouseOut(['fence','fence2'],'fenceText',)}} id="fenceText">Fence</p>
                <p onMouseOver={() => {handleMouseOver('Gold Bubble',['goldBubble','goldBubble2'],'goldBubbleText')}} onMouseOut={() => {handleMouseOut(['goldBubble','goldBubble2'],'goldBubbleText')}} id="goldBubbleText">Gold Bubble</p>
                <p onMouseOver={() => {handleMouseOver('Gold Jump Up',['goldJumpUp','goldJumpUp2'],'goldJumpUpText')}} onMouseOut={() => {handleMouseOut(['goldJumpUp','goldJumpUp2'],'goldJumpUpText')}} id="goldJumpUpText">Gold Jump Up</p>
                <p onMouseOver={() => {handleMouseOver('Gold Pocket',['goldPocket','goldPocket2'],'goldPocketText')}} onMouseOut={() => {handleMouseOut(['goldPocket','goldPocket2'],'goldPocketText')}} id="goldPocketText">Gold Pocket</p>
                <p onMouseOver={() => {handleMouseOver('Gold Sign',['goldSign','goldSign2'],'goldSignText')}} onMouseOut={() => {handleMouseOut(['goldSign','goldSign2'],'goldSignText')}} id="goldSignText">Gold Sign</p>
                <p onMouseOver={() => {handleMouseOver('Gold Tower',['goldTower','goldTower2'],'goldTowerText')}} onMouseOut={() => {handleMouseOut(['goldTower','goldTower2'],'goldTowerText')}} id="goldTowerText">Gold Tower</p>
                <p onMouseOver={() => {handleMouseOver('House',['house','house2'],'houseText')}} onMouseOut={() => {handleMouseOut(['house','house2'],'houseText')}} id="houseText">House</p>
                <p onMouseOver={() => {handleMouseOver('Pink Bubble',['pinkBubble','pinkBubble2'],'pinkBubbleText')}} onMouseOut={() => {handleMouseOut(['pinkBubble','pinkBubble2'],'pinkBubbleText')}} id="pinkBubbleText">Pink Bubble</p>
                <p onMouseOver={() => {handleMouseOver('Pink Jump Up',['pinkJumpUp','pinkJumpUp2'],'pinkJumpUpText')}} onMouseOut={() => {handleMouseOut(['pinkJumpUp','pinkJumpUp2'],'pinkJumpUpText')}} id="pinkJumpUpText">Pink Jump Up</p>
                <p onMouseOver={() => {handleMouseOver('Pink Pocket',['pinkPocket','pinkPocket2'],'pinkPocketText')}} onMouseOut={() => {handleMouseOut(['pinkPocket','pinkPocket2'],'pinkPocketText')}} id="pinkPocketText">Pink Pocket</p>
                <p onMouseOver={() => {handleMouseOver('Pink Tower',['pinkTower','pinkTower2'],'pinkTowerText')}} onMouseOut={() => {handleMouseOut(['pinkTower','pinkTower2'],'pinkTowerText')}} id="pinkTowerText">Pink Tower</p>
                <p onMouseOver={() => {handleMouseOver('Pink Shield',['pinkShield','pinkShield2'],'pinkShieldText')}} onMouseOut={() => {handleMouseOut(['pinkShield','pinkShield2'],'pinkShieldText')}} id="pinkShieldText">Pink Shield</p>
                <p onMouseOver={() => {handleMouseOver('Pink Sign',['pinkSign','pinkSign2'],'pinkSignText')}} onMouseOut={() => {handleMouseOut(['pinkSign','pinkSign2'],'pinkSignText')}} id="pinkSignText">Pink Sign</p>
                <p onMouseOver={() => {handleMouseOver('Plat',['plat','plat2'],'platText')}} onMouseOut={() => {handleMouseOut(['plat','plat2'],'platText')}} id="platText">Plat</p>
                <p onMouseOver={() => {handleMouseOver('Street',['street','street2'],'streetText')}} onMouseOut={() => {handleMouseOut(['street','street2'],'streetText')}} id="streetText">Street</p>
            </div>
            <svg id="amplifiedMap" width="750px" height="625px" data-testid="amplifiedMapTest">
                <polygon onMouseOver={() => {handleMouseOver('Top Mid',['topMidAmplified'],'topMidAmplifiedText')}} onMouseOut={() => {handleMouseOut(['topMidAmplified'],'topMidAmplifiedText')}}  id="topMidAmplified" points="411,302 411,323 316,323 316,302" />
                <polygon onMouseOver={() => {handleMouseOver('Bottom Mid',['bottomMidAmplified'],'bottomMidAmplifiedText')}} onMouseOut={() => {handleMouseOut(['bottomMidAmplified'],'bottomMidAmplifiedText')}} id="bottomMidAmplified" points="315,299 412,299 412,325 315,325" />          
                <polygon onMouseOver={() => {handleMouseOver('Gold 2',['gold2Amplified'],'gold2AmplifiedText')}} onMouseOut={() => {handleMouseOut(['gold2Amplified'],'gold2AmplifiedText')}}  id="gold2Amplified" points="149,286 240,286 240,336 149,336"/>
                <polygon onMouseOver={() => {handleMouseOver('Gold 3',['gold3Amplified'],'gold3AmplifiedText')}} onMouseOut={() => {handleMouseOut(['gold3Amplified'],'gold3AmplifiedText')}}  id="gold3Amplified" points="181,249 240,249 254,239 257,239 284,260 240,288 240,340 243,340 284,361 257,387 241,375 181,375"/>
                <polygon onMouseOver={() => {handleMouseOver('Gold 1',['gold1Amplified'],'gold1AmplifiedText')}} onMouseOut={() => {handleMouseOut(['gold1Amplified'],'gold1AmplifiedText')}} id="gold1Amplified" points="240,299 180,299 180,325 240,326"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink 1',['pink1Amplified'],'pink1AmplifiedText')}} onMouseOut={() => {handleMouseOut(['pink1Amplified'],'pink1AmplifiedText')}}  id="pink1Amplified" points="508,299 479,299 479,330 508,330"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink 3',['pink3Amplified'],'pink3AmplifiedText')}} onMouseOut={() => {handleMouseOut(['pink3Amplified'],'pink3AmplifiedText')}}  id="pink3Amplified" points="508,251 498,261 498,262 511,275 511,347 497,361 508,374 575,374 575,251"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink 2',['pink2Amplified'],'pink2AmplifiedText')}} onMouseOut={() => {handleMouseOut(['pink2Amplified'],'pink2AmplifiedText')}}  id="pink2Amplified" points="575,251 539,251 539,299 511,299 511,330 539,330 539,374 575,374"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink Plat',['pinkPlat'],'pinkPlatText')}} onMouseOut={() => {handleMouseOut(['pinkPlat'],'pinkPlatText')}}  id="pinkPlat" points="436,302 451,290 477,311 451,336 436,323"/>
                <polygon onMouseOver={() => {handleMouseOver('Red and Blue 1',['red1Amp','blue1Amp'],'redBlue1AmpText')}} onMouseOut={() => {handleMouseOut(['red1Amp','blue1Amp'],'redBlue1AmpText')}} id="red1Amp" points="258,69 258,87 480,87 480,69"/>
                <polygon onMouseOver={() => {handleMouseOver('Red and Blue 1',['red1Amp','blue1Amp'],'redBlue1AmpText')}} onMouseOut={() => {handleMouseOut(['red1Amp','blue1Amp'],'redBlue1AmpText')}} id="blue1Amp" points="258,541 258,560 479,560 479,541"/>
                <polygon onMouseOver={() => {handleMouseOver('Red and Blue 2',['red2Amp','blue2Amp'],'redBlue2AmpText')}} onMouseOut={() => {handleMouseOut(['red2Amp','blue2Amp'],'redBlue2AmpText')}} id="red2Amp" points="258,88 258,105 308,105 308,124 448,124 448,105 480,105 480,88"/>
                <polygon onMouseOver={() => {handleMouseOver('Red and Blue 2',['red2Amp','blue2Amp'],'redBlue2AmpText')}} onMouseOut={() => {handleMouseOut(['red2Amp','blue2Amp'],'redBlue2AmpText')}} id="blue2Amp" points="258,523 307,523 307,501 442,501 442,523 479,523 479,540 258,540"/>
                <polygon onMouseOver={() => {handleMouseOver('Couch',['couch','couch2'],'couchText')}} onMouseOut={() => {handleMouseOut(['couch','couch2'],'couchText')}}  id="couch" points="331,298 316,276 329,260 393,260 407,276 392,298"/>
                <polygon onMouseOver={() => {handleMouseOver('Couch',['couch','couch2'],'couchText')}} onMouseOut={() => {handleMouseOut(['couch','couch2'],'couchText')}}  id="couch2" points="331,327 317,347 329,361 392,361 407,347 392,327"/>
                <polygon onMouseOver={() => {handleMouseOver('Courtyard',['courtyard'],'courtyardText')}} onMouseOut={() => {handleMouseOut(['courtyard'],'courtyardText')}}  id="courtyard" points="273,140 273,248 286,259 480,259 480,139 449,139 449,128 302,128 302,140"/>
                <polygon onMouseOver={() => {handleMouseOver('Courtyard',['courtyard'],'courtyardText')}} onMouseOut={() => {handleMouseOut(['courtyard'],'courtyardText')}}  id="courtyard2" points="272,376 272,484 303,484 303,498 448,498 448,482 480,482 480,362 387,362"/>
                <polygon onMouseOver={() => {handleMouseOver('Fence',['fence','fence2'],'fenceText')}} onMouseOut={() => {handleMouseOut(['fence','fence2'],'fenceText',)}}  id="fence" points="181,142 149,142 149,163 181,163"/>
                <polygon onMouseOver={() => {handleMouseOver('Fence',['fence','fence2'],'fenceText')}} onMouseOut={() => {handleMouseOut(['fence','fence2'],'fenceText',)}}  id="fence2" points="180,460 149,460 149,481 180,481"/>
                <polygon onMouseOver={() => {handleMouseOver('Gold Bubble',['goldBubble','goldBubble2'],'goldBubbleText')}} onMouseOut={() => {handleMouseOut(['goldBubble','goldBubble2'],'goldBubbleText')}} id="goldBubble" points="208,50 182,50 182,101 208,101"/>
                <polygon onMouseOver={() => {handleMouseOver('Gold Bubble',['goldBubble','goldBubble2'],'goldBubbleText')}} onMouseOut={() => {handleMouseOut(['goldBubble','goldBubble2'],'goldBubbleText')}} id="goldBubble2" points="210,525 182,525 182,573 210,573"/>
                <polygon onMouseOver={() => {handleMouseOver('Gold Jump Up',['goldJumpUp','goldJumpUp2'],'goldJumpUpText')}} onMouseOut={() => {handleMouseOut(['goldJumpUp','goldJumpUp2'],'goldJumpUpText')}}  id="goldJumpUp" points="271,126 299,126 299,137 271,137"/>
                <polygon onMouseOver={() => {handleMouseOver('Gold Jump Up',['goldJumpUp','goldJumpUp2'],'goldJumpUpText')}} onMouseOut={() => {handleMouseOut(['goldJumpUp','goldJumpUp2'],'goldJumpUpText')}}  id="goldJumpUp2" points="272,487 300,487 300,500 272,500"/>
                <polygon onMouseOver={() => {handleMouseOver('Gold Pocket',['goldPocket','goldPocket2'],'goldPocketText')}} onMouseOut={() => {handleMouseOut(['goldPocket','goldPocket2'],'goldPocketText')}}  id="goldPocket" points="258,106 307,106 307,114 258,114"/>
                <polygon onMouseOver={() => {handleMouseOver('Gold Pocket',['goldPocket','goldPocket2'],'goldPocketText')}} onMouseOut={() => {handleMouseOut(['goldPocket','goldPocket2'],'goldPocketText')}}  id="goldPocket2" points="258,512 306,512 306,522 258,522"/>
                <polygon onMouseOver={() => {handleMouseOver('Gold Sign',['goldSign','goldSign2'],'goldSignText')}} onMouseOut={() => {handleMouseOut(['goldSign','goldSign2'],'goldSignText')}}  id="goldSign" points="268,174 272,174 272,178 244,201 240,201 240,197"/>
                <polygon onMouseOver={() => {handleMouseOver('Gold Sign',['goldSign','goldSign2'],'goldSignText')}} onMouseOut={() => {handleMouseOut(['goldSign','goldSign2'],'goldSignText')}}  id="goldSign2" points="245,424 241,424 241,429 267,450 271,450 271,446"/>
                <polygon onMouseOver={() => {handleMouseOver('Gold Tower',['goldTower','goldTower2'],'goldTowerText')}} onMouseOut={() => {handleMouseOut(['goldTower','goldTower2'],'goldTowerText')}}  id="goldTower" points="307,115 271,115 271,125 307,125"/>
                <polygon onMouseOver={() => {handleMouseOver('Gold Tower',['goldTower','goldTower2'],'goldTowerText')}} onMouseOut={() => {handleMouseOut(['goldTower','goldTower2'],'goldTowerText')}}  id="goldTower2" points="272,501 306,501 306,511 272,511"/>
                <polygon onMouseOver={() => {handleMouseOver('House',['house','house2'],'houseText')}} onMouseOut={() => {handleMouseOut(['house','house2'],'houseText')}}  id="house" points="481,176 510,176 510,200 481,200"/>
                <polygon onMouseOver={() => {handleMouseOver('House',['house','house2'],'houseText')}} onMouseOut={() => {handleMouseOut(['house','house2'],'houseText')}}  id="house2" points="481,425 510,425 510,449 481,449"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink Bubble',['pinkBubble','pinkBubble2'],'pinkBubbleText')}} onMouseOut={() => {handleMouseOut(['pinkBubble','pinkBubble2'],'pinkBubbleText')}}  id="pinkBubble" points="482,23 539,23 539,50 482,50"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink Bubble',['pinkBubble','pinkBubble2'],'pinkBubbleText')}} onMouseOut={() => {handleMouseOut(['pinkBubble','pinkBubble2'],'pinkBubbleText')}}  id="pinkBubble2" points="481,575 540,575 540,596 481,596"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink Jump Up',['pinkJumpUp','pinkJumpUp2'],'pinkJumpUpText')}} onMouseOut={() => {handleMouseOut(['pinkJumpUp','pinkJumpUp2'],'pinkJumpUpText')}}  id="pinkJumpUp" points="452,131 480,131 480,136 452,136"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink Jump Up',['pinkJumpUp','pinkJumpUp2'],'pinkJumpUpText')}} onMouseOut={() => {handleMouseOut(['pinkJumpUp','pinkJumpUp2'],'pinkJumpUpText')}}  id="pinkJumpUp2" points="451,485 479,485 479,491 451,491"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink Pocket',['pinkPocket','pinkPocket2'],'pinkPocketText')}} onMouseOut={() => {handleMouseOut(['pinkPocket','pinkPocket2'],'pinkPocketText')}}  id="pinkPocket" points="449,106 480,106 480,118 449,118"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink Pocket',['pinkPocket','pinkPocket2'],'pinkPocketText')}} onMouseOut={() => {handleMouseOut(['pinkPocket','pinkPocket2'],'pinkPocketText')}}  id="pinkPocket2" points="443,503 479,503 479,522 443,522"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink Tower',['pinkTower','pinkTower2'],'pinkTowerText')}} onMouseOut={() => {handleMouseOut(['pinkTower','pinkTower2'],'pinkTowerText')}}  id="pinkTower" points="449,119 480,119 480,130 452,130 452,125 449,125"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink Tower',['pinkTower','pinkTower2'],'pinkTowerText')}} onMouseOut={() => {handleMouseOut(['pinkTower','pinkTower2'],'pinkTowerText')}}  id="pinkTower2" points="451,492 479,492 479,502 443,502 443,501 451,501"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink Shield',['pinkShield','pinkShield2'],'pinkShieldText')}} onMouseOut={() => {handleMouseOut(['pinkShield','pinkShield2'],'pinkShieldText')}}  id="pinkShield" points="534,137 561,137 561,165 534,165"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink Shield',['pinkShield','pinkShield2'],'pinkShieldText')}} onMouseOut={() => {handleMouseOut(['pinkShield','pinkShield2'],'pinkShieldText')}}  id="pinkShield2" points="535,464 569,464 569,490 535,490"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink Sign',['pinkSign','pinkSign2'],'pinkSignText')}} onMouseOut={() => {handleMouseOut(['pinkSign','pinkSign2'],'pinkSignText')}}  id="pinkSign" points="500,76 495,76 495,80 509,101 513,101 513,96"/>
                <polygon onMouseOver={() => {handleMouseOver('Pink Sign',['pinkSign','pinkSign2'],'pinkSignText')}} onMouseOut={() => {handleMouseOut(['pinkSign','pinkSign2'],'pinkSignText')}}  id="pinkSign2" points="525,538 525,534 521,534 496,545 496,549 500,549"/>
                <polygon onMouseOver={() => {handleMouseOver('Plat',['plat','plat2'],'platText')}} onMouseOut={() => {handleMouseOut(['plat','plat2'],'platText')}}  id="plat" points="330,23 391,23 391,51 375,59 360,51 359,51 345,59 330,51"/>
                <polygon onMouseOver={() => {handleMouseOver('Plat',['plat','plat2'],'platText')}} onMouseOut={() => {handleMouseOut(['plat','plat2'],'platText')}}  id="plat2" points="330,596 330,574 346,568 360,574 376,567 391,574 391,596"/>
                <polygon onMouseOver={() => {handleMouseOver('Street',['street','street2'],'streetText')}} onMouseOut={() => {handleMouseOut(['street','street2'],'streetText')}}  id="street" points="539,168 576,168 576,249 539,249"/>
                <polygon onMouseOver={() => {handleMouseOver('Street',['street','street2'],'streetText')}} onMouseOut={() => {handleMouseOut(['street','street2'],'streetText')}}  id="street2" points="541,376 576,376 576,460 541,460"/>   
            </svg>
            <Screenshot 
                Map={'Amplified'}
                Screenshot={screens}
            />
        </div>
    );
}

export default Amplified;