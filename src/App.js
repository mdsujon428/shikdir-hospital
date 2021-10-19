

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home/Home';
import PrivateRoute from './pages/PrivateRouter/PrivateRoute';
import Services from './pages/Services/Services';
import SingleService from './pages/Services/SingleService/SingleService';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import SignIn from './pages/Sign-In/Sign-In/SignIn';
import NotFound from './pages/NotFound'
import Doctors from './pages/Doctors/Doctors';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/doctors'>
              <Doctors/>
            </Route>
            <Route exact path='/services'>
              <Services />
            </Route>
            <Route exact path='/services/:serviceId'>
              <SingleService />
            </Route>
            <Route path='/signin'>
              <SignIn></SignIn>
            </Route>
            <PrivateRoute path='/appointment'>
              <Appointment />
            </PrivateRoute>
            <Route path='/*'>
                <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
