import React from 'react'

import { banner } from '../assets'

import './SecondBanner.scss'

const SecondBanner = () => {
  return (
    <div className="banner">
      <div className="container">
        <a className="banner__link" href="/#">
          <img src={banner} alt="" />
        </a>
      </div>
    </div>
  )
}

export default SecondBanner
