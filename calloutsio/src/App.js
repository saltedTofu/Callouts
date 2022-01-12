import './App.css';
import './components/Construct/construct.css';
import './components/Guardian/guardian.css';
import './components/Narrows/narrows.css';
import './components/Amplified/amplified.css';
import './components/Heretic/heretic.css';
import './components/Onslaught/onslaught.css';
import './components/ThePit/thePit.css';
import Header from './components/header';
import Nav from './components/nav';

function App() {
  return (
    <div className="container">
        <Header />
        <Nav />
    </div>
  );
}
export default App;