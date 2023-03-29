import React, { useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import 'react-tabs/style/react-tabs.css'

import BasketWhite from '../assets/basket-white.svg'
import Product1 from '../assets/content/product-1.png'

import './ProductsSection.scss'

const ProductsSection = () => {
  const [isHearted, setIsHearted] = useState(false)

  const handleHeartClick = () => {
    setIsHearted(!isHearted)
  }

  return (
    <section className="products page-section">
      <div className="container">
        <div className="products__inner">
          <h3 className="product__title">Популярные товары</h3>
          <div className="tabs__wrapper">
            <Tabs>
              <TabList className="products__tabs">
                <Tab className="products__tab">запчасти</Tab>
                <Tab className="products__tab">моторы</Tab>
                <Tab className="products__tab">шины</Tab>
                <Tab className="products__tab">электроника</Tab>
                <Tab className="products__tab">инструменты</Tab>
                <Tab className="products__tab">аксессуары</Tab>
              </TabList>
              <TabPanel>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={29}
                  slidesPerView={4}
                  navigation
                  loop
                  className="product-slider"
                >
                  <SwiperSlide className="swiper-slide">
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
                        <a className="product-item__notify-link" href="/#">
                          <span>Сообщить о поступлении</span>
                        </a>
                        <a href="/#" className="product-item">
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
                          <p className="product-item__notify-text">
                            нет в наличии
                          </p>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
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
                        <a className="product-item__notify-link" href="/#">
                          <span>Сообщить о поступлении</span>
                        </a>
                        <a
                          href="/#"
                          className="product-item product-item--sale"
                        >
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
                          <p className="product-item__notify-text">
                            нет в наличии
                          </p>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
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
                        <a className="product-item__notify-link" href="/#">
                          <span>Сообщить о поступлении</span>
                        </a>
                        <a
                          href="/#"
                          className="product-item product-item--sale"
                        >
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
                          <p className="product-item__notify-text">
                            нет в наличии
                          </p>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-slider__item">
                      <div className="product-item__wrapper product-item__not-available">
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
                        <a className="product-item__notify-link" href="/#">
                          <span>Сообщить о поступлении</span>
                        </a>
                        <a
                          href="/#"
                          className="product-item product-item--sale"
                        >
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
                          <p className="product-item__notify-text">
                            нет в наличии
                          </p>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-slider__item">
                      <div className="product-item__wrapper product-item__not-available">
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
                        <a className="product-item__notify-link" href="/#">
                          <span>Сообщить о поступлении</span>
                        </a>
                        <a
                          href="/#"
                          className="product-item product-item--sale"
                        >
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
                          <p className="product-item__notify-text">
                            нет в наличии
                          </p>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-slider__item">
                      <div className="product-item__wrapper product-item__not-available">
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
                        <a className="product-item__notify-link" href="/#">
                          <span>Сообщить о поступлении</span>
                        </a>
                        <a
                          href="/#"
                          className="product-item product-item--sale"
                        >
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
                          <p className="product-item__notify-text">
                            нет в наличии
                          </p>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-slider__item">
                      <div className="product-item__wrapper product-item__not-available">
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
                        <a className="product-item__notify-link" href="/#">
                          <span>Сообщить о поступлении</span>
                        </a>
                        <a
                          href="/#"
                          className="product-item product-item--sale"
                        >
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
                          <p className="product-item__notify-text">
                            нет в наличии
                          </p>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-slider__item">
                      <div className="product-item__wrapper product-item__not-available">
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
                        <a className="product-item__notify-link" href="/#">
                          <span>Сообщить о поступлении</span>
                        </a>
                        <a
                          href="/#"
                          className="product-item product-item--sale"
                        >
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
                          <p className="product-item__notify-text">
                            нет в наличии
                          </p>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </TabPanel>
              <TabPanel>
                <div>Slider-2</div>
              </TabPanel>
              <TabPanel>
                <div>Slider-3</div>
              </TabPanel>
              <TabPanel>
                <div>Slider-4</div>
              </TabPanel>
              <TabPanel>
                <div>SLider-5</div>
              </TabPanel>
              <TabPanel>
                <div>SLider-6</div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
