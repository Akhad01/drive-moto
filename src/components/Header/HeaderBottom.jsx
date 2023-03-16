import React from 'react'

import styles from './Header.module.scss'

const menuCategories = [
  {
    name: 'Квадроциклы',
    id: '1',
  },
  {
    name: 'Катера',
    id: '2',
  },
  {
    name: 'Гидроциклы',
    id: '3',
  },
  {
    name: 'Лодки',
    id: '4',
  },
  {
    name: 'Вездеходы',
    id: '5',
  },
  {
    name: 'Снегоходы',
    id: '6',
  },
  {
    name: 'Двигатели',
    id: '7',
  },
  {
    name: 'Запчасти',
    id: '8',
  },
]

const HeaderBottom = () => {
  return (
    <div className={styles.header__bottom}>
      <div className="container">
        <ul className={styles.menu_categories}>
          {menuCategories.map((category) => (
            <li key={category.id} className={styles.menu_categories__item}>
              <a className={styles.menu_categories__link} href="/">
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HeaderBottom
