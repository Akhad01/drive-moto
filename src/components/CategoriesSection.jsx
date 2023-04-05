import React from 'react'

import {
  categories1,
  categories2,
  categories3,
  categories4,
  categories5,
  categories6,
} from '../assets'

import './CategoriesSection.scss'

const categoriesItem = [
  {
    id: '1',
    title: 'Квадроциклы',
    image: categories1,
  },
  {
    id: '2',
    title: 'Гидроциклы',
    image: categories2,
  },
  {
    id: '3',
    title: 'Катера',
    image: categories3,
  },
  {
    id: '4',
    title: 'Снегоходы',
    image: categories4,
  },
  {
    id: '5',
    title: 'Вездеходы',
    image: categories5,
  },
  {
    id: '6',
    title: 'Двигатели',
    image: categories6,
  },
]

const CategoriesSection = () => {
  return (
    <section className="categories page-section">
      <div className="container">
        <div className="categories__inner">
          {categoriesItem.map((category) => {
            return (
              <a key={category.id} className="categories__item" href="/#">
                <div className="categories__item-info">
                  <h4 className="categories__item-title">{category.title}</h4>
                  <p className="categories__item-text">Подробее</p>
                </div>
                <div className="categories__item-img">
                  <img src={category.image} alt="" />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
