import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import { basketWhite } from '../assets'

const productsTabs = [
  { name: 'запчасти', id: '1' },
  { name: 'моторы', id: '2' },
  { name: 'шины', id: '3' },
  { name: 'электроника', id: '4' },
  { name: 'инструменты', id: '5' },
  { name: 'аксессуары', id: '6' },
]

const ProductsTabs = ({ cards, onToggleHeart }) => {
  return (
    <Tabs>
      <TabList className="products__tabs">
        {productsTabs.map((tab) => {
          return (
            <Tab className="products__tab" key={tab.id}>
              {tab.name}
            </Tab>
          )
        })}
      </TabList>
      <TabPanel>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          loop
          className="product-slider"
        >
          {cards &&
            cards.map((product) => {
              return (
                <SwiperSlide key={product.id} className="swiper-slide">
                  <div
                    className={`product-item__wrapper  ${
                      product.isAvailable || 'product-item__not-available'
                    }`}
                  >
                    <button
                      className={`product-item__heart ${
                        product.heart ? 'product-item__heart--active' : ''
                      }`}
                      onClick={() => onToggleHeart(product.id)}
                    ></button>
                    <button className="product-item__basket">
                      <img
                        src={basketWhite}
                        alt=""
                        className="product-item__basket--img"
                      />
                    </button>
                    <a className="product-item__notify-link" href="/#">
                      <span>Сообщить о поступлении</span>
                    </a>
                    <a
                      href="/#"
                      className={`product-item ${
                        product.isSale && 'product-item--sale'
                      }`}
                    >
                      <p className="product-item__hover-text">
                        посмотреть товар
                      </p>
                      <img
                        src={product.img}
                        alt=""
                        className="product-item__img"
                      />
                      <h4 className="product-item__title">{product.name}</h4>
                      <p className="price product-item__price">
                        {product.price}
                      </p>
                      <p className="product-item__notify-text">нет в наличии</p>
                    </a>
                  </div>
                </SwiperSlide>
              )
            })}
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
  )
}

export default ProductsTabs
