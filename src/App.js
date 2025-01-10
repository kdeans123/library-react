import './index.css';
import Nav from "./components/Nav";
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books}/>
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
//  we add <Route/> - route has a prop that it can pass, and it is called path (path of the component that we are going to pass) 
// and then we just need to pass the component: component={Home} 
// you want to add word "exact" so that the url matches only home page and not any other page that has slash forward 

// then we import books into our router, so lets create a new route