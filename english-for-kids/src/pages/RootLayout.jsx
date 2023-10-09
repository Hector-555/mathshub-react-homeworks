import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

function RootLayout() {
  return (
    <div className='main-wrapper'>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
