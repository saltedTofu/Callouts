import './App.css';
import './components/Construct/construct.css';
import './components/Guardian/guardian.css';
import './components/Narrows/narrows.css';
import './components/Amplified/amplified.css';
import './components/Heretic/heretic.css';
import './components/Onslaught/onslaught.css';
import './components/ThePit/thePit.css';
import './components/Header/header.css';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';

function App() {
  return (
    <div className="container">
        <Header />
        <Nav />
    </div>
  );
}
export default App;