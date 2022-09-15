import React from 'react'

export const ShoppingCart = () => {
  const inCart = JSON.parse(localStorage.getItem('cart'));

  return (
    <div className="navbar-cart-number">
      {
        inCart
        ? <span>{ inCart }</span>
        : <span> 0 </span>
      }
    </div>
  )
}
