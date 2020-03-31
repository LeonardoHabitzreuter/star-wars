import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import { Layout as StyledLayout, Main } from './styles'

const Layout = ({ children }) => (
  <StyledLayout>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </StyledLayout>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
