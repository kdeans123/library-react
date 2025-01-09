import './index.css'
import Nav from './components/Nav';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


library.add(faBars, faShoppingCart)


function App() {
  return (
    <div className="App">
      <Nav/>
    </div>
  );
}

export default App;
