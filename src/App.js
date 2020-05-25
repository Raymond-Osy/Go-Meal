import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/main.css'
import Homepage from './pages/Home';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import AddRestaurant from './pages/Auth/AddRestaurant';
import RestaurantDashboard from './pages/Restaurants/restaurantDashboard';
import CustomerDashboard from './pages/Customers/customersDashboard';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/signin" component={Signin} />
      <Route exact path="/signup" component={Signup} />

      {/* Private routes for authenticated users */}
      <Route exact path="/restaurant-dashboard" component={RestaurantDashboard} />
      <Route exact path="/customers-dashboard" component={CustomerDashboard} />
      <Route exact path="/add-restaurant" component={AddRestaurant} />
    </Switch>
  </div>
)

export default App;
