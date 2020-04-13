import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  subheading,
  mainpitch,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div className='black_overlay_one full-width-image margin-top-0'>
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h2 className='title_font'
          style={{
            fontFamily: 'Satisfy',
            color: 'white'
          }}
        >
          {subheading}
        </h2>
      </div>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="sectionThree">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h2 className="title">{mainpitch.title}</h2>
                    </div>
                    <div className="tile">
                      <p className="subtitle">{mainpitch.description}</p>
                    </div>
                    <div className='horizontalDivision'></div>
                    <div className="tile">
                      <h2 className="title">{mainpitch.titleTwo}</h2>
                    </div>
                    <div className="tile">
                      <p className="subtitle">{mainpitch.descriptionTwo}</p>
                    </div>
                    <div className='horizontalDivision'></div>
                    <div className="tile">
                      <h2 className="title">{mainpitch.titleThree}</h2>
                    </div>
                    <div className="tile">
                      <p className="subtitle">{mainpitch.descriptionThree}</p>
                    </div>
                    <div className='horizontalDivision'></div>
                    <div className="tile">
                      <h2 className="title">{mainpitch.titleFour}</h2>
                    </div>
                    <div className="tile">
                      <p className="subtitle">{mainpitch.descriptionFour}</p>
                    </div>
                    <div className='horizontalDivisionTwo'></div>
                  </div>
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
          titleTwo
          descriptionTwo
          titleThree
          descriptionThree
          titleFour
          descriptionFour
        }
        description
      }
    }
  }
`
