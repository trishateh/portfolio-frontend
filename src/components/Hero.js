import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
  <header className="hero">
    <section className="section-center hero-center">
      <article className="hero-info">
        <div>
        {/* <StaticImage src="../assets/images/photo.png" alt="portfolio" />      */}
          <div className="underline"></div>
          <img  />
            <h1>I'm Trisha 👋</h1>
            <h4>Web3 / Blockchain Developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links-about"> 
              {socialLinks.map((link) => {
                return (
                <a href={link.url} key={link.id} className="social-link">
                  {link.icon}
                </a>
                )
              })}
            </div>
          </div>
        
      </article>
      <StaticImage src="../assets/images/photo.png" alt="portfolio" className="hero-img" placeholder="blurred" />     
    </section>
  </header>
  )
}

export default Hero
