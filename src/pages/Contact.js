import React from 'react'

const Contact = () => (
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
)

export default Contact
