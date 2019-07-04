import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import Skills from './Skills';
import Introduction from './Introduction';
import Contact from './Contact';
import Projects from './Projects';

const siteTitle = "Liesse Swinnen"
const siteDescription = "Belgian engineering architect"

const HomeIndex = () => (
    <Layout>
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
        </Helmet>
        <div id="main">
            <Introduction />
            <Skills />
            <Projects />
            <Contact />
        </div>
    </Layout>
)

export default HomeIndex