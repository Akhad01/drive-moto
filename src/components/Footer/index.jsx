import React from 'react'

import './Footer.scss'
import FooterBottom from './FooterBottom'
import FooterTop from './FooterTop'

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
