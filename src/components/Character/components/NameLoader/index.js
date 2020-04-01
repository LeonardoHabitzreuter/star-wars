import React from 'react'
import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'
import { colors } from '/styles/theme'

const NameLoader = ({ loading }) => loading && (
  <ContentLoader
    speed={2}
    width='260px'
    height={100}
    viewBox='0 0 260 100'
    backgroundColor={colors.lightGray}
    foregroundColor={colors.darkGray}
  >

    <rect x='0' y='5' rx='3' ry='3' width='800' height='40' />
  </ContentLoader>
)

NameLoader.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default NameLoader
