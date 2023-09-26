import React from 'react';
import Header from './Header';
import '../styles/components/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
