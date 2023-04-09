import React from 'react'
import './Breadcrumbs.scss'

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a href="/#">Главная</a>
          </li>
          <li className="breadcrumbs__item">
            <span href="/#">Гидроциклы</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Breadcrumbs
