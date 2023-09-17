import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import {Stack,Button } from 'react-bootstrap'
import Header from './components/Header';
import './main/Main'
import './App.css'
import Main from './main/Main';
import BurgerLayer from './main/BurgerLayer';
import Discover from './main/Discover';
const App = () => {
  return (
    
<>
<Header />
<Main />
<BurgerLayer />
<Discover />
</>


  )
}

export default App