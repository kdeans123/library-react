import './index.css';
import Nav from "./components/Nav";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Home />
        <Footer />
      </div>
    </Router>

  );
}

export default App;

// first import BrowserRouter and rename it as Router, then we need to wrap this app in a router
//  then we cut out what is not repeating (so we leave Nav, and Footer), and then we create new src folder and name it pages 
// and inside that folder we create Home.jsx and paste all the components there: Landing, highlights, featured, discounted, explore and wrap it in a fragment
