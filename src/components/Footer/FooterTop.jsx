import React from 'react'

import Instagram from '../../assets/instagram.svg'
import VK from '../../assets/vk.svg'
import Facebook from '../../assets/facebook.svg'
import YouTube from '../../assets/youtube.svg'

const firstFooterList = [
  {
    name: 'О компании',
    id: '1',
  },
  {
    name: 'Контакты',
    id: '2',
  },
  {
    name: 'Акции',
    id: '3',
  },
  {
    name: 'Магазины',
    id: '4',
  },
]

const secondFooterList = [
  {
    name: 'Доставка и самовывоз',
    id: '1',
  },
  {
    name: 'Оплата',
    id: '2',
  },
  {
    name: 'Возврат-обмен',
    id: '3',
  },
  {
    name: 'Новости',
    id: '4',
  },
]

const socialList = [
  {
    img: Instagram,
    id: '1',
    alt: 'instagram',
  },
  {
    img: VK,
    id: '2',
    alt: 'vk',
  },
  {
    img: Facebook,
    id: '3',
    alt: 'facebook',
  },
  {
    img: YouTube,
    id: '4',
    alt: 'youtube',
  },
]

const FooterTop = () => {
  return (
    <div className="footer__top">
      <div className="footer__top-inner">
        <div className="footer__top-item footer__top-newslatter">
          <h6 className="footer__top-title">
            Подпишитесь на нашу рассылку и узнавайте о акция быстрее
          </h6>
          <form className="footer-form">
            <input
              className="footer-form__input"
              type="text"
              placeholder="Введите ваш e-mail:"
            />
            <button className="footer-form__btn" type="submit">
              Отправить
            </button>
          </form>
        </div>
        <div className="footer__top-item">
          <h6 className="footer__top-title">Информация</h6>
          <ul className="footer-list">
            {firstFooterList.map((list) => {
              return (
                <li className="footer-list__item" key={list.id}>
                  <a href="/#">{list.name}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="footer__top-item">
          <h6 className="footer__top-title">Интернет-магазин</h6>
          <ul className="footer-list">
            {secondFooterList.map((list) => {
              return (
                <li className="footer-list__item" key={list.id}>
                  <a href="/#">{list.name}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="footer__top-item footer__top-social">
          <ul className="social-list">
            {socialList.map((list) => {
              return (
                <li className="social-list__item" key={list.id}>
                  <a href="/#">
                    <img src={list.img} alt={list.alt} />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterTop
