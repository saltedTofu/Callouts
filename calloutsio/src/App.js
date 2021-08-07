import './App.css';
import './construct.css';
import './guardian.css';
import './narrows.css';
import './amplified.css';
import './heretic.css';
import './onslaught.css';
import './thePit.css';
import Header from './components/header';
import HaloThree from './components/Halo3/halothree';
import haloBackground from './components/halo.jpg';

function App() {
  return (
    <div className="container" style={{ backgroundImage: `url(${haloBackground})` }}>
        <Header />
        <HaloThree />
    </div>
  );
}
export default App;