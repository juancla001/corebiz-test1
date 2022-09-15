import React, { useEffect, useState } from 'react';
import { fetchToApi } from '../helpers/fetchToApi';
import { Card } from './Card';
import { Dots } from './Dots';

export const Main = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const url = 'https://corebiz-test.herokuapp.com/api/v1/products';
    fetchToApi(url).then(data => setProducts(data))
  }, [])


  return (
    <div className="main-container">
      <div className="main-gallery">
        <div className="main-text-container">
          <h3>Más Vendidos</h3>
          <div></div>
        </div>
        <div className="main-gallery-carousel">
          <i className="main-gallery-arrow--left fas fa-chevron-left"></i>
          <div className="main-gallery-card">
            {
              products.map(product => {
              return(
                <Card 
                img={product.imageUrl}
                title={product.productName}
                listPrice={product.listPrice}
                price={product.price}
                installments={product.installments}
                key={product.productId}
                stars={product.stars}
                id={product.productId}
                />
              )
              })
            }
          </div>
          <i className="main-gallery-arrow--right fas fa-chevron-right"></i>
        </div>
      </div>
      <div className="main-dots">
        <Dots initState={true}/>
        <Dots />
        <Dots />
        <Dots />
      </div>
    </div>
  )
}
