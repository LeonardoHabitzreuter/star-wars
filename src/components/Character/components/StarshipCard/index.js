import React from 'react'
import PropTypes from 'prop-types'
import ContentLoader from 'react-content-loader'
import useGetStarship from '../../hooks/useGetStarship'
import ErrorCard from '../ErrorCard'
import { Typography } from '/ui'
import { colors } from '/styles/theme'
import {
  StyledStarship,
  Row,
  LeftCol,
  RightCol,
  Title
} from './styles'

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

const StarshipCard = ({ id }) => {
  const [state, fetch] = useGetStarship(id)

  return (
    <>
      <ErrorCard
        onRetry={fetch}
        show={state.hasError}
        message='There was an error querying for the starship, try again.'
      />

      <StyledStarship>

        {state.loading && <Loader />}

        {!state.loading && !state.hasError && (
          <>
            <div>
              <Typography bold variant='subtitle'>
                {'Starship:  '}
              </Typography>
              <Title variant='h6'> {state.name}</Title>
            </div>
            <Row>
              <LeftCol bold>Model: <Typography>{state.model}</Typography></LeftCol>
              <RightCol bold>Length: <Typography>{state.length}</Typography></RightCol>
            </Row>
            <Row>
              <LeftCol bold>Starship class: <Typography>{state.starship_class}</Typography></LeftCol>
              <RightCol bold>Passengers: <Typography>{state.passengers}</Typography></RightCol>
            </Row>
            <Row>
              <LeftCol bold>Cargo capacity: <Typography>{state.cargo_capacity}</Typography></LeftCol>
              <RightCol bold>Crew: <Typography>{state.crew}</Typography></RightCol>
            </Row>
          </>
        )}
      </StyledStarship>
    </>
  )
}

StarshipCard.propTypes = {
  id: PropTypes.string.isRequired
}

export default StarshipCard
