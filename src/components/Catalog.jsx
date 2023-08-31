import React, { useEffect, useState } from 'react'

import api from '../api'
import { basketWhite } from '../assets'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ReactSlider from 'react-slider'
import Select from 'react-select'

import './Catalog.scss'

const Catalog = () => {
  const [cards, setCards] = useState()
  const [isActiveDrop, setIsActiveDrop] = useState(false)
  const [rangeValue, setRangeValue] = useState([])

  console.log('rangeValue', rangeValue);

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

  const customStyles = {option: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "white",
    ":hover": {
       backgroundColor: "rgba(107, 126, 172, 0.05)"
    },
    color: "rgba(0, 0, 0, 0.60)",
    }), control: (baseStyles) => ({
      ...baseStyles,
      border: "none",
      ":hover": {
        border: "none",
        boxShadow: "none"
      },

    }), menu: (baseStyles) => ({
      ...baseStyles,
      borderRadius: "none"
    })}

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
              <Select />
              <button className="catalog__filter-btngrid">
                <svg
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="21"
                    height="19"
                    stroke="#2F3035"
                    strokeWidth="2"
                  />
                  <rect
                    x="7"
                    y="6"
                    width="2"
                    height="2"
                    fill="#2F3035"
                    stroke="#2F3035"
                    strokeWidth="2"
                  />
                  <rect
                    x="7"
                    y="13"
                    width="2"
                    height="2"
                    fill="#2F3035"
                    stroke="#2F3035"
                    strokeWidth="2"
                  />
                  <rect
                    x="14"
                    y="6"
                    width="2"
                    height="2"
                    fill="#2F3035"
                    stroke="#2F3035"
                    strokeWidth="2"
                  />
                  <rect
                    x="14"
                    y="13"
                    width="2"
                    height="2"
                    fill="#2F3035"
                    stroke="#2F3035"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <button className="catalog__filter-btnline">
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
                      <li className="aside-filter__item-drop">
                        <p
                          className={`aside-filter__item-title filter__item-drop ${
                            isActiveDrop ? 'filter__item-drop--active' : ''
                          }`}
                          onClick={handleToggleArrow}
                        >
                          Наличие
                        </p>
                        {isActiveDrop && (
                          <div className="aside-filter__item-content">
                            <div className="aside-filter__content-box">
                            <label className="checkbox style-checkbox">
                              <input type="checkbox" />
                              <div className="checkbox__checkmark"></div>
                              <div className="checkbox__body">В наличие</div>
                            </label>
                            </div>
                            <div className="aside-filter__content-box">
                            <label className="checkbox style-checkbox">
                              <input type="checkbox" />
                              <div className="checkbox__checkmark"></div>
                              <div className="checkbox__body">Под заказ</div>
                            </label>
                            </div>
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
                          Новинки
                        </p>
                        {isActiveDrop && (
                          <div className="aside-filter__item-content aside-filter__item-content-radio">
                            <div className="aside-filter__content-box">
                              <label className="checkbox style-checkbox">
                                <input type="radio" name='radio' />
                                <div className="checkbox__checkmark radio__checkmark"></div>
                                <div className="checkbox__body">Все</div>
                              </label>  
                            </div>
                            <div className="aside-filter__content-box">
                              <label className="checkbox style-checkbox">
                                <input type="radio" name='radio' />
                                <div className="checkbox__checkmark radio__checkmark"></div>
                                <div className="checkbox__body">Новинки</div>
                              </label>
                            </div>
                            <div className="aside-filter__content-box">
                              <label className="checkbox style-checkbox">
                                <input type="radio" name='radio' />
                                <div className="checkbox__checkmark radio__checkmark"></div>
                                <div className="checkbox__body">Акции</div>
                              </label>
                            </div>
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
                          Цена
                        </p>
                          {isActiveDrop && (
                            <div className="aside-filter__item-content">
                              <ReactSlider
                                className="horizontal-slider"
                                thumbClassName="example-thumb"
                                trackClassName="example-track"
                                defaultValue={[200000, 360000]}
                                ariaLabel
                                max={500000}
                                min={100000}
                                onChange={(value, index) => setRangeValue(value)}
                                
                              />
                              <div className="range-parameters">
                                <div className="range-parameter">от &nbsp;<span>100 000</span></div>
                                <div className="range-parameter">до &nbsp;<span>500 000</span></div>
                              </div>
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
                            <div className="aside-filter__content-box">
                              <label className="checkbox style-checkbox">
                                <input type="checkbox" />
                                <div className="checkbox__checkmark"></div>
                                <div className="checkbox__body">BRP</div>
                              </label>
                            </div>
                            <div className="aside-filter__content-box">
                              <label className="checkbox style-checkbox">
                                <input type="checkbox" />
                                <div className="checkbox__checkmark"></div>
                                <div className="checkbox__body">Spark 2</div>
                              </label>
                            </div>
                            <div className="aside-filter__content-box">
                              <label className="checkbox style-checkbox">
                                <input type="checkbox" />
                                <div className="checkbox__checkmark"></div>
                                <div className="checkbox__body">Spark 3 </div>
                              </label>
                            </div>
                            <div className="filter-more">
                              <button className='filter-more__btn' href="#">Показать еще</button>
                            </div>
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
                            <div className="aside-filter__content-box">
                              <label className="checkbox style-checkbox">
                                <input type="checkbox" />
                                <div className="checkbox__checkmark"></div>
                                <div className="checkbox__body">Sea-doo Spark 2</div>
                              </label>
                            </div>
                            <div className="aside-filter__content-box">
                              <label className="checkbox style-checkbox">
                                <input type="checkbox" />
                                <div className="checkbox__checkmark"></div>
                                <div className="checkbox__body">SeaDoo Spark 90</div>
                              </label>
                            </div>
                            <div className="aside-filter__content-box">
                              <label className="checkbox style-checkbox">
                                <input type="checkbox" />
                                <div className="checkbox__checkmark"></div>
                                <div className="checkbox__body">SeaDoo GTI 155</div>
                              </label>
                            </div>
                            <div className="aside-filter__content-box">
                              <label className="checkbox style-checkbox">
                                <input type="checkbox" />
                                <div className="checkbox__checkmark"></div>
                                <div className="checkbox__body">SeaDoo GTR 230</div>
                              </label>
                            </div>
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
                          Акции
                        </p>
                        {isActiveDrop && (
                          <div className="aside-filter__item-content">
                            <div className="aside-filter__content-box">
                            <label className="checkbox style-checkbox">
                              <input type="checkbox" />
                              <div className="checkbox__checkmark"></div>
                              <div className="checkbox__body">В наличие</div>
                            </label>
                            </div>
                            <div className="aside-filter__content-box">
                            <label className="checkbox style-checkbox">
                              <input type="checkbox" />
                              <div className="checkbox__checkmark"></div>
                              <div className="checkbox__body">Под заказ</div>
                            </label>
                            </div>
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
                            <div className="aside-filter__content-box">
                            <label className="checkbox style-checkbox">
                              <input type="checkbox" />
                              <div className="checkbox__checkmark"></div>
                              <div className="checkbox__body">В наличие</div>
                            </label>
                            </div>
                            <div className="aside-filter__content-box">
                            <label className="checkbox style-checkbox">
                              <input type="checkbox" />
                              <div className="checkbox__checkmark"></div>
                              <div className="checkbox__body">Под заказ</div>
                            </label>
                            </div>
                          </div>
                        )}
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
