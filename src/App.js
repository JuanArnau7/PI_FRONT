import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom' ;
import LandingPage from './components/LandingPage/index';
import Home from './components/Home';
// import Card from './components/Card';
import Detalle from './components/Detail';
import Formulario from './components/Form';
function App() {
  return (
    <div>
    <BrowserRouter>

    <Switch>

      <Route exact path="/"><LandingPage/></Route>
      <Route exact path='/home'><Home/></Route>
      <Route path='/detail/:id'><Detalle/></Route>
      <Route path='/create'><Formulario/></Route>
      {/* <Route exact path='/card'><Card/></Route> */}
      {/* <Route path="/home" component={Home}/> */}
    </Switch>
      
    </BrowserRouter>
    </div>

  );
}
export default App;
