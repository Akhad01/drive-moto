import React from 'react'
import ProductsTabs from './ProductsTabs'

const ProductPopular = () => {
  return (
    <section className="products page-section">
      <div className="container">
        <div className="products__inner">
          <h3 className="product__title">С этим товаром покупают</h3>
          <div className="tabs__wrapper">
            <ProductsTabs />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPopular
