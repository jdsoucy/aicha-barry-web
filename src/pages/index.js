import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import socialFacebook from '../images/social-facebook.svg';
import socialInstagram from '../images/social-instagram.svg';
import socialLinkedin from '../images/social-linkedin.svg';
import socialMedium from '../images/social-medium.svg';
import socialPinterest from '../images/social-pinterest.svg';
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section>
      <ul>
        <li className="google">Google</li>
        <li className="jll">JLL Technology</li>
        <li className="arms">ARMS</li>
        <li className="ubisoft">Ubisoft</li>
        <li className="godaddy">Go Daddy</li>
        <li className="moment">Moment Factory</li>
      </ul>
    </section>
    <section className="text">
      <p>👋🏾 Bonjour, <br />My name is Aïcha Barry, I'm currently a Interaction Designer for Google in Montreal. I create clear and simple solutions to problems. Feel free to connect with me on <strong><a href="https://www.linkedin.com/in/aichabarry">Linkedin</a></strong> or <strong><a href="mailto:hello@aichabarry.com">Email</a></strong>.</p>
      <p className="small-text">When I'm not working, I spend time with my 2 young children. I practise Tai Chi and train with one Chinese master. In addition I am a huge fan of Japanese mangas. I am also an artist and my art is a reflection of my diverse background and inspiration. You can find my art on: <strong><a href="http://misspralina.com">misspralina.com</a></strong></p>
      <ul>
        <li><a href="https://www.facebook.com/barry.aicha"><img src={socialFacebook} /></a></li>
        <li><a href="https://www.instagram.com/aichabarry/"><img src={socialInstagram} /></a></li>
        <li><a href="https://www.linkedin.com/in/aichabarry"><img src={socialLinkedin} /></a></li>
        {/* <li><a href="https://medium.com/@aicha_barry"><img src={socialMedium} /></a></li> */}
        <li><a href="https://www.pinterest.ca/aicha_barry/"><img src={socialPinterest} /></a></li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
