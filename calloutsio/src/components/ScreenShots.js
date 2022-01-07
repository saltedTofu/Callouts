import screenShots from '../utils/images';

function ScreenShots(props) {
    const Screenshot = props.Screenshot;
    const Map = props.Map
    let screenSrc='';

    if(Map==='Amplified'){
      let array = screenShots.amplified;
      let stringToSearch = Screenshot.split(' ').join('');
      screenSrc = array.find((screenID) => screenID.includes(stringToSearch));
    }
    else if(Map==='Construct'){
      let array = screenShots.construct;
      let stringToSearch = Screenshot.split(' ').join('');
      screenSrc = array.find((screenID) => screenID.includes(stringToSearch));
    }
    else if(Map==='Guardian'){
        let array = screenShots.guardian;
        let stringToSearch = Screenshot.split(' ').join('');
        screenSrc = array.find((screenID) => screenID.includes(stringToSearch));
    }
    else if(Map==='Heretic'){
      let array = screenShots.heretic;
      let stringToSearch = Screenshot.split(' ').join('');
      screenSrc = array.find((screenID) => screenID.includes(stringToSearch));
    }
    else if(Map==='Narrows'){
      let array = screenShots.narrows;
      let stringToSearch = Screenshot.split(' ').join('');
      screenSrc = array.find((screenID) => screenID.includes(stringToSearch));
    }
    else if(Map==='Onslaught'){
      let array = screenShots.onslaught;
      let stringToSearch = Screenshot.split(' ').join('');
      screenSrc = array.find((screenID) => screenID.includes(stringToSearch));
    }
    else if(Map==='ThePit'){
      let array = screenShots.thePit;
      let stringToSearch = Screenshot.split(' ').join('');
      screenSrc = array.find((screenID) => screenID.includes(stringToSearch));
    }

    return (
      <div className="inGamePic">
        <h2 id="inGamePicText" className="inGamePicText">{Screenshot}</h2>
        <img id="ScreenShot" src={screenSrc}></img>
      </div>
    );
  }
  
  export default ScreenShots;
  