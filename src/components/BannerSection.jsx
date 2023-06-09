import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import { bannerSliderImg, sale1 } from '../assets'

import './BannerSection.scss'
import 'swiper/swiper-bundle.min.css'

const BannerSection = () => {
  const slides = Array.from({ length: 6 }, (_, index) => (
    <SwiperSlide key={index}>
      <a className="banner-section__slider-item" href="/#">
        <img
          className="banner-section__slider-img"
          src={bannerSliderImg}
          alt=""
        />
      </a>
    </SwiperSlide>
  ))
  return (
    <section className="banner-section page-section">
      <div className="container">
        <div className="banner-section__inner">
          <div className="banner-section__slider">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="banner-section-block"
              loop
            >
              {slides}
            </Swiper>
          </div>
          <a className="sale-item banner-section__item-top" href="/">
            <div className="sale-item__top">
              <p className="sale-item__info">акция</p>
              <div className="sale-item__price">
                <div className="price sale-item__price-new">190 000</div>
                <div className="price sale-item__price-old">225 000</div>
              </div>
            </div>
            <img className="sale-item__img" src={sale1} alt="" />
            <h5 className="sale-item__title">Лодочный мотор Suzuki DF9.9BRS</h5>
            <p className="sale-item__footer">
              Акция действует до
              <span>31.08.2020</span>
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BannerSection
