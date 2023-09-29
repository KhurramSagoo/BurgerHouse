import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/Header';
import './main/Main'
import './App.css'
import Main from './main/Main';
import BurgerLayer from './main/BurgerLayer';
import Discover from './main/Discover';
import Last from './main/Last'
import Fahad from './Fahad';
const App = () => {
  return (

    <>
      <Header />
      <Main />
      <BurgerLayer />
      <Discover />
      <Fahad />
      <Last />
    </>


  )
}

export default App