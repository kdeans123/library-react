import './index.css'
import Nav from './components/Nav';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'


library.add(faBars, faShoppingCart, faTimes)


function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
    </div>
  );
}

export default App;
