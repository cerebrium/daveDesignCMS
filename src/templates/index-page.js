import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  title,
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
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
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
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(256, 256, 256, .85) 0.5rem 0px 0px, rgb(256, 256, 256, .85) -0.5rem 0px 0px',
            backgroundColor: 'rgb(256, 256, 256, .85)',
            color: 'black',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(256, 256, 256, .85) 0.5rem 0px 0px, rgb(256, 256, 256, .85) -0.5rem 0px 0px',
            backgroundColor: 'rgb(256, 256, 256, .85)',
            color: 'black',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                  <div className='horizontalDivision'></div>
                  <div className="tile">
                    <h1 className="title">Locally Sourced Materials</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">We get all of our exotic woods directly from locally production in New Hampshire. We enjoy local relationships that make getting the products and materials we need easy.</h3>
                  </div>
                  <div className='horizontalDivision'></div>
                  <div className="tile">
                    <h1 className="title">On Request Designs</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">Customers like to get exactly what they want, and we strive to meet them in that goal. Anyone can request a product that they want, and we will find a way to design it with a unique flair.</h3>
                  </div>
                  <div className='horizontalDivision'></div>
                  <div className="tile">
                    <h1 className="title">Sustainable</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">We source our materials from local production facilities that ensure sustainable practices. Sustainable production is an important part of any business, and we pride ourselves on our practice</h3>
                  </div>
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
  title: PropTypes.string,
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
        title={frontmatter.title}
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
        title
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
        }
        description
      }
    }
  }
`
