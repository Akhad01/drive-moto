import React from 'react'

import styles from './Header.module.scss'
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
        <div className={styles.header__top_inner}>
          <nav className="menu">
            <ul className="menu__list">
              {menuList.map((menu) => (
                <li key={menu.id} className={styles.menu__item}>
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
          <div className={styles.header__box}>
            <p className={styles.header_adress}>Москва, ул. Науки 25</p>
            <ul className={styles.user__list}>
              <li className={styles.user_list__item}>
                <a className={styles.user_list__link} href="/">
                  <img className="user_list__img" alt="" src={heart} />
                </a>
              </li>
              <li className={styles.user_list__item}>
                <a className={styles.user_list__link} href="/">
                  <img className="user_list__img" alt="" src={user} />
                </a>
              </li>
              <li className={styles.user_list__item}>
                <a
                  className={`${styles['user_list__link']} ${styles.basket}`}
                  href="/"
                >
                  <img className="user_list__img" alt="" src={basket} />
                  <p className={styles.basket__num}>1</p>
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
