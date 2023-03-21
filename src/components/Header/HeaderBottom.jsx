import React from 'react'

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
    <div className="header__bottom">
      <div className="container">
        <ul className="menu-categories">
          {menuCategories.map((category) => (
            <li key={category.id} className="menu-categories__item">
              <a className="menu-categories__link" href="/">
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
