import React from 'react'
import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'
import useGetStarship from '../../hooks/useGetStarship'
import ErrorCard from '../ErrorCard'
import { Typography } from '/ui'
import { colors } from '/styles/theme'
import { StyledStarship, Row, Characteristic } from './styles'

const Loader = () => (
  <ContentLoader
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
)

const StarshipCard = props => {
  const fetch = useGetStarship(props.url)

  console.log(props)
  return (
    <>
      <ErrorCard
        onRetry={fetch}
        show={props.hasError}
        message='There was an error querying for the starship, try again.'
      />

      <StyledStarship>

        {props.loading && <Loader />}

        {!props.loading && !props.hasError && (
          <>
            <Characteristic bold>
            Starship:
              <Typography variant='h6'> {props.name}</Typography>
            </Characteristic>
            <Row>
              <Characteristic bold>Model: <Typography>{props.model}</Typography></Characteristic>
              <Characteristic bold>Length: <Typography>{props.length}</Typography></Characteristic>
            </Row>
            <Row>
              <Characteristic bold>Manufacturer: <Typography>{props.manufacturer}</Typography></Characteristic>
              <Characteristic bold>Crew: <Typography>{props.crew}</Typography></Characteristic>
            </Row>
            <Row>
              <Characteristic bold>Starship class: <Typography>{props.starship_class}</Typography></Characteristic>
              <Characteristic bold>Cargo capacity: <Typography>{props.cargo_capacity}</Typography></Characteristic>
            </Row>
          </>
        )}
      </StyledStarship>
    </>
  )
}

StarshipCard.propTypes = {
  url: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  name: PropTypes.string,
  model: PropTypes.string,
  manufacturer: PropTypes.string,
  length: PropTypes.string,
  crew: PropTypes.string,
  starship_class: PropTypes.string,
  cargo_capacity: PropTypes.string
}

export default StarshipCard
