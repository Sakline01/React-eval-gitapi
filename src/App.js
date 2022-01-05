import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from './components/Search';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const isAuth = useSelector(state => state.Auth);
  if (isAuth) {
    return (

      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} exact />
          <Route path="/login" component={Login} />
          <Route path="/search/q=:querry" component={Search} />
        </Switch>
      </Router>
    );
  }
  else {
    return (

      <Router>
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
