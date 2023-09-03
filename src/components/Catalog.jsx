import React, { useEffect, useState } from 'react'

import api from '../api'
import { basketWhite } from '../assets'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Select from 'react-select'

import './Catalog.scss'
import AsideFilterContent from './AsideFilterContent'
import MoreButton from './MoreButton'
import RangeSlider from './ReactSlider'
import FilterItem from './FilterItem'

const Catalog = () => {
  const [cards, setCards] = useState()
  const [isActiveDrop, setIsActiveDrop] = useState(false)


  useEffect(() => {
    api.catalogCards().then((data) => {
      return setCards(data)
    })
  }, [])

  const handleToggleHeart = (id) => {
    const elementIndex = cards.findIndex((elem) => elem.id === id)

    const newCards = [...cards]
    newCards[elementIndex].heart = !newCards[elementIndex].heart
    setCards(newCards)
  }

  const handleToggleArrow = () => {
    setIsActiveDrop(!isActiveDrop)
  }

  const options = [
    { value: "90", label: "90" },
    { value: "130", label: "130" },
    { value: "154", label: "154" },
    { value: "230", label: "230" },
    { value: "300", label: "300" },

  ]

  const optionsItem = [
    {value: "По полулярности1", label: "По полулярности1"},
    {value: "По полулярности2", label: "По полулярности2"},
    {value: "По полулярности3", label: "По полулярности3"},
  ]

  const customStyles = {option: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "white",
    ":hover": {
       backgroundColor: "rgba(107, 126, 172, 0.05)"
    },
    color: "rgba(0, 0, 0, 0.60)",
    }), control: (baseStyles) => ({
      ...baseStyles,
      boxShadow: "none",
      border: "none",
      ":hover": {
        border: "none",
        boxShadow: "none"
      },

    }), menu: (baseStyles) => ({
      ...baseStyles,
      borderRadius: "none"
    })}


  const component = [
    {
      title: "Наличие",
      key: "1",
      component: (props) => <FilterItem {...props} />,
      filterItem: [
        {
            type: "checkbox",
            key: "1",
            title: "В наличие",
            component: (props) =>  <AsideFilterContent {...props} />
        },
        {
            type: "checkbox",
            key: "2",
            title: "Под заказ",
            component: (props) => <AsideFilterContent {...props}  />
        }
      ]
    },
    {
      title: "Новинки",
      key: "2",
      isRadio: true,
      component: (props) => <FilterItem {...props} />,
      filterItem: [
        {
            type: "radio",
            key: "1",
            title: "Все",
            component: (props) =>  <AsideFilterContent {...props} />
        },
        {
            type: "radio",
            key: "2",
            title: "Новинки",
            component: (props) => <AsideFilterContent {...props}  />
        },
        {
          type: "radio",
          key: "3",
          title: "Акции",
          component: (props) => <AsideFilterContent {...props}  />
      }
      ]

    }
  ]

  return (
    <div>
      <section className="catalog">
        <div className="container">
          <h2 className="catalog__title">Гидроциклы</h2>
          <div className="catalog__filter">
            <div className="catalog__filter-items">
              <button>Полноприводные</button>
              <button>от 5000</button>
              <button>BRP</button>
              <button>еще</button>
            </div>
            <div className="catalog__filter-btn">
              <Select className='select-item' defaultValue={optionsItem[0]} options={optionsItem} />
              <button className="catalog__filter-btngrid catalog__filter-button catalog__filter-button--active">
                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="21" height="19" stroke="#2F3035" strokeWidth="2"/>
                  <rect x="7" y="6" width="2" height="2" fill="#2F3035" stroke="#2F3035" strokeWidth="2"/>
                  <rect x="7" y="13" width="2" height="2" fill="#2F3035" stroke="#2F3035" strokeWidth="2"/>
                  <rect x="14" y="6" width="2" height="2" fill="#2F3035" stroke="#2F3035" strokeWidth="2"/>
                  <rect x="14" y="13" width="2" height="2" fill="#2F3035" stroke="#2F3035" strokeWidth="2"/>
                </svg>
              </button>
              <button className="catalog__filter-btnline catalog__filter-button">
                <svg
                  width="25"
                  height="19"
                  viewBox="0 0 25 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="1">
                    <rect x="6" width="19" height="3" rx="1.5" fill="#2F3035" />
                    <rect
                      x="6"
                      y="8"
                      width="19"
                      height="3"
                      rx="1.5"
                      fill="#2F3035"
                    />
                    <rect
                      x="6"
                      y="16"
                      width="19"
                      height="3"
                      rx="1.5"
                      fill="#2F3035"
                    />
                    <rect width="3" height="3" rx="1.5" fill="#2F3035" />
                    <rect y="8" width="3" height="3" rx="1.5" fill="#2F3035" />
                    <rect y="16" width="3" height="3" rx="1.5" fill="#2F3035" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="catalog__inner">
            <aside className="catalog__inner-aside aside-filter">
              <Tabs>
                <TabList className="aside-filter__tabs">
                  <Tab className="aside-filter__tab">
                    <span>Параметры</span>
                  </Tab>
                  <Tab className="aside-filter__tab">
                    <span>по марке</span>
                  </Tab>
                </TabList>
                <TabPanel className="aside-filter__tabs-content">
                  <form className="aside-filter__form">
                    <ul className="aside-filter__list">
                      {
                        component.map(comp => comp.component(comp))
                      }
                      <li className="aside-filter__item-drop">
                        <p
                            className={`aside-filter__item-title filter__item-drop ${
                              isActiveDrop ? 'filter__item-drop--active' : ''
                            }`}
                            onClick={handleToggleArrow}
                        >
                          Цена
                        </p>
                          {isActiveDrop && (
                            <div className="aside-filter__item-content">
                              <RangeSlider />
                            </div>
                            )}
                        </li>
                      <li className="aside-filter__item-list">
                        <div className="filter__item-list">
                          <p className="filter__item-list--title">Мощность, л.с.</p>
                          <Select 
                            styles={customStyles} 
                            className='filter__item-list--select' 
                            defaultValue={options[0]} 
                            options={options} 
                          />
                        </div>
                        <div className="filter__item-list">
                          <p className="filter__item-list--title">Мощность двигателя, л.с.</p>
                          <Select 
                          
                            styles={customStyles} 
                            className='filter__item-list--select' 
                            defaultValue={options[0]} 
                            options={options} />
                        </div>
                        <div className="filter__item-list">
                          <p className="filter__item-list--title">Макс. скорость</p>
                          <Select 
                            styles={customStyles} 
                            className='filter__item-list--select' 
                            defaultValue={options[0]} 
                            options={options} />
                        </div>
                      </li>


                      <li className="aside-filter__item-drop">
                        <p
                          className={`aside-filter__item-title filter__item-drop ${
                            isActiveDrop ? 'filter__item-drop--active' : ''
                          }`}
                          onClick={handleToggleArrow}
                        >
                          Бренд
                        </p>
                        {isActiveDrop && (
                          <div className="aside-filter__item-content">
                            <AsideFilterContent type="checkbox" title="BRP" />
                            <AsideFilterContent type="checkbox" title="Spark 2" />
                            <AsideFilterContent type="checkbox" title="Spark 3" />
                            <MoreButton />
                          </div>
                        )}
                      </li>

                      <li className="aside-filter__item-drop">
                        <p
                          className={`aside-filter__item-title filter__item-drop ${
                            isActiveDrop ? 'filter__item-drop--active' : ''
                          }`}
                          onClick={handleToggleArrow}
                        >
                          Модель
                        </p>
                        {isActiveDrop && (
                          <div className="aside-filter__item-content">
                            <input className='filter-search' placeholder='Введите модель' type="text" />
                            <AsideFilterContent type="checkbox" title="Sea-doo Spark 2" />
                            <AsideFilterContent type="checkbox" title="SeaDoo Spark 90" />
                            <AsideFilterContent type="checkbox" title="SeaDoo GTI 155" />
                            <AsideFilterContent type="checkbox" title="SeaDoo GTR 230" />
                            <MoreButton />
                          </div>
                        )}
                      </li>

                      <li className="aside-filter__item-drop btn-checked">
                        <p
                          className={`aside-filter__item-title filter__item-drop ${
                            isActiveDrop ? 'filter__item-drop--active' : ''
                          }`}
                          onClick={handleToggleArrow}
                        >
                          Акции
                        </p>
                        {isActiveDrop && (
                          <div className="aside-filter__item-content">
                            <AsideFilterContent type="checkbox" title="SALE" body={true} />
                            <AsideFilterContent type="checkbox" title="NEW" body={true} />
                            <AsideFilterContent type="checkbox" title="HIT" body={true} />
                            <AsideFilterContent type="checkbox" title="ДИЛЕР" body={true} />
                          </div>
                        )}
                      </li>

                      <li className="aside-filter__item-drop">
                        <p
                          className={`aside-filter__item-title filter__item-drop ${
                            isActiveDrop ? 'filter__item-drop--active' : ''
                          }`}
                          onClick={handleToggleArrow}
                        >
                          Страны
                        </p>
                        {isActiveDrop && (
                          <div className="aside-filter__item-content">
                            <AsideFilterContent type="checkbox" title="Россия" />
                            <AsideFilterContent type="checkbox" title="Германия" />
                            <AsideFilterContent type="checkbox" title="Китай" />
                            <AsideFilterContent type="checkbox" title="CША" />
                            <MoreButton />
                          </div>
                        )}
                      </li>

                      <li className='aside-filter__item-drop aside-filter__item-btn'>
                        <button className='filter-btn__send filter-btn__send--active' type='submit'>ВЫБРАТЬ</button>
                        <p className='filter__extra'>Дополнительные параметры</p>
                        <div className="filter__extra-content">more</div>
                        <button className='filter-btn__reset' type='submit'>Сбросить фильтр</button>
                      </li>

                    </ul>
                  </form>
                </TabPanel>
                <TabPanel className="aside-filter__tabs-content"></TabPanel>
              </Tabs>
            </aside>
            <div className="catalog__inner-list">
              {cards &&
                cards.map((product) => {
                  return (
                    <div
                      className={`product-item__wrapper  ${
                        product.isAvailable || 'product-item__not-available'
                      }`}
                      key={product.id}
                    >
                      <button
                        className={`product-item__heart ${
                          product.heart ? 'product-item__heart--active' : ''
                        }`}
                        onClick={() => handleToggleHeart(product.id)}
                      ></button>
                      <button className="product-item__basket">
                        <img
                          src={basketWhite}
                          alt=""
                          className="product-item__basket--img"
                        />
                      </button>
                      <a className="product-item__notify-link" href="/#">
                        <span>Сообщить о поступлении</span>
                      </a>
                      <a
                        href="/#"
                        className={`product-item ${
                          product.isSale && 'product-item--sale'
                        }`}
                      >
                        <p className="product-item__hover-text">
                          посмотреть товар
                        </p>
                        <img
                          src={product.img}
                          alt=""
                          className="product-item__img"
                        />
                        <h4 className="product-item__title">{product.name}</h4>
                        <p className="price product-item__price">
                          {product.price}
                        </p>
                        <p className="product-item__notify-text">
                          нет в наличии
                        </p>
                      </a>
                    </div>
                  )
                })}
              <div className="pagination">
                <ul className="pagination-list">
                  <li className="pagination-list__item active">
                    <a href="/#">1</a>
                  </li>
                  <li className="pagination-list__item">
                    <a href="/#">2</a>
                  </li>
                  <li className="pagination-list__item">
                    <a href="/#">3</a>
                  </li>
                  <li className="pagination-list__item">
                    <a href="/#">4</a>
                  </li>
                  <li className="pagination-list__item">
                    <a href="/#">5</a>
                  </li>
                  <li className="pagination-list__item pagination-list__item--dots">
                    <span href="#">...</span>
                  </li>
                  <li className="pagination-list__item">
                    <a href="/#">11</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Catalog
