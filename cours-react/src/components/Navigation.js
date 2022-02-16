import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  let activeClassName = "nav-active";
  return (
   <div className="navigation">
      <NavLink  to="/" className={({ isActive }) => isActive ? activeClassName : undefined }>
        Accueil
      </NavLink>
      <NavLink  to="/a-propos" className={({ isActive }) => isActive ? activeClassName : undefined }>
        A propos
      </NavLink>
   </div>
  );
};

export default Navigation;