import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Onebox from './pages/Onebox';
import './styles.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/google-login" component={Onebox} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
