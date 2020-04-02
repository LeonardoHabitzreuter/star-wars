import React from 'react'
import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'
import { colors } from '/styles/theme'
import { StyledCharacter } from '../CharacterCard/styles'

// eslint-disable-next-line react/prop-types
const Loader = ({ hide }) => (
  <StyledCharacter hide={hide} data-testid="characterCard" >
    <ContentLoader
      uniqueKey='unique'
      speed={2}
      width='100%'
      height={160}
      viewBox='0 0 600 160'
      backgroundColor={colors.lightGray}
      foregroundColor={colors.darkGray}
    >

      <rect x='100' y='5' rx='3' ry='3' width='400' height='35' />
      <rect x='0' y='70' rx='3' ry='3' width='200' height='20' />
      <rect x='400' y='70' rx='3' ry='3' width='600' height='20' />
      <rect x='0' y='120' rx='3' ry='3' width='200' height='20' />
      <rect x='400' y='120' rx='3' ry='3' width='600' height='20' />
    </ContentLoader>
  </StyledCharacter>
)

const ContentLoaders = ({ loading }) => (
  <>
    <Loader hide={!loading} />
    <Loader hide={!loading} />
    <Loader hide={!loading} />
  </>
)

ContentLoaders.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default ContentLoaders
