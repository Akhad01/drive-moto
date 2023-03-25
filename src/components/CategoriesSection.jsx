import React from 'react'
import Categories1 from '../assets/categories-1.png'
import Categories2 from '../assets/categories-2.png'
import Categories3 from '../assets/categories-3.png'
import Categories4 from '../assets/categories-4.png'
import Categories5 from '../assets/categories-5.png'
import Categories6 from '../assets/categories-6.png'

import './CategoriesSection.scss'

const categoriesItem = [
  {
    id: '1',
    title: 'Квадроциклы',
    image: Categories1,
  },
  {
    id: '2',
    title: 'Гидроциклы',
    image: Categories2,
  },
  {
    id: '3',
    title: 'Катера',
    image: Categories3,
  },
  {
    id: '4',
    title: 'Снегоходы',
    image: Categories4,
  },
  {
    id: '5',
    title: 'Вездеходы',
    image: Categories5,
  },
  {
    id: '6',
    title: 'Двигатели',
    image: Categories6,
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
