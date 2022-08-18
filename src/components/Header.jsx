import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import AppContext from '../context/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const {cart} = state;

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
            <i className='fas fa-shopping-basket'/>
        </Link>
        {/* Si hay elementos en el carrito muestra el numero de elementos que hay */}
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
