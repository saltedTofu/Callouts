import React from 'react';
import Guardian from '../Guardian/guardian';
import Construct from '../Construct/construct';
import Narrows from '../Narrows/narrows';
import Amplified from '../Amplified/amplified';
import Heretic from '../Heretic/heretic';
import ThePit from '../ThePit/thePit';
import Onslaught from '../Onslaught/onslaught';

function Nav(){
    const turnGreen = (div) => {
        div.style.fill="rgba(0, 255, 0, 0.5)";
    }
    const returnColor = (div) => {
        div.style.fill="rgba(0, 0, 0, 0)";
    }
    const textGreen = (textP) => {
        textP.style.color="rgba(0, 255, 0, 1)"
    }
    const returnTextColor = (textP) => {
        textP.style.color="white";
    }
    return(
        <div className="haloThreeMap">
            <div className="mapsList">
                <a id="amplified" href="#amplifiedLink">Amplified</a>
                <a id="construct" href="#constructLink">Construct</a>
                <a id="guardian" href="#guardianLink">Guardian</a>
                <a id="heretic" href="#hereticLink">Heretic</a>
                <a id="narrows" href="#narrowsLink">Narrows</a>
                <a id="onslaught" href="#onslaughtLink">Onslaught</a>
                <a id="thePit" href="#thePitLink">The Pit</a>
            </div>
            <br></br>
            <a name="amplifiedLink" href="#amplifiedLink">
                <br></br>
            </a>
            <Amplified 
                turnGreen={turnGreen}
                returnColor={returnColor}
                textGreen={textGreen}
                returnTextColor={returnTextColor}
            />
            <br></br>
            <a name="constructLink" href="#amplifiedLink">
                <br></br>
            </a>
            <Construct 
                turnGreen={turnGreen}
                returnColor={returnColor}
                textGreen={textGreen}
                returnTextColor={returnTextColor}
            />
            <br></br>
            <a name="guardianLink" href="#guardianLink"> 
                <br></br>
            </a>
            <Guardian 
                turnGreen={turnGreen}
                returnColor={returnColor}
                textGreen={textGreen}
                returnTextColor={returnTextColor}
            />
            <a name="hereticLink" href="#hereticLink">
                <br></br>
            </a>
            <Heretic 
                turnGreen={turnGreen}
                returnColor={returnColor}
                textGreen={textGreen}
                returnTextColor={returnTextColor}
            />
            <a name="narrowsLink" href="#narrowsLink">
                <br></br>
            </a>
            <Narrows 
                turnGreen={turnGreen}
                returnColor={returnColor}
                textGreen={textGreen}
                returnTextColor={returnTextColor}
            />
            <a name="onslaughtLink" href="#onslaughtLink">
                <br></br>
            </a>
            <Onslaught 
                turnGreen={turnGreen}
                returnColor={returnColor}
                textGreen={textGreen}
                returnTextColor={returnTextColor}
            />
            <a name="thePitLink" href="#thePitLink">
                <br></br>
            </a>
            <ThePit 
                turnGreen={turnGreen}
                returnColor={returnColor}
                textGreen={textGreen}
                returnTextColor={returnTextColor}
            />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default Nav;