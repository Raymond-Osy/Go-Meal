import React from "react";
import { Link } from "react-router-dom";

const RestaurantDashboard = () => (
  <div className="sidebar">
    <div className="center">
      <div className="nav-header">
        <a className="logo" href="index.html">
          Go
          <img src="assets/img/foodIcon.png" />
          <span className="meal">Meal</span>
        </a>
      </div>
      <div className="name-circle">
        <p>R</p>
      </div>
      <p className="d-none">Raymond</p>
    </div>

    <div className="sb-links">
      <a href="dashboard.html" className="active">
        Dashboard
      </a>
      <a href="meals.html">Meals</a>
      <a href="menu.html">Menu</a>
    </div>
  </div>
);

export default RestaurantDashboard;
