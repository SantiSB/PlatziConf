import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.css'

//Recibe un componente Children que será renderizado en medio del Header y el Footer como si fuera un Main o Body
const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {/* Renderizamos el elemento children que llega por parametro */}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;