import { useEffect, useState } from 'react'

import ProductsTabs from './ProductsTabs'
import api from '../api'

import './ProductsSection.scss'
import 'react-tabs/style/react-tabs.css'

const ProductsSection = () => {
  const [cards, setCards] = useState()

  useEffect(() => {
    api.productCards().then((data) => {
      return setCards(data)
    })
  }, [])

  const handleToggleHeart = (id) => {
    const elementIndex = cards.findIndex((elem) => elem.id === id)

    const newCards = [...cards]
    newCards[elementIndex].heart = !newCards[elementIndex].heart
    setCards(newCards)
  }

  return (
    <section className="products page-section">
      <div className="container">
        <div className="products__inner">
          <h3 className="product__title">Популярные товары</h3>
          <div className="tabs__wrapper">
            <ProductsTabs onToggleHeart={handleToggleHeart} cards={cards} />
            <div className="product__more">
              <a className="product__more-link" href="/#">
                Показать еще
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
