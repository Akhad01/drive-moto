import React from 'react'

import 'react-tabs/style/react-tabs.css'
import './ProductsSection.scss'

import ProductsTabs from './ProductsTabs'

const ProductsSection = () => {
  return (
    <section className="products page-section">
      <div className="container">
        <div className="products__inner">
          <h3 className="product__title">Популярные товары</h3>
          <div className="tabs__wrapper">
            <ProductsTabs />
            <div className="product__more">
              <a className="product__more-link" href="/#">
                Показать еще
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
