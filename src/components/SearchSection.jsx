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
            <TabList>
              <Tab>Поиск по номеру</Tab>
              <Tab>Поиск по марке</Tab>
              <Tab>Поиск по названию товара</Tab>
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

          <div className="search__content"></div>
        </div>
      </div>
    </div>
  )
}

export default SearchSection
