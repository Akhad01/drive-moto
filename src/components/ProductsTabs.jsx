import React, { useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'

import BasketWhite from '../assets/basket-white.svg'
import Product1 from '../assets/content/product-1.png'
import Product2 from '../assets/content/product-2.png'
import Product3 from '../assets/content/product-3.png'
import Product4 from '../assets/content/product-4.png'

const productsTabs = [
  { name: 'запчасти', id: '1' },
  { name: 'моторы', id: '2' },
  { name: 'шины', id: '3' },
  { name: 'электроника', id: '4' },
  { name: 'инструменты', id: '5' },
  { name: 'аксессуары', id: '6' },
]

const productCards = [
  {
    name: 'Водонепроницаемый Рюкзак',
    img: Product1,
    price: '9 800 ₽',
    id: '1',
    isAvailable: true,
    isSale: false,
  },
  {
    name: "Спасательный жилет BRP Men's Airflow PFD",
    img: Product2,
    price: '6 900 ₽',
    id: '2',
    isAvailable: true,
    isSale: true,
  },
  {
    name: 'BRP Audio-Premium System',
    img: Product3,
    price: '68 000 ₽',
    id: '3',
    isAvailable: true,
    isSale: false,
  },
  {
    name: 'Спасательное снаряжение',
    img: Product4,
    price: '8 000 ₽',
    id: '4',
    isAvailable: true,
    isSale: true,
  },
  {
    name: 'Водонепроницаемый Рюкзак',
    img: Product1,
    price: '9 800 ₽',
    id: '5',
    isAvailable: true,
    isSale: false,
  },
  {
    name: "Спасательный жилет BRP Men's Airflow PFD",
    img: Product2,
    price: '6 900 ₽',
    id: '6',
    isAvailable: true,
    isSale: true,
  },
  {
    name: 'BRP Audio-Premium System',
    img: Product3,
    price: '68 000 ₽',
    id: '7',
    isAvailable: true,
    isSale: false,
  },
  {
    name: 'Спасательное снаряжение',
    img: Product4,
    price: '8 000 ₽',
    id: '8',
    isAvailable: false,
    isSale: false,
  },
]

const ProductsTabs = () => {
  const [isHearted, setIsHearted] = useState(false)

  const handleHeartClick = () => {
    setIsHearted(!isHearted)
  }
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
          spaceBetween={29}
          slidesPerView={4}
          navigation
          loop
          className="product-slider"
        >
          {productCards.map((product) => {
            return (
              <SwiperSlide key={product.id} className="swiper-slide">
                <div className="product-slider__item">
                  <div
                    className={`product-item__wrapper  ${
                      product.isAvailable || 'product-item__not-available'
                    }`}
                  >
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
