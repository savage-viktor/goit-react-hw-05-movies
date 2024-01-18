import React from 'react';
import { NavLink, Outlet, Route } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Statistics">Statistics</NavLink>
        <NavLink to="/Database">Database</NavLink>
      </ul>
      <Outlet />
    </>
  );
};

export default SharedLayout;
