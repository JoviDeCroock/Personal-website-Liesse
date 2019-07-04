import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import projects from '../constants/projects';
import SkillIndicator from '../components/SkillIndicator'

const siteTitle = "Liesse Swinnen"
const siteDescription = "Belgian engineering architect"

const HomeIndex = () => (
    <Layout>
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
        </Helmet>
        <div id="main">
            <section id="one">
                <header className="major">
                    <h2>
                        Ipsum lorem dolor aliquam ante commodo<br />
                        magna sed accumsan arcu neque.
                    </h2>
                </header>
                <p>
                    Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac
                    in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim
                    arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.
                </p>
            </section>
            <section id="two">
                <div className="skills">
                    <h2>Skills</h2>
                    <SkillIndicator title="AutoCad" level={8} />
                    <SkillIndicator title="Adobe Photoshop" level={7.5} />
                    <SkillIndicator title="Adobe InDesign" level={7.5} />
                    <SkillIndicator title="Sketchup" level={7.5} />
                    <SkillIndicator title="Revit" level={7.5} />
                    <SkillIndicator title="Rhinoceros" level={5} />
                </div>
            </section>
            <section id="three">
                <h2>Recent Work</h2>
                <Gallery
                    images={projects.map(({ id, src, thumbnail, caption, description }) => ({
                        src,
                        thumbnail,
                        caption,
                        description
                    }))}
                />
            </section>
            <section id="four">
                <h2>Get In Touch</h2>
                <div className="row">
                    <div className="4u 12u$(small)">
                        <ul className="labeled-icons">
                            <li>
                                <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                Legerbosstraat 18<br />
                                Meise, 1860<br />
                                Belgium
                            </li>
                            <li>
                                <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                +324 75 744 466
                            </li>
                            <li>
                                <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                <a href="mailto:liesse.swinnen@gmail.com">liesse.swinnen@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default HomeIndex