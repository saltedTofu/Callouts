import React from 'react';
import Guardian from './Guardian/guardian';
import Construct from './Construct/construct';
import Narrows from './Narrows/narrows';
import Amplified from './Amplified/amplified';
import Heretic from './Heretic/heretic';
import ThePit from './ThePit/thePit';
import Onslaught from './Onslaught/onslaught';

class Nav extends React.Component{
    
    render(){
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
                <br></br>
                <a name="amplifiedLink"></a>
                <br></br>
                <Amplified />
                <a name="constructLink"></a>
                <br></br>
                <Construct />
                <a name="guardianLink"></a>
                <br></br>
                <Guardian />
                <a name="hereticLink"></a>
                <br></br>
                <Heretic />
                <a name="narrowsLink"></a>
                <br></br>
                <Narrows />
                <a name="onslaughtLink"></a>
                <br></br>
                <Onslaught />
                <a name="thePitLink"></a>
                <br></br>
                <ThePit />
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
}

export default Nav;