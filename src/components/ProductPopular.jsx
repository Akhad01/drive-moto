import React, { useState, useEffect } from 'react'

import ProductsTabs from './ProductsTabs'
import api from '../api'

const ProductPopular = () => {
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
          <h3 className="product__title">С этим товаром покупают</h3>
          <div className="tabs__wrapper">
            <ProductsTabs onToggleHeart={handleToggleHeart} cards={cards} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPopular
