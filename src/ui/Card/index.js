import * as R from 'ramda'
import styled from 'styled-components'
import { lighten } from 'polished'
import { colors } from '/styles/theme'

const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  border-radius: 4px;
  border: ${R.pipe(
  lighten(0.2),
  R.concat('solid 1px ')
)(colors.secondary)};
`

export default Card
