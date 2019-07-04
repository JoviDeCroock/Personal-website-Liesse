import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import LanguageSelector from './LanguageSelector'

const Header = ({ language, setLanguage }) => (
    <header id="header">
        <div className="inner">
            <img src={avatar} className="image avatar" alt="Liesse Swinnen" />
            <h1><strong>Liesse Swinnen</strong></h1>
            <p>Engineering architecture - Belgium</p>
            <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>
        <Footer />
    </header>
)

export default Header
