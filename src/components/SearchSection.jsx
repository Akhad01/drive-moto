import React from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import 'react-tabs/style/react-tabs.css'
import './SearchSection.scss'

const SearchSection = () => {
  return (
    <div className="search page-section">
      <div className="container">
        <div className="search__inner">
          <Tabs>
            <TabList className="search__tabs">
              <Tab className="search__tabs-item">Поиск по номеру</Tab>
              <Tab className="search__tabs-item">Поиск по марке</Tab>
              <Tab className="search__tabs-item">Поиск по названию товара</Tab>
            </TabList>

            <TabPanel>
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
            </TabPanel>
            <TabPanel>
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
            </TabPanel>
            <TabPanel>
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
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default SearchSection
