import React from 'react'

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-contact-container">
        <h3>Ubicación</h3>
        <div className="footer-bar"></div>
        <ul className="footer-information">
          <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
          <li>Alphavile SP</li>
          <li>brasil@corebiz.ag</li>
          <li>+55 11 3090 1039</li>
        </ul>
      </div>

      <div className="footer-buttons-container">
        <div className="footer-button ">
          <img src="/assets/email.svg" alt="Email" />
          <p>CONTÁCTANOS</p>
        </div>

        <div className="footer-button">
          <img src="/assets/headset.svg" alt="Headset" />
          <p className="footer-button-speak">HABLA CON UN CONSULTOR</p>
        </div>
      </div>

      <div className="footer-partners-container">
        <div className="footer-corebiz">
          <p>Desarrollado por</p>
          <img src="assets/site-logo-corebiz-preto-cinza.svg" alt="Corebiz white" />
        </div>

        <div className="footer-vector">
          <p>Powered by</p>
          <img src="assets/vtex-1.svg" alt="Corebiz white" />
        </div>
      </div>
    </div>
  )
}
