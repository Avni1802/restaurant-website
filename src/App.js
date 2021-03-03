import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Menu from './components/menu';
import Home from './components/Home';
import Reservation from './components/Reservation';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/reservation" component={Reservation}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
