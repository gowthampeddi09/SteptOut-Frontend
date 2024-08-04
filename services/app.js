import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/user" component={UserDashboard} />
      </Switch>
    </Router>
  );
}

export default App;

