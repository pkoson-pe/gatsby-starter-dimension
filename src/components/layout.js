import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
              {
                name: 'google-site-verification',
                content: 'LBRe4vhEFj0Tcbc6wjXIAsnkTT4henh8Bdf46RUGKtk',
              },
              { 'http-equiv': 'cache-control', content: 'no-cache' },
              { 'http-equiv': 'expires', content: '0' },
              { 'http-equiv': 'pragma', content: 'no-cache' },
            ]}
          >
            <html lang="en" />
            <script src="https://www.stage.provenexpert.dev/seals/proseal.js"></script>
            {/* <script src="https://s.provenexpert.net/seals/proseal.js"></script> */}
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
