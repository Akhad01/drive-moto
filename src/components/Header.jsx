/* eslint-disable no-undef */
import React from 'react'
import logo from '../assets/logo.svg'
import styles from './Header.module.scss'
import heart from '../assets/heart.svg'
import user from '../assets/user.svg'
import basket from '../assets/basket.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className={styles.header__top_inner}>
            <nav className="menu">
              <ul className="menu__list">
                <li className={styles.menu__item}>
                  <a className="menu__link" href="/">
                    Магазины
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a className="menu__link" href="/">
                    Акции
                  </a>
                </li>
                <li className={styles.menu__item}>
                  <a className="menu__link" href="/">
                    Доставка и оплата
                  </a>
                </li>
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
      <div className={styles.header__bottom}>
        <div className="container">
          <ul className={styles.menu_categories}>
            <li className={styles.menu_categories__item}>
              <a className={styles.menu_categories__link} href="/">
                Квадроциклы
              </a>
            </li>
            <li className={styles.menu_categories__item}>
              <a className={styles.menu_categories__link} href="/">
                Катера
              </a>
            </li>
            <li className={styles.menu_categories__item}>
              <a className={styles.menu_categories__link} href="/">
                Гидроциклы
              </a>
            </li>
            <li className={styles.menu_categories__item}>
              <a className={styles.menu_categories__link} href="/">
                Лодки
              </a>
            </li>
            <li className={styles.menu_categories__item}>
              <a className={styles.menu_categories__link} href="/">
                Вездеходы
              </a>
            </li>
            <li className={styles.menu_categories__item}>
              <a className={styles.menu_categories__link} href="/">
                Снегоходы
              </a>
            </li>
            <li className={styles.menu_categories__item}>
              <a className={styles.menu_categories__link} href="/">
                Двигатели
              </a>
            </li>
            <li className={styles.menu_categories__item}>
              <a className={styles.menu_categories__link} href="/">
                Запчасти
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
