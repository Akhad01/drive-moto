import React from 'react'

import logo from '../../assets/logo.svg'
import heart from '../../assets/heart.svg'
import user from '../../assets/user.svg'
import basket from '../../assets/basket.svg'

const menuList = [
  {
    name: 'Магазины',
    id: '1',
  },
  {
    name: 'Акции',
    id: '2',
  },
  {
    name: 'Доставка и оплата',
    id: '3',
  },
]

const HeaderTop = () => {
  return (
    <div className="header__top">
      <div className="container">
        <div className="header__top-inner">
          <nav className="menu">
            <ul className="menu__list">
              {menuList.map((menu) => (
                <li key={menu.id} className="menu__item">
                  <a className="menu__link" href="/">
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a className="logo" href="/">
            <img className="logo__img" src={logo} alt="" />
          </a>
          <div className="header__box">
            <p className="header-adress">Москва, ул. Науки 25</p>
            <ul className="user__list">
              <li className="user-list__item">
                <a className="user-list__link" href="/">
                  <img className="user-list__img" alt="" src={heart} />
                </a>
              </li>
              <li className="user-list__item">
                <a className="user-list__link" href="/">
                  <img className="user-list__img" alt="" src={user} />
                </a>
              </li>
              <li className="user-list__item">
                <a className="user-list__link basket" href="/">
                  <img className="user-list__img" alt="" src={basket} />
                  <p className="basket__num">1</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
