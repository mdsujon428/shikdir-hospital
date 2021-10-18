

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home/Home';
import Services from './pages/Services/Services';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
// import Header from './pages/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/appointment'>
            <Appointment />
          </Route>
          {/* <Route path='/*'>
            <NotFound></NotFound>
          </Route> */}
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
