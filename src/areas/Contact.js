import React from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <section id="four">
      <h2>{t('getInTouch')}</h2>
      <div className="row">
        <div className="4u 12u$(small)">
          <ul className="labeled-icons">
            <li>
              <h3 className="icon fa-home">
                <span className="label">{t('address')}</span>
              </h3>
              Legerbosstraat 18
              <br />
              Meise, 1860
              <br />
              {t('belgium')}
            </li>
            <li>
              <h3 className="icon fa-mobile">
                <span className="label">{t('phone')}</span>
              </h3>
              +324 75 74 44 66
            </li>
            <li>
              <h3 className="icon fa-envelope-o">
                <span className="label">Email</span>
              </h3>
              <a href="mailto:liesse.swinnen@gmail.com">
                liesse.swinnen@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
