import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
    <header id="header">
        <div className="inner">
            <img src={avatar} className="image avatar" alt="Liesse Swinnen" />
            <h1><strong>Liesse Swinnen</strong></h1>
            <p>Engineering architecture - Belgium</p>
        </div>
        <Footer />
    </header>
)

export default Header
