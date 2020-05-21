import React from "react";
import { Link } from "react-router-dom";
import pizza from "../../assets/svg/pizza.svg";

const Header = () => (
  <div>
    <Link to="/">
      <header className="flex items-center flex-shrink-0 text-red-500 mr-6">
        <img
          src={pizza}
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
        />
        <span className="font-semibold text-3xl tracking-tight">Go-Meal</span>
      </header>
      </Link>
  </div>
);

export default Header;
