import React from 'react'

import { gidrotsikLarge } from '../assets'
import { heartBtn } from '../assets'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import { comparisonBtn } from '../assets'

import './ProductPage.scss'
import StarRate from './StarRate'

const ProductPage = () => {
  return (
    <>
        <section className='product-card'>
            <div className="container">
                <div className="product-card__inner">
                    <div className="product-card__img-box product-item--sale">
                        <img className='product-card__img' src={gidrotsikLarge} alt="" />
                        <p className="product-card__price-old">1 200 475 ₽</p>
                        <p className="product-card__price-new">1 100 475 ₽</p>
                        <a className='product-card__link' href="#">Нашли дешевле? Снизим цену!</a>
                    </div>
                    <div className="product-card__content">
                        <h1 className="product-card__title">Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h1>
                        <p className="product-card__code">Код товара: 366666-2</p>
                        <div className="product-card__buttons">
                            <a className='product-card__icon-favorite' href='#'>
                                <img src={heartBtn} alt="" />
                            </a>
                            <a className='product-card__icon-favorite' href='#'>
                                <img src={comparisonBtn} alt="" />
                            </a>
                            <a className="rate" href='#'><StarRate /></a>
                        </div>
                        <Tabs className="product-card__tabs">
                            <TabList className="product-card__tabs">
                                <Tab className="product-card__tab">
                                    Характеристики
                                </Tab>
                                <Tab className="product-card__tab">
                                    Наличие в магазине
                                </Tab>
                            </TabList>
                            <TabPanel className="product-card__content">
                                <ul className="product-card__list">
                                    <li className="product-card__item">
                                        <div className="product-card__item-left">Производитель</div>
                                        <div className="product-card__item-right">Канада</div>
                                    </li>
                                    <li className="product-card__item">
                                        <div className="product-card__item-left">Количество мест, шт: </div>
                                        <div className="product-card__item-right">3</div>
                                    </li>
                                    <li className="product-card__item">
                                        <div className="product-card__item-left">Мощность, л.с.</div>
                                        <div className="product-card__item-right">155</div>
                                    </li>
                                    <li className="product-card__item">
                                        <div className="product-card__item-left">Тип двигателя</div>
                                        <div className="product-card__item-right">Бензиновый</div>
                                    </li>
                                    <li className="product-card__item">
                                        <div className="product-card__item-left">Год выпуска</div>
                                        <div className="product-card__item-right">2018</div>
                                    </li>
                                </ul>
                                <a className="product-card__more" href='#'>Показать еще</a>
                                <div className="product-card__btn">
                                    <button>купить</button>
                                </div>
                            </TabPanel>
                            <TabPanel className="product-card__content">
                                content-2 
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ProductPage