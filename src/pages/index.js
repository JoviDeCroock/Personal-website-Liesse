import React from 'react'
import Helmet from 'react-helmet'
import { useTranslation } from 'react-i18next';

import '../localization/i18n';
import Layout from '../components/layout'

import Skills from './Skills';
// import Introduction from './Introduction';
import Contact from './Contact';
import Projects from './Projects';

const siteTitle = "Liesse Swinnen"

const HomeIndex = () => {
    const [language, setLanguage] = React.useState('nl');
    const prevLanguage = React.useRef(language);
    const { t, i18n } = useTranslation();

    React.useEffect(() => {
        if (prevLanguage.current !== language) {
            i18n.changeLanguage(language);
            prevLanguage.current = language;
        }
    }, [language, i18n]);

    return (
        <Layout language={language} setLanguage={setLanguage}>
            <Helmet>
                <title>{siteTitle}</title>
                <html lang={language} />
                <meta name="description" content={t('siteDescription')} />
            </Helmet>
            <div id="main">
                {/* <Introduction /> */}
                <Skills />
                <Projects />
                <Contact />
            </div>
        </Layout>
    )
}

export default HomeIndex
