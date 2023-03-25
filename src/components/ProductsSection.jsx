import React, { useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import BasketWhite from '../assets/basket-white.svg'
import Product1 from '../assets/content/product-1.png'

import './ProductsSection.scss'

const ProductsSection = () => {
  const [isHearted, setIsHearted] = useState(false)

  const handleHeartClick = () => {
    setIsHearted(!isHearted)
  }

  console.log('click', isHearted)

  return (
    <section className="products">
      <div className="container">
        <div className="products__inner">
          <div className="tabs__wrapper">
            <Tabs>
              <TabList>
                <Tab>запчасти</Tab>
                <Tab>моторы</Tab>
                <Tab>шины</Tab>
                <Tab>электроника</Tab>
                <Tab>инструменты</Tab>
                <Tab>аксессуары</Tab>
              </TabList>
              <TabPanel>
                <div className="product-slider">
                  <div className="product-slider__item">
                    <div className="product-item__wrapper">
                      <button
                        className={`product-item__heart ${
                          isHearted ? 'product-item__heart--active' : ''
                        }`}
                        onClick={handleHeartClick}
                      ></button>
                      <button className="product-item__basket">
                        <img
                          src={BasketWhite}
                          alt=""
                          className="product-item__basket--img"
                        />
                      </button>
                      <a href="/#" className="product-item product-item--sale">
                        <p className="product-item__hover-text">
                          посмотреть товар
                        </p>
                        <img
                          src={Product1}
                          alt=""
                          className="product-item__img"
                        />
                        <h4 className="product-item__title">
                          Водонепроницаемый Рюкзак
                        </h4>
                        <p className="price product-item__price">9 800 ₽</p>
                      </a>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
