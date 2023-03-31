import React from 'react'

import './SecondBanner.scss'

import Banner from '../assets/content/banner.jpg'

const SecondBanner = () => {
  return (
    <div className="banner">
      <div className="container">
        <a className="banner__link" href="/#">
          <img src={Banner} alt="" />
        </a>
      </div>
    </div>
  )
}

export default SecondBanner
