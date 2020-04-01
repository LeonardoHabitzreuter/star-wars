import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography, Button } from '/ui'

const ErrorCard = ({ show, onRetry }) => show && (
  <Card>
    <Typography variant='h6'>There was an error querying for the character, try again.</Typography>
    <Button onClick={onRetry}>Try again</Button>
  </Card>
)

ErrorCard.propTypes = {
  show: PropTypes.bool.isRequired,
  onRetry: PropTypes.func.isRequired
}

export default ErrorCard
