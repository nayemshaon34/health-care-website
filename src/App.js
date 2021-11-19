import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import NotFound from './component/NotFound/NotFound';
import Login from './component/Login/Login';
import Services from './component/Services/Services';
import AboutUs from './component/AboutUs/AboutUs';
import Footer from './component/Footer/Footer';
import Detail from './component/Detail/Detail';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import AuthProvider from './contexts/AuthProvider';
import Signup from './component/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
          <Signup></Signup>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute path="/service/:serviceId">
              <Detail></Detail>
            </PrivateRoute>
          <PrivateRoute path="/detail">
              <Detail></Detail>
            </PrivateRoute>

          <Route path="*">
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
