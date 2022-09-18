import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Skills = () => {
  return <section className="section bg-grey">
    <Title title="skills" />
    <div className="section-center services-center">
      {services.map((skill) => {
        const {id, icon, title, text} = skill
        return <article key={id} className="service">
          {icon}
          <h4>{title}</h4>
          <div className="underline"></div>
          <p>{text}</p>
        </article>
      })}
    </div>
  </section>
}

export default Skills
