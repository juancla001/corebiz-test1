import React from 'react'
import { ShoppingCart } from './ShoppingCart'
export const Navbar = () => {
  return (
    <div className="navbar-container">
      <img className="navbar-img" src="/assets/corebiz-logo.svg" alt="Corebiz" />
      <div className="navbar-input-container">
        <input className="navbar-input" type="text" name="search" id="search" placeholder="¿Qué estás buscando?"/>
        <i className="fas fa-search navbar-ico-size"></i>
      </div>
      <input type="checkbox" name="toggle" id="toggle"></input>
      <div className="navbar-ham">
        <label htmlFor="toggle">
          <i className="navbar-ham-ico fas fa-bars"></i>
        </label>
      </div>
      <div className={`navbar-user-container`}>
        <i className="far fa-user navbar-ico-size"></i>
        <p className="navbar-user-text">Mi Cuenta</p>
      </div>
      <div className="navbar-cart-container">
        <div>
          <img className="navbar-cart navbar-ico-size" src="/assets/carrito-de-compras.svg" alt="Compras" />
        </div>
        <ShoppingCart />
      </div>
    </div>
  )
}
