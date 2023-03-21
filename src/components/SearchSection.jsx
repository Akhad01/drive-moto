import React from 'react'
import './SearchSection.scss'

const SearchSection = () => {
  return (
    <div className="search page-section">
      <div className="container">
        <div className="search__inner">
          <div className="search__tabs">
            <a
              className="search__tabs-item search__tabs-item--active"
              href="#tab-1"
            >
              Поиск по номеру
            </a>
            <a className="search__tabs-item" href="#tab-2">
              Поиск по марке
            </a>
            <a className="search__tabs-item" href="#tab-3">
              Поиск по названию товара
            </a>
          </div>
          <div className="search__content">
            <div id="tab-1" className="search__content-item">
              <form className="search__content-form" action="">
                <input
                  className="search__content-input"
                  type="text"
                  placeholder="Введите номер"
                />
                <button className="search__content-btn" type="submit">
                  искать
                </button>
              </form>
            </div>
            <div id="tab-2" className="search__content-item">
              <form className="search__content-form" action="">
                <input
                  className="search__content-input"
                  type="text"
                  placeholder="Введите по название товара"
                />
                <button className="search__content-btn" type="submit">
                  искать
                </button>
              </form>
            </div>
            <div id="tab-3" className="search__content-item">
              <form className="search__content-form" action="">
                <input
                  className="search__content-input"
                  type="text"
                  placeholder="Введите марку"
                />
                <button className="search__content-btn" type="submit">
                  искать
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchSection
