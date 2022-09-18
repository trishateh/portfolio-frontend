import React from 'react' 
import {graphql} from 'gatsby'
import Seo from '../../components/Seo'
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const ProjectTemplate = ({pageContext:{title}, data }) => {
    return (
        <>
        <Seo 
            title={data.strapiProject.title.toUpperCase()} 
            description={data.strapiProject.description}
            image={data.strapiProject.image.localFile.publicURL}
        />
            <main className="project-template-page">
                <h2>{title}</h2>
                <p>{data.strapiProject.description}</p>
                <br />
                <img src={data.strapiProject.image.localFile.publicURL} alt="project pic" className="project-single-img" />
                <div className="project-links">
                  <br />
                  <a href={data.strapiProject.github}>
                    <FaGithubSquare className="project-icon"></FaGithubSquare>
                  </a>
                  <a href={data.strapiProject.url}>
                  <FaShareSquare className="project-icon"></FaShareSquare> 
                  </a>
                </div>
            </main>
        </>
    )
}


export const query = graphql`
query getSingleProject($title:String) {
    strapiProject(title: {eq: $title}) {
      description
      title
      github
      image {
        localFile {
          publicURL
        }
      }
      url
    }
  }
`

export default ProjectTemplate