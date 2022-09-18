import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
    <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form method="post" netlify-honeypot="bot-field" onSubmit="submit" data-netlify="true" name="contact">
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" />
          </div>

            <div className="form-group">
              <label>
                <input type="text" name="name" placeholder="name" className="form-control" />
              </label>
            </div>
            <div className="form-group">
              <label>
                <input type="email" name="email" placeholder="email" className="form-control" />
              </label>
            </div>
            <div className="form-group">
              <label>
                <textarea name="message" rows="5" placeholder="message" className="form-control"></textarea>
              </label>
            </div>  
              
            
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact

 
