import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from './components/Search';
import Login from './components/Login';
import PrivateRoute from "./privateroute";

function App() {

  return (

    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={Login} exact />
        <PrivateRoute exact={true} path="/home" component={Home} />
        <Route path="/search" component={Search} exact />

        <Route path="/search/q=:querry" component={Search} />
      </Switch>
    </Router>
  );

}

export default App;
