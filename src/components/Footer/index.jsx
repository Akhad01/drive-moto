import React from 'react'

import FooterBottom from './FooterBottom'
import FooterTop from './FooterTop'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  )
}

export default Footer
