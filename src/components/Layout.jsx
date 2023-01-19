import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';

const Layout = () => (
  <>
    <Navbar />
    <div className="container">
      <Outlet />
    </div>
  </>
);

export default Layout;
