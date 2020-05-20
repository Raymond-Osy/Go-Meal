import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/main.css'
import Homepage from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import RestaurantDashboard from './pages/Restaurants/restaurantDashboard';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/restaurant-dashboard" component={RestaurantDashboard} />
    </Switch>
  </div>
)

export default App;
