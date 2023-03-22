import React from 'react'
import Categories1 from '../assets/categories-1.png'
import Categories2 from '../assets/categories-2.png'
import Categories3 from '../assets/categories-3.png'
import Categories4 from '../assets/categories-4.png'
import Categories5 from '../assets/categories-5.png'
import Categories6 from '../assets/categories-6.png'

import './CategoriesSection.scss'

const CategoriesSection = () => {
  return (
    <section className="categories page-section">
      <div className="container">
        <div className="categories__inner">
          <a className="categories__item" href="/#">
            <div className="categories__item-info">
              <h4 className="categories__item-title">Квадроциклы</h4>
              <p className="categories__item-text">Подробее</p>
            </div>
            <div className="categories__item-img">
              <img src={Categories1} alt="" />
            </div>
          </a>
          <a className="categories__item" href="/#">
            <div className="categories__item-info">
              <h4 className="categories__item-title">Гидроциклы</h4>
              <p className="categories__item-text">Подробее</p>
            </div>
            <div className="categories__item-img">
              <img src={Categories2} alt="" />
            </div>
          </a>
          <a className="categories__item" href="/#">
            <div className="categories__item-info">
              <h4 className="categories__item-title">Катера</h4>
              <p className="categories__item-text">Подробее</p>
            </div>
            <div className="categories__item-img">
              <img src={Categories3} alt="" />
            </div>
          </a>
          <a className="categories__item" href="/#">
            <div className="categories__item-info">
              <h4 className="categories__item-title">Снегоходы</h4>
              <p className="categories__item-text">Подробее</p>
            </div>
            <div className="categories__item-img">
              <img src={Categories4} alt="" />
            </div>
          </a>
          <a className="categories__item" href="/#">
            <div className="categories__item-info">
              <h4 className="categories__item-title">Вездеходы</h4>
              <p className="categories__item-text">Подробее</p>
            </div>
            <div className="categories__item-img">
              <img src={Categories5} alt="" />
            </div>
          </a>
          <a className="categories__item" href="/#">
            <div className="categories__item-info">
              <h4 className="categories__item-title">Двигатели</h4>
              <p className="categories__item-text">Подробее</p>
            </div>
            <div className="categories__item-img">
              <img src={Categories6} alt="" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
