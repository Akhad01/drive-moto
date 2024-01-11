import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useSelector } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import api from '../api'
import { basketWhite } from '../assets'
import AsideFilterContent from './AsideFilterContent'
import MoreButton from './MoreButton'
import RangeSlider from './RangeSlider'
import FilterItem from './FilterItem'
import CatalogFilterButton from './CatalogFilterButton'


import './Catalog.scss'

const Catalog = () => {
  const [cards, setCards] = useState()
  const [isActiveDrop, setIsActiveDrop] = useState(false)

  const layout = useSelector(state => state.layout.value)

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

  const customStyles = {
    option: (baseStyles) => ({
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
    },
    {
      title: "Цена",
      key: "3",
      isRadio: false,
      isRange: true,
      component: (props) => <FilterItem {...props} />,
      filterItem: null
    },
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
              <CatalogFilterButton />
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
                            options={options} 
                          />
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
                      className={`product-item__wrapper ${
                        product.isAvailable === false ? 'product-item__not-available' : ""
                      } ${layout === "line" ? "product-item__wrapper--list" : ""}`}
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
